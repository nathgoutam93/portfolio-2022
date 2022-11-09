import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";

type Props = {
  children?: React.ReactNode;
};

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MomentumScroll: React.FC<Props> = ({ children }) => {
  const smoothWrapperRef = useRef<HTMLDivElement>(null);
  const smoothContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollSmoother.create({
      content: smoothContentRef.current,
      wrapper: smoothWrapperRef.current,
      smooth: 2,
    });
  }, []);

  return (
    <div ref={smoothWrapperRef}>
      <div ref={smoothContentRef}>{children}</div>
    </div>
  );
};

export default MomentumScroll;
