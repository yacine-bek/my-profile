import ProjectTile from "../Components/ProjectTile";
import { useRef, useEffect } from "react";
import "../styles/SecoundPage.css"

function SecoundPage({ repos }) {
    const repoEntries = Object.entries(repos);
    const andMoreRef = useRef(null); // just for the button

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        });

        if (andMoreRef.current) {
            observer.observe(andMoreRef.current);
        }

        return () => {
            if (andMoreRef.current) {
                observer.unobserve(andMoreRef.current);
            }
        };
    }, []);

    return (
        <div id="secound-page">
            <div className="content">
                <h1>Projects</h1>
                <div className="projects">
                    {repoEntries.map(([name, repo], index) => (
                        <div className="line" key={index}>
                            <ProjectTile
                                name={name}
                                discription={repo.description || "No description provided"}
                                stars={repo.stars}
                                lang={repo.language || "Unknown"}
                                link={repo.url}
                            />
                        </div>
                    ))}
                </div>
                <div className="parent-and-more">
                    <a
                        href="https://github.com/yacine-bek?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div
                            className="and-more fade-in"
                            ref={andMoreRef}
                        >
                            And More!
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SecoundPage;
