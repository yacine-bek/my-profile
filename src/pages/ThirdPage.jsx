import { Eye } from "lucide-react";
import GithubCard from "../Components/GithubCard";
import SkillsSection from "../Components/SkillsSection";
import "../styles/ThirdPage.css"

function ThirdPage(props) {
    return (
        <div className="third-page">
            <div className="triangle-section-2"></div>
            <div className="about-me">
                <div className="preview">
                    <Eye size={30} color="white" />
                    <h5>Preview</h5>
                </div>
                <div className="row">
                    <div className="my-data">
                        <h4>Who is this guy?</h4>
                        <p>
                            I'm Yacine Bekheddouma, 20 years old, live in
                            Algiers.
                        </p>
                        <p>
                            Currently in my third year of Computer Science at
                            USTHB.
                        </p>
                        <p>
                            I have a strong interest in programming,
                            problem-solving, and learning new technologies
                            quickly.
                        </p>
                        <p>
                            My focus is on building a solid foundation in
                            software development and continuously improving my
                            skill set.
                        </p>
                        <p>
                            I'm open to learning, collaborating, and
                            contributing to meaningful, challenging projects.
                        </p>

                        <div>
                            <a
                                href="https://github.com/yacine-bek"
                                target="_blank"
                            >
                                <div className="git-profile">
                                    {props.user ? (
                                        <GithubCard user={props.user} />
                                    ) : (
                                        <p className="text-white">Loading...</p>
                                    )}
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="skills">
                        <SkillsSection />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ThirdPage;
