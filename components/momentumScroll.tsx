import React, { useEffect, useRef } from "react";
import useWindowSize from "../hooks/useWindowSize";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

type Props = {
  children?: React.ReactNode;
};

const MomentumScroll: React.FC<Props> = ({ children }) => {
  const size = useWindowSize();
  const momentumRef = useRef<HTMLDivElement>(null);

  const scrollPos = useRef({
    x: 0,
    y: 0,
  });

  const containerPos = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (momentumRef.current == null) return;

    document.body.style.height = momentumRef.current.clientHeight + "px";

    momentumRef.current.style.position = "fixed";
    momentumRef.current.style.width = "100%";
    momentumRef.current.style.top = "0";
    momentumRef.current.style.left = "0";
  }, [size.height, size.width]);

  useEffect(() => {
    const easeScroll = () => {
      scrollPos.current = {
        x: window.scrollX,
        y: window.scrollY,
      };
    };

    window.addEventListener("scroll", easeScroll);

    return () => {
      window.removeEventListener("scroll", easeScroll);
    };
  }, []);

  useEffect(() => {
    const SCROLL_LAG = 0.03;
    let requestFrame = 0;

    function render() {
      if (momentumRef.current == null) return;

      const x = Math.floor(
        lerp(containerPos.current.x, scrollPos.current.x, SCROLL_LAG)
      );
      const y = Math.floor(
        lerp(containerPos.current.y, scrollPos.current.y, SCROLL_LAG)
      );

      containerPos.current = { x, y };

      momentumRef.current.style.transform = `translate3d(-${containerPos.current.x}px, -${containerPos.current.y}px, 0px)`;

      requestFrame = requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(requestFrame);
    };
  }, []);

  return <div ref={momentumRef}>{children}</div>;
};

export default MomentumScroll;
