import { useEffect, useRef } from "react";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
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

  useEffect(() => {
    const MOUSE_SENSITIVITY = 0.3;
    let requestFrame = 0;

    function animate() {
      if (cursorRef.current == null) return;

      const x = Math.round(
        lerp(cursorPos.current.x, mousePos.current.x, MOUSE_SENSITIVITY)
      );
      const y = Math.round(
        lerp(cursorPos.current.y, mousePos.current.y, MOUSE_SENSITIVITY)
      );

      cursorPos.current = { x, y };

      cursorRef.current.style.left = `${
        cursorPos.current.x - cursorRef.current.clientWidth / 2
      }px`;
      cursorRef.current.style.top = `${
        cursorPos.current.y - cursorRef.current.clientHeight / 2
      }px`;

      requestFrame = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(requestFrame);
    };
  }, []);

  return cursorRef;
};

export default useCursor;