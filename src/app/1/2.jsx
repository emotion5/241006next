'use client';

import { useRef } from 'react';

const InputFocus = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="입력하세요" />
      <button onClick={handleFocus}>포커스</button>
    </div>
  );
};

export default InputFocus;

// 이 코드는 버튼 클릭시 input 요소에 포커스를 주는 예제입니다.
// useRef를 사용하여 input 요소를 참조하고, 버튼 클릭시 focus() 메서드를 호출합니다.
