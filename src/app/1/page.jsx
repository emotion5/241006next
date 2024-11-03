// 2. 스크롤 위치 제어 예제:

'use client';

import { useRef } from 'react';

const ScrollControl = () => {
  const contentRef = useRef(null);

  const scrollToBottom = () => {
    contentRef.current.scrollTop = contentRef.current.scrollHeight;
  };

  return (
    <div>
      <div 
        ref={contentRef} 
        style={{ height: '200px', overflow: 'auto', border: '1px solid black' }}
      >
        <p>긴 내용 1</p>
        <p>긴 내용 2</p>
        <p>긴 내용 3</p>
        <p>긴 내용 4</p>
        <p>긴 내용 5</p>
      </div>
      <button onClick={scrollToBottom}>맨 아래로</button>
    </div>
  );
};

export default ScrollControl;

// 이 코드는 스크롤이 있는 컨텐츠 영역의 스크롤 위치를 제어하는 예제입니다.
// useRef로 div 요소를 참조하고, 버튼 클릭시 scrollTop 속성을 조정하여 스크롤 위치를 변경합니다.


