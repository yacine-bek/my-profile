import { FaGithub, FaDiscord, FaArrowDown } from "react-icons/fa";
function FirstPage() {
    return (
        <div className="first-page">
            <div className="top-logos">
                <a href="https://github.com/yacine-bek" target="_blank"> 
                    <FaGithub size={36} />
                </a>
                <a href="https://discord.gg/6C8e3HBVJt" target="_blank">
                    <FaDiscord size={36} />
                </a>
            </div>
            <div className="content">
                <h1>Hi 👋, I'm Yacine</h1>
                <h3>Computer Science Student and Open-Source Developer</h3>
            </div>
            <div className="triangle-section"></div>
            <a href="#secound-page">
                <div className="bottom-arrow-div">
                    <FaArrowDown className="bottom-arrow" size={32} />
                </div>
            </a>
        </div>
    );
}

export default FirstPage;
