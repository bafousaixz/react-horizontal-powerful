function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var backIcon = React__default.createElement("svg", {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '36',
  height: '64',
  viewBox: '0 0 36 64',
  fill: 'none',
  "aria-label": "Bi\u1EC3u t\u01B0\u1EE3ng quay l\u1EA1i"
}, React__default.createElement("path", {
  d: 'M1.31662 29.7157L30.0971 0.94476C31.36 -0.31492 33.4061 -0.31492 34.6721 0.94476C35.935 2.20444 35.935 4.25049 34.6721 5.51017L8.17444 31.9983L34.6689 58.4864C35.9318 59.7461 35.9318 61.7921 34.6689 63.055C33.4061 64.3147 31.3568 64.3147 30.0939 63.055L1.31343 34.284C0.0696983 33.0374 0.0696983 30.9592 1.31662 29.7157Z',
  fill: 'white'
}));
var nextIcon = React__default.createElement("svg", {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '36',
  height: '64',
  viewBox: '0 0 36 64',
  fill: 'none',
  "aria-label": "Bi\u1EC3u t\u01B0\u1EE3ng ti\u1EBFp theo"
}, React__default.createElement("path", {
  d: 'M34.6835 29.7157L5.90299 0.94476C4.64012 -0.31492 2.59407 -0.31492 1.32801 0.94476C0.065142 2.20444 0.065142 4.25049 1.32801 5.51017L27.8257 31.9983L1.3312 58.4864C0.0683314 59.7461 0.0683314 61.7921 1.3312 63.055C2.59407 64.3147 4.64331 64.3147 5.90618 63.055L34.6867 34.284C35.9304 33.0374 35.9304 30.9592 34.6835 29.7157Z',
  fill: 'white'
}));

var styles = {"wrapper":"_styles-module__wrapper__1I_qj","icon":"_styles-module__icon__2Vept","iconLeft":"_styles-module__iconLeft__21teQ","iconRight":"_styles-module__iconRight__F9bfP","slideShow":"_styles-module__slideShow__X--x2","banner":"_styles-module__banner__3Y9D2","bannerMark":"_styles-module__bannerMark__2SgDB","bntArea":"_styles-module__bntArea__23Pn0","bannerTitle":"_styles-module__bannerTitle__1zF7X","BannerMark":"_styles-module__BannerMark__3mm4D","dotArea":"_styles-module__dotArea__2F6OO","dot":"_styles-module__dot__3U2py","selected":"_styles-module__selected__2tiFr","show":"_styles-module__show__2crlL","hide":"_styles-module__hide__3y8LI"};

var ExampleComponent = function ExampleComponent(props) {
  var isAutoScroll = props.isAutoScroll,
    values = props.values,
    delay = props.delay,
    backIconCustom = props.backIconCustom,
    nextIconCustom = props.nextIconCustom;
  var _useState = React.useState(0),
    index = _useState[0],
    setIndex = _useState[1];
  var _useState2 = React.useState(0),
    count = _useState2[0],
    setCount = _useState2[1];
  React.useEffect(function () {
    if (!isAutoScroll) return;
    var intervalId = setInterval(function () {
      setCount(function (prevCount) {
        return prevCount + 1;
      });
    }, delay || 500);
    return function () {
      return clearInterval(intervalId);
    };
  }, []);
  React.useEffect(function () {
    setIndex(index === values.length - 1 ? 0 : index + 1);
  }, [count]);
  return React.createElement("div", {
    className: styles.wrapper
  }, values.length > 1 && React.createElement("button", {
    className: styles.iconLeft + " " + styles.icon,
    onClick: function onClick() {
      return setIndex(!index ? values.length - 1 : index - 1);
    },
    "aria-label": "Quay l\u1EA1i"
  }, backIconCustom || backIcon), React.createElement("div", {
    className: styles.slideShow
  }, values.map(function (data, idx) {
    return React.createElement("div", {
      key: data.id,
      className: styles.banner + " " + (idx === index ? styles.show : styles.hide),
      style: {
        backgroundImage: "url(" + data.image + ")"
      }
    });
  })), values.length > 1 && React.createElement("button", {
    className: styles.iconRight + " " + styles.icon,
    onClick: function onClick() {
      return setIndex(index === values.length - 1 ? 0 : index + 1);
    },
    "aria-label": "Ti\u1EBFp theo"
  }, nextIconCustom || nextIcon), React.createElement("ul", {
    className: styles.dotArea
  }, [].concat(Array(values.length)).map(function (_, idx) {
    return React.createElement("li", {
      key: Math.random(),
      className: styles.dot + " " + (index === idx && styles.selected),
      onClick: function onClick() {
        return setIndex(idx);
      },
      onKeyDown: function onKeyDown() {
        return setIndex(idx);
      },
      role: 'presentation'
    });
  })));
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
