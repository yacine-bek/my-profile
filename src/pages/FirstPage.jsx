import { FaGithub, FaDiscord, FaArrowDown } from "react-icons/fa";
import Animated from "../utils/animation";
import "../styles/FirstPage.css";
import TextType from "../utils/TextType/TextType";
import SplitText from "../utils/SplitText/SplitText";
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
            <Animated
                things={
                    <div className="content">
                        <h1>Hi 👋, I'm Yacine</h1>
                        <TextType
                            className="h3-desc"
                            text={[
                                "Computer Science Student",
                                "Open-Source Developer",
                            ]}
                            typingSpeed={75}
                            pauseDuration={1200}
                            showCursor={true}
                            cursorCharacter="_"
                            textColors={["hsla(38, 9%, 77%, 1.00)"]}
                        />
                    </div>
                }
            />
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
