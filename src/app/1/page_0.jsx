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

/*
코드 구조 분석:

1. 클라이언트 컴포넌트 선언
- 'use client' 지시문을 통해 클라이언트 컴포넌트임을 명시

2. 모듈 임포트
- React의 useRef 훅을 임포트

3. 컴포넌트 정의
- SimpleRef라는 이름의 함수형 컴포넌트 선언
- 화살표 함수 형태로 정의

4. Ref 사용
- useRef 훅을 사용하여 divRef 생성
- 초기값으로 null 설정

5. JSX 반환
- div 엘리먼트 반환
- div에 ref 속성으로 divRef 연결
- "Hello World" 텍스트 포함

6. 컴포넌트 내보내기
- default export로 SimpleRef 컴포넌트 내보내기

주요 특징:
- 클라이언트 사이드 렌더링 컴포넌트
- useRef를 통한 DOM 요소 참조 가능
- 최소한의 구조로 된 기본적인 React 컴포넌트
*/

