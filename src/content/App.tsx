import { useEffect } from "react";
import { isEmpty } from "lodash";

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

export default function App() {
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
