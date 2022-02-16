import React, { useEffect } from "react";

function SecondApp() {

  useEffect(() => {
    window.location.href = "http://localhost:3005/Home";
  }, []);

  return (
    <div>
      <h2>Loading....</h2>
    </div>
  );
}

export default SecondApp;
