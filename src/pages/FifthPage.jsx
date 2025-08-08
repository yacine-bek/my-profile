import { FaGithub, FaDiscord } from "react-icons/fa";
import "../styles/FifthPage.css"

function FifthPage() {
    return (
        <div className="fifth-page">
            <div className="git-section">
                <p>Like my work?</p>
                <a href="https://github.com/yacine-bek" target="_blank">
                    <p>Follow me on</p>
                    <FaGithub size={36} color="hsl(0, 0%, 80%)" />
                </a>
            </div>
            <div className="devider"></div>
            <a
                className="discord-section"
                href="https://discord.gg/6C8e3HBVJt"
                target="_blank"
            >
                <FaDiscord size={36} />
                Join us on Discord
            </a>

            <p className="powered">{"Made & Powered by ME"}</p>
        </div>
    );
}
export default FifthPage;
