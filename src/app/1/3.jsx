// 3. 비디오 제어 예제:

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


