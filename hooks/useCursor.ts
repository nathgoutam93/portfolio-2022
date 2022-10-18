import { useEffect, useRef } from "react";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function clamp(num: number, min: number, max: number){
  return Math.min(Math.max(num, min), max)
} 

const useCursor = () => {

  const cursorRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const cursorPos = useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const scrollPrv = useRef<number>(0);

  // listen for mouse movement
  // re-position cursor on mouse move
  useEffect(() => {
    const handleMousePos = (event: MouseEvent) => {
      mousePos.current = {
        x: event.pageX,
        y: event.pageY,
      };
    };

    document.addEventListener("mousemove", handleMousePos);

    return () => {
      document.removeEventListener("mousemove", handleMousePos);
    };
  }, []);
  
  
  // listen for scroll event
  // re-position cursor on scroll 
  useEffect(() => {
    const handleMousePos = () => {
      if(cursorRef.current == null) return;
      mousePos.current = {
        x: mousePos.current.x,
        y: mousePos.current.y + (window.scrollY - scrollPrv.current),
      };
      scrollPrv.current = window.scrollY;
    };

    document.addEventListener("scroll", handleMousePos);

    return () => {
      document.removeEventListener("scroll", handleMousePos);
    };
  }, []);

  // animate cursor movement smoothly
  // whenever cursor re-position happen
  useEffect(() => {
    const MOUSE_SENSITIVITY = 0.2;
    let requestFrame = 0;

    function animate() {
      if (cursorRef.current == null) return;

      const x = Math.round(
        lerp(cursorPos.current.x, mousePos.current.x, MOUSE_SENSITIVITY)
      );
      const y = Math.round(
        lerp(cursorPos.current.y, mousePos.current.y, MOUSE_SENSITIVITY)
      );

      cursorPos.current = { x: clamp(x,0,document.body.clientWidth), y };

      cursorRef.current.style.left = `${
        cursorPos.current.x - cursorRef.current.clientWidth / 2
      }px`;
      cursorRef.current.style.top = `${
        cursorPos.current.y - cursorRef.current.clientHeight / 2
      }px`;

      requestFrame = requestAnimationFrame(animate);
    }

    window.requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestFrame);
    };
  }, []);

  return cursorRef;
};

export default useCursor;
