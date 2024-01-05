import react, { useState, useEffect } from "react";

const useWindowSize = () => {
  const [device, setDevice] = useState();
  useEffect(() => {
    const resizeHandler = () => {
      setDevice(window.innerWidth < 768 ? "mobile" : "desktop");
    };
    resizeHandler();

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return device;
};

export default useWindowSize;
