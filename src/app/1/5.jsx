// 4. 이전 값 저장 예제:

'use client';

import { useRef, useState } from 'react';

const PreviousValue = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  const handleClick = () => {
    prevCountRef.current = count;
    setCount(count + 1);
  };

  return (
    <div>
      <p>현재 값: {count}</p>
      <p>이전 값: {prevCountRef.current}</p>
      <button onClick={handleClick}>증가</button>
    </div>
  );
};

export default PreviousValue;

// 이 코드는 상태의 이전 값을 저장하는 예제입니다.
// useRef를 사용하여 이전 카운트 값을 저장하고, 버튼 클릭시 현재 값을 업데이트하면서 이전 값을 보존합니다.
