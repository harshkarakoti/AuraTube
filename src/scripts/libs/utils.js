const getOS = () => {
  try {
    const list = [
      { match: 'window', name: 'Windows' },
      { match: 'mac', name: 'Mac' },
      { match: 'cros', name: 'Chrome+OS' },
      { match: 'ubuntu', name: 'Ubuntu+(Linux)' },
      { match: 'android', name: 'Android' },
      { match: 'ios', name: 'iOS' },
      { match: 'x11', name: 'Linux' },
    ];
    const ua = globalThis.navigator.userAgent;
    const os = list.find((os) => ua.toLowerCase().indexOf(os.match) >= 0);
    return os ? os.name : '';
  } catch {
    return null;
  }
};

const browsersUAList = [
  { ua: 'Firefox', name: 'Firefox' },
  { ua: 'OPR', name: 'Opera' },
  { ua: 'Edg', name: 'Edge' },
  { ua: 'Chrome', name: 'Chrome' },
];

let browser;
export const getBrowser = () => {
  if (browser === undefined) {
    try {
      const ua = globalThis.navigator.userAgent;
      const _browser = browsersUAList.find(
        (browser) => ua.indexOf(browser.ua) >= 0
      );
      browser = _browser ? _browser.name : '';
    } catch {
      browser = null;
    }
  }
  return browser;
};

let browserVersion;
const getBrowserVersion = () => {
  if (browserVersion === undefined) {
    try {
      const browserName = getBrowser();
      const browserUA = browsersUAList.find(
        (browser) => browserName === browser.name
      ).ua;
      const ua = globalThis.navigator.userAgent;
      const matches = ua.match(`${browserUA}/([0-9.]+)`);
      browserVersion = matches.length === 2 ? matches[1] : ua;
    } catch {
      browserVersion = null;
    }
  }
  return browserVersion;
};

export const getVersion = () => {
  try {
    return (chrome.runtime.getManifest() || {}).version;
  } catch {
    return null;
  }
};

export const getFeedbackFormLink = (version) => {
  return '';
};

const privacyPolicyLinks = {};
export const getPrivacyPolicyLink = () => {
  return '#';
};
