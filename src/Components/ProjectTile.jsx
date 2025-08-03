import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function getPLColor(language) {
    switch (language) {
        case "Python":
            return "#3572A5";
        case "JavaScript":
            return "#F1E05A";
        case "TypeScript":
            return "#2B7489";
        case "Java":
            return "#B07219";
        case "C":
            return "#555555";
        case "C++":
            return "#F34B7D";
        case "C#":
            return "#178600";
        case "Ruby":
            return "#701516";
        case "Go":
            return "#00ADD8";
        case "Rust":
            return "#DEA584";
        case "PHP":
            return "#4F5D95";
        case "Swift":
            return "#FFAC45";
        case "Kotlin":
            return "#A97BFF";
        case "Dart":
            return "#00B4AB";
        case "HTML":
            return "#E34C26";
        case "CSS":
            return "#563D7C";
        case "Shell":
        case "Bash":
            return "#89E051";
        case "R":
            return "#198CE7";
        case "Scala":
            return "#C22D40";
        case "Haskell":
            return "#5E5086";
        default:
            return "white";
    }
}

function ProjectTile(props) {
    return (
        <a href={props.link} className="project-tile">
            <div>
                <div className="title">
                    <FontAwesomeIcon
                        style={{ color: "white", fontSize: "26px" }}
                        icon={faBoxArchive}
                    />
                    <h4>{props.name}</h4>
                </div>
                <p>{props.discription}</p>
            </div>

            <div className="data">
                <div>
                    <FontAwesomeIcon
                        icon={faStarRegular}
                        style={{ color: "#ffc107", fontSize: "24px" }}
                    />
                    {" " + props.stars}
                </div>
                <div style={{ color: getPLColor(props.lang) }}>
                    <FontAwesomeIcon
                        icon={faCode}
                        style={{ color: "white", fontSize: "24px" }}
                    />
                    {" " + props.lang}
                </div>
            </div>
        </a>
    );
}
export default ProjectTile;
