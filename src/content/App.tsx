import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import { isEmpty } from "lodash";

const YOUTUBE_AD_BUTTON_CLASSNAME = [
  "videoAdUiSkipButton", // Old close ad button
  "ytp-ad-skip-button ytp-button", // New close ad button
];

// const YOUTUBE_AD_BUTTON_ELEMENTS = YOUTUBE_AD_BUTTON_CLASSNAME.map(
//   (className) =>
//     isEmpty(document.getElementsByClassName(className))
//       ? null
//       : document.getElementsByClassName(className)
// ).filter((item) => item);

const getElementsByClassNames = (classNames: string[]) =>
  classNames
    .map((className) =>
      isEmpty(document.getElementsByClassName(className))
        ? null
        : document.getElementsByClassName(className)
    )
    .filter((item) => item);

export default function App() {
  // 视频二倍速
  useEffect(() => {
    const videos = document.getElementsByTagName("video");
    const video = videos?.[0];

    if (video) {
      video.defaultPlaybackRate = 2;
      video.playbackRate = 2;
    }
  }, []);

  useEffect(() => {
    let youtubeADSkipButtons;
    const timer = setInterval(() => {
      youtubeADSkipButtons = getElementsByClassNames(
        YOUTUBE_AD_BUTTON_CLASSNAME
      );
      console.log("youtubeADSkipButtons", youtubeADSkipButtons);
      if (isEmpty(youtubeADSkipButtons)) {
        return;
      }
      youtubeADSkipButtons.forEach((youtubeADSkipButton) => {
        console.log("item", Date.now(), youtubeADSkipButton);
        if (youtubeADSkipButton?.[0]) {
          (youtubeADSkipButton[0] as HTMLElement).click();
          console.log("skp");
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
    >
      aaasd
    </div>
  );
}
