import React, { useRef, useLayoutEffect } from 'react';



function ButtonWithTooltip() {
  const buttonRef = useRef(null);
  const tooltipRef = useRef(null);

  useLayoutEffect(() => {
    if (buttonRef.current && tooltipRef.current) {
      const buttonHeight = buttonRef.current.getBoundingClientRect().height;
      console.log(buttonRef.current,tooltipRef.current,buttonHeight);
      tooltipRef.current.style.height = `${buttonHeight}px`; 
    }
  }, []);

  return (
    <>
      <button ref={buttonRef}>Button</button>
      <div className="tooltip" ref={tooltipRef}>
        Tooltip content
      </div>
    </>
  );
}

export default ButtonWithTooltip;