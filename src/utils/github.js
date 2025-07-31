export async function getUserData(username) {
    // Fetch user profile data
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userRes.json();

    // Fetch public repositories
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
    const reposData = await reposRes.json();

    const reposNeeded = ["Calculator", "achievement-folia", "Agence-Immobiliere", "JavaFx-Game", "Nike-App", "WampServer"];

    const filteredRepos = reposData
        .filter(repo => reposNeeded.includes(repo.name))
        .reduce((acc, repo) => {
            acc[repo.name] = {
                description: repo.description,
                url: repo.html_url,
                language: repo.language,
                stars: repo.stargazers_count
            };
            return acc;
        }, {});

    return {
        name: userData.name,
        bio: userData.bio,
        avatar: userData.avatar_url,
        followers: userData.followers,
        repoCount: userData.public_repos,
        repos: filteredRepos
    };
}
