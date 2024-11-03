'use client';

import { useRef } from 'react';

const SimpleRef = () => {
  const divRef = useRef(null);

  return (
    <div ref={divRef}>
      Hello World
    </div>
  );
};

export default SimpleRef;