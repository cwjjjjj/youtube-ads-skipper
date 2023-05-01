import Browser from "webextension-polyfill";

export async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await Browser.tabs.query(queryOptions);
  return tab;
}
