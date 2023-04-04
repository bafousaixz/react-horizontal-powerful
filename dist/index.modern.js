import React__default, { useState, useEffect, createElement } from 'react';

const backIcon = React__default.createElement("svg", {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '36',
  height: '64',
  viewBox: '0 0 36 64',
  fill: 'none',
  "aria-label": 'Bi\u1EC3u t\u01B0\u1EE3ng quay l\u1EA1i'
}, React__default.createElement("path", {
  d: 'M1.31662 29.7157L30.0971 0.94476C31.36 -0.31492 33.4061 -0.31492 34.6721 0.94476C35.935 2.20444 35.935 4.25049 34.6721 5.51017L8.17444 31.9983L34.6689 58.4864C35.9318 59.7461 35.9318 61.7921 34.6689 63.055C33.4061 64.3147 31.3568 64.3147 30.0939 63.055L1.31343 34.284C0.0696983 33.0374 0.0696983 30.9592 1.31662 29.7157Z',
  fill: 'white'
}));
const nextIcon = React__default.createElement("svg", {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '36',
  height: '64',
  viewBox: '0 0 36 64',
  fill: 'none',
  "aria-label": 'Bi\u1EC3u t\u01B0\u1EE3ng ti\u1EBFp theo'
}, React__default.createElement("path", {
  d: 'M34.6835 29.7157L5.90299 0.94476C4.64012 -0.31492 2.59407 -0.31492 1.32801 0.94476C0.065142 2.20444 0.065142 4.25049 1.32801 5.51017L27.8257 31.9983L1.3312 58.4864C0.0683314 59.7461 0.0683314 61.7921 1.3312 63.055C2.59407 64.3147 4.64331 64.3147 5.90618 63.055L34.6867 34.284C35.9304 33.0374 35.9304 30.9592 34.6835 29.7157Z',
  fill: 'white'
}));

var styles = {"wrapper":"_styles-module__wrapper__1I_qj","icon":"_styles-module__icon__2Vept","iconLeft":"_styles-module__iconLeft__21teQ","iconRight":"_styles-module__iconRight__F9bfP","slideShow":"_styles-module__slideShow__X--x2","banner":"_styles-module__banner__3Y9D2","bannerMark":"_styles-module__bannerMark__2SgDB","bntArea":"_styles-module__bntArea__23Pn0","bannerTitle":"_styles-module__bannerTitle__1zF7X","BannerMark":"_styles-module__BannerMark__3mm4D","dotArea":"_styles-module__dotArea__2F6OO","dot":"_styles-module__dot__3U2py","selected":"_styles-module__selected__2tiFr","show":"_styles-module__show__2crlL","hide":"_styles-module__hide__3y8LI"};

const ExampleComponent = props => {
  const {
    isAutoScroll,
    values,
    delay,
    backIconCustom,
    nextIconCustom
  } = props;
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isAutoScroll) return;
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, delay || 500);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    setIndex(index === values.length - 1 ? 0 : index + 1);
  }, [count]);
  return createElement("div", {
    className: styles.wrapper
  }, values.length > 1 && createElement("button", {
    className: `${styles.iconLeft} ${styles.icon}`,
    onClick: () => setIndex(!index ? values.length - 1 : index - 1),
    "aria-label": 'Quay l\u1EA1i'
  }, backIconCustom || backIcon), createElement("div", {
    className: styles.slideShow
  }, values.map((data, idx) => createElement("div", {
    key: data.id,
    className: `${styles.banner} ${idx === index ? styles.show : styles.hide}`,
    style: {
      backgroundImage: `url(${data.image})`
    }
  }))), values.length > 1 && createElement("button", {
    className: `${styles.iconRight} ${styles.icon}`,
    onClick: () => setIndex(index === values.length - 1 ? 0 : index + 1),
    "aria-label": 'Ti\u1EBFp theo '
  }, nextIconCustom || nextIcon), createElement("ul", {
    className: styles.dotArea
  }, [...Array(values.length)].map((_, idx) => createElement("li", {
    key: Math.random(),
    className: `${styles.dot} ${index === idx && styles.selected}`,
    onClick: () => setIndex(idx),
    onKeyDown: () => setIndex(idx),
    role: 'presentation'
  }))));
};

export { ExampleComponent };
//# sourceMappingURL=index.modern.js.map
