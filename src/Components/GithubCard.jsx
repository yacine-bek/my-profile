
export default function GithubCard({ user }) {
  return (
    <div className="git-hub-card">
        <img
          title={user.bio}
          src={user.avatar}
          width={110}
          height={110}
          alt={user.name}
          className="rounded-md"
        />
      <div className="profile-data">
          <p>{user.followers} Followers <br /> {user.repoCount} Repositories</p>
      </div>
    </div>
  );
}
