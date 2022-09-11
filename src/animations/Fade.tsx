import React, { useState, useEffect } from "react";

const Fader = ({ children }: any) => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-in") {
        setFadeProp({
          fade: "fade-out",
        });
      } else {
        setFadeProp({
          fade: "fade-in",
        });
      }
    }, 800);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  return <div className={fadeProp.fade}>{children}</div>;
};

export default Fader;
