React의 useRef를 활용한 몇 가지 실용적인 예제를 보여드리겠습니다:

1. 입력 필드 포커스 예제:
```javascript
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
```

2. 스크롤 위치 제어 예제:
```javascript
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
```

3. 비디오 제어 예제:
```javascript
'use client';

import { useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video 
        ref={videoRef}
        src="/sample-video.mp4" 
        style={{ width: '300px' }}
      />
      <div>
        <button onClick={handlePlay}>재생</button>
        <button onClick={handlePause}>일시정지</button>
      </div>
    </div>
  );
};

export default VideoPlayer;

// 이 코드는 비디오 요소를 제어하는 예제입니다.
// useRef로 video 요소를 참조하고, 버튼 클릭시 play()와 pause() 메서드를 호출하여 비디오를 제어합니다.
```

4. 이전 값 저장 예제:
```javascript
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
```​​​​​​​​​​​​​​​​