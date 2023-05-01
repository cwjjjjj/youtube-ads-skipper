import { useEffect } from "react";
import { isEmpty } from "lodash";
import { getCurrentTab } from "../utils/getCurrentTab";

const YOUTUBE_AD_BUTTON_CLASSNAME = [
  "videoAdUiSkipButton",
  "ytp-ad-skip-button ytp-button",
];

const getElementsByClassNames = (classNames: string[]) =>
  classNames
    .map((className) =>
      isEmpty(document.getElementsByClassName(className))
        ? null
        : document.getElementsByClassName(className)
    )
    .filter((item) => item);

const isBilibili = (url?: string) => url?.includes("www.bilibili.com");

export default function App() {
  // bilibili playbackRate 2
  useEffect(() => {
    getCurrentTab().then((tab) => {
      if (isBilibili(tab.url)) {
        const videos = document.getElementsByTagName("video");
        const video = videos?.[0];
        if (video) {
          video.defaultPlaybackRate = 2;
          video.playbackRate = 2;
        }
      }
    });
  }, []);

  useEffect(() => {
    // skip youtube ads
    let youtubeADSkipButtons;
    const timer = setInterval(() => {
      youtubeADSkipButtons = getElementsByClassNames(
        YOUTUBE_AD_BUTTON_CLASSNAME
      );
      if (isEmpty(youtubeADSkipButtons)) {
        return;
      }
      youtubeADSkipButtons.forEach((youtubeADSkipButton) => {
        if (youtubeADSkipButton?.[0]) {
          (youtubeADSkipButton[0] as HTMLElement).click();
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return null;
}
