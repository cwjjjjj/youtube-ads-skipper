import Browser from "webextension-polyfill";
Browser.runtime.onInstalled.addListener((detail) => {});

Browser.tabs.onCreated.addListener(async (newTab) => {});

Browser.tabs.onActivated.addListener(async (res) => {});

Browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {});
