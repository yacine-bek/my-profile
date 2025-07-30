import Badges from "../Components/Badges";

function ForthPage() {
    return (
        <div className="forth-page">
            <img
                src="https://nirzak-streak-stats.vercel.app/?user=yacine-bek&amp;theme=dark&amp;hide_border=false"
                alt=""
                style={{ width: "100%", maxWidth: 600 }}
            ></img>
            <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=yacine-bek&layout=compact&theme=dark"
                alt="Top Languages"
                style={{ width: "100%", maxWidth: 400 }}
            />
            <Badges />
        </div>
    );
}
export default ForthPage;
