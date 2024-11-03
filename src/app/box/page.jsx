'use client';
import { useRef } from 'react';

export default function SimpleRef() {
  const divRef = useRef(null);

  return (
    <div ref={divRef}>
      Hello World
    </div>
  );
}