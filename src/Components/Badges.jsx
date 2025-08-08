function Badges() {
    const PL = [
        "cs",
        "css3",
        "dart",
        "html5",
        "java",
        "javascript",
        "kotlin",
        "python",
    ];

    const FramWork = [
        "dotNET",
        "django",
        "flask",
        "Flutter",
        "javafx",
        "NPM",
        "node.js",
        "react",
    ];

    const social = [
        "Microsoft",
        "Android",
        "Fedora",
        "Windows",
        "Discord",
        "Telegram",
        "X",
        "Apple",
        "Brave",
        "chatGPT",
        "Google Chrome",
        "Canva",
        "blender",
        "figma",
        "AMD",
        "intel",
        "nVIDIA",
    ];

    const ide = [
        "android studio",
        "Eclipse",
        "IntelliJIDEA",
        "Visual Studio Code",
        "Visual Studio",
        "firebase",
        "MongoDB",
        "mysql",
        "sqlite",
        "git",
        "github",
        "Reddit",
        "Stackoverflow",
        "LeetCode",
        "Udemy",
    ];

    const badges = [...PL, ...FramWork, ...ide, ...social];
    return (
        <div>
            <h3>Me In Badge</h3>
            <div className="badges">
                {badges.map((name, idx) => (
                    <img
                        key={idx}
                        src={`/badges/${name}.svg`}
                        alt={name}
                        loading="lazy"
                        decoding="async"
                    />
                ))}
            </div>
        </div>
    );
}
export default Badges;
