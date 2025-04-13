import React, { useRef } from 'react';

function RefHookExample() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>useRef Hook - Focus Input</h3>
      <input ref={inputRef} type="text" placeholder="Type here" />
      <button onClick={handleClick}>Focus the Input</button>
    </div>
  );
}

export default RefHookExample;
