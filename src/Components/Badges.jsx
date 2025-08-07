function Badges() {
    const PL = [
        "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white",
        "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
        "https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white",
        "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
        "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
        "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        "https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white",
        "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    ];
    const FramWork = [
        "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white",
        "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
        "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
        "https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white",
        "https://img.shields.io/badge/javafx-%23FF0000.svg?style=for-the-badge&logo=javafx&logoColor=white",
        "https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white",
        "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
        "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
        "https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101",
    ];
    const social = [
        "https://img.shields.io/badge/Microsoft-0078D4?style=for-the-badge&logo=microsoft&logoColor=white",
        "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white",
        "https://img.shields.io/badge/Fedora-294172?style=for-the-badge&logo=fedora&logoColor=white",
        "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white",
        "https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white",
        "https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white",
        "https://img.shields.io/badge/X-%23000000.svg?style=for-the-badge&logo=X&logoColor=white",
        "https://img.shields.io/badge/Apple-%23000000.svg?style=for-the-badge&logo=apple&logoColor=white",
        "https://img.shields.io/badge/Brave-FB542B?style=for-the-badge&logo=Brave&logoColor=white",

        "https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white",
        "https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white",
        "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white",
        "https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white",
        "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
        "https://img.shields.io/badge/AMD-%23000000.svg?style=for-the-badge&logo=amd&logoColor=white",
        "https://img.shields.io/badge/intel-%230068B5%20.svg?style=for-the-badge&logo=intel&logoColor=white",
        "https://img.shields.io/badge/nVIDIA-%2376B900.svg?style=for-the-badge&logo=nVIDIA&logoColor=white",
    ];
    const ide = [
        "https://img.shields.io/badge/android%20studio-346ac1?style=for-the-badge&logo=android%20studio&logoColor=white",
        "https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white",
        "https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white",
        "https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white",
        "https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white",
        "https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34",
        "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
        "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
        "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
        "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
        "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
        "https://img.shields.io/badge/Reddit-%23FF4500.svg?style=for-the-badge&logo=Reddit&logoColor=white",
        "https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white",
        "https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06",
        "https://img.shields.io/badge/Udemy-A435F0?style=for-the-badge&logo=Udemy&logoColor=white",
    ];

    const badges = [...PL, ...FramWork, ...ide, ...social];
    return (
        <div>
            <h3>Me In Badge</h3>
            <div className="badges">
                {badges.map((bg, idx) => (
                    <img key={idx} src={bg} alt="badge" />
                ))}
            </div>
        </div>
    );
}
export default Badges;
