import React, { useEffect, useState } from "react";

import { Riple } from "react-loading-indicators"; // Double-check if this is the correct component spelling

import FirstPage from "./pages/FirstPage";
import SecoundPage from "./pages/SecoundPage";
import ThirdPage from "./pages/ThirdPage";
import ForthPage from "./pages/ForthPage";
import FifthPage from "./pages/FifthPage";


function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/api/users/yacine-bek")
            .then((res) => {
                if (!res.ok) throw new Error("User not found");
                return res.json();
            })
            .then(setUser)
            .catch((err) => console.error(err));
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
