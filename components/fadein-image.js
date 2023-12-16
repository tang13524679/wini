import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import classNames from "classnames";

export default function FadeInImage(props) {
  const isMounted = useRef(false);
  const [isLoaded, setLoaded] = useState(false);
  const classes = classNames("transition-all duration-500", {
    "opacity-100": isLoaded,
    "opacity-0": !isLoaded,
  });

  // will be called when the image has been loaded
  const loadingCompleteCallback = useCallback(() => {
    if (isMounted.current) setLoaded(true);
  }, [isMounted]);

  // tracks current component if it's still mounted to the DOM
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Image
      placeholder="blur"
      layout="fill"
      objectFit="cover"
      alt="fade in image"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU0tSqBwACAAD+PTNZxQAAAABJRU5ErkJggg=="
      className={classes}
      onLoadingComplete={loadingCompleteCallback}
      {...props}
    />
  );
}
