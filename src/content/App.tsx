import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";

const videos = document.getElementsByTagName("video");
const video = videos?.[0];

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   document.addEventListener("keydown", (e) => {
  //     console.log("e", e);
  //   });

  //   setTimeout(() => {
  //     // if (ref?.current) {
  //     //   ref.current.click();
  //     // }

  //     // 模拟按下键盘按钮
  //     const pressKeyEvent = new KeyboardEvent("keydown", {
  //       key: "f",
  //       code: "KeyF",
  //       which: 70,
  //       keyCode: 70,
  //     });
  //     document.dispatchEvent(pressKeyEvent);

  //     // 模拟释放键盘按钮
  //     const releaseKeyEvent = new KeyboardEvent("keyup", {
  //       key: "f",
  //       code: "KeyF",
  //       which: 70,
  //       keyCode: 70,
  //     });
  //     document.dispatchEvent(releaseKeyEvent);
  //   }, 10000);
  // }, []);

  useEffect(() => {
    console.log("video", video, document.fullscreenEnabled);

    if (video) {
      video.defaultPlaybackRate = 2;
      video.playbackRate = 2;

      // todo 全屏操作只能由用户触发？
      // video.requestFullscreen();
      // video.click();
    }
  }, [video]);
  // const [isPlaying, setIsPlaying] = useState(false);
  // useEffect(() => {
  //   const videos = document.getElementsByTagName("video");
  //   const video = videos?.[0];
  //   if (video) {
  //     console.log("video", video.onplaying);

  //     // video.pause();
  //     video.defaultPlaybackRate = 2;
  //     video.playbackRate = 2;
  //   }
  // }, [isPlaying]);

  return (
    <div
      css={css`
        color: red;
        position: fixed;
        top: 100px;
        left: 100px;
        font-size: 100px;
        z-index: 999;
      `}
      onClick={() => {
        console.log("123123123");
        video.requestFullscreen();
      }}
      ref={ref}
    >
      App
    </div>
  );
}
