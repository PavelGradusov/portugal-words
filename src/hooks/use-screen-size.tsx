import { useEffect, useState } from "react";

function UseScreenSize() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const setFunc = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", setFunc);
    return () => {
      window.removeEventListener("resize", setFunc);
    };
  }, []);

  return { screenSize };
}

export default UseScreenSize;
