import FirstPage from "./pages/FirstPage";
import SecoundPage from "./pages/SecoundPage";
import ThirdPage from "./pages/ThirdPage";
import ForthPage from "./pages/ForthPage.jsx"; // or wherever it lives
import FifthPage from "./pages/FifthPage";

import React, { useEffect, useState } from "react";
import { getUserData } from "./utils/github";
import { Riple } from "react-loading-indicators";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserData("yacine-bek").then(setUser);
    }, []);

    return (
        <>
            <FirstPage />
            {!user ? (
                <div className="loading-screen">
                    <h3>Projects Loading..</h3>
                    <Riple color="#f5ecdc" size="medium" text="" textColor="" />
                </div>
            ) : (
                <SecoundPage repos={user.repos} />
            )}

            <ThirdPage user={user} />
            <ForthPage />
            <FifthPage />
        </>
    );
}

export default App;
