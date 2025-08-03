import React, { useEffect, useState } from "react";

import { Riple } from "react-loading-indicators"; // Double-check if this is the correct component spelling

import FirstPage from "./pages/FirstPage";
import SecoundPage from "./pages/SecoundPage";
import ThirdPage from "./pages/ThirdPage";
import ForthPage from "./pages/ForthPage";
import FifthPage from "./pages/FifthPage";

import { getUserData } from "./utils/github";


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
