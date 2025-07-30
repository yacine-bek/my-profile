import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

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
                <div>
                    {" "}
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
