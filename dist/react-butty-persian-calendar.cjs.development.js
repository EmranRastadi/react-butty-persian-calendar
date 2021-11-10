'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var moment = _interopDefault(require('jalali-moment'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var Swiper = _interopDefault(require('react-id-swiper'));
require('swiper/swiper-bundle.css');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26;
var media = {
  tablet: '@media screen and (min-width:684px)',
  desktop: '@media screen and (min-width:1024px)'
};
var colors = {
  primary: '#3f51b5'
};
var Start = styled__default.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 50px;\n"])));
var PopUp = styled__default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.1);\n  background: rgba(0 0 0 / 10%);\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  visibility: hidden;\n  z-index: -1;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s all ease;\n  -webkit-transition: 0.3s all ease;\n  -moz-transition: 0.3s all ease;\n\n  &.active {\n    visibility: visible;\n    z-index: 999999;\n    transition: 0.3s all ease;\n    -webkit-transition: 0.3s all ease;\n    -moz-transition: 0.3s all ease;\n  }\n"])));
var PopUpContent = styled__default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  width: 98vw;\n  height: 300px;\n  background: #fff;\n  overflow: hidden;\n  display: flex;\n  transform: translatey(50%);\n  transition: 0.3s all ease;\n  -webkit-transition: 0.3s all ease;\n  -moz-transition: 0.3s all ease;\n\n  &.active {\n    transform: translatey(0);\n    transition: 0.3s all ease;\n    -webkit-transition: 0.3s all ease;\n    -moz-transition: 0.3s all ease;\n  }\n\n  ", " {\n    width: calc(100vw / 2) !important;\n  }\n\n  ", " {\n    width: calc(100vw / 3) !important;\n  }\n"])), media.tablet, media.desktop);
var YearSide = styled__default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  flex: 2;\n  position: relative;\n  display: flex;\n  overflow-y: hidden;\n  min-height: 40vh;\n  max-height: 300px;\n  color: ", ";\n  background: ", ";\n\n  .active {\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme$options;

  return (_props$theme$options = props.theme.options) != null && _props$theme$options.sidebarColor ? props.theme.options.sidebarColor : '#212121';
}, function (props) {
  var _props$theme$options2;

  return (_props$theme$options2 = props.theme.options) != null && _props$theme$options2.sidebarBG ? props.theme.options.sidebarBG : '#f7f7f7';
}, function (props) {
  var _props$theme$options3;

  return (_props$theme$options3 = props.theme.options) != null && _props$theme$options3.activeColor ? props.theme.options.activeColor : colors['primary'];
});
var CalendarContent = styled__default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  flex: 8;\n  background: ", ";\n  display: flex;\n  max-height: 300px;\n  flex-direction: column;\n"])), function (props) {
  var _props$theme$options4;

  return (_props$theme$options4 = props.theme.options) != null && _props$theme$options4.containerBG ? props.theme.options.containerBG : '#ffffff';
});
var Month = styled__default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 35px;\n  float: right;\n  display: flex;\n  background: ", ";\n  font-size: 14px;\n  align-items: center;\n  justify-content: space-around;\n"])), function (props) {
  var _props$theme$options5;

  return (_props$theme$options5 = props.theme.options) != null && _props$theme$options5.containerBG ? props.theme.options.containerBG : '#ffffff';
});
var Today = styled__default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  cursor: pointer;\n  color: ", "\n"])), function (props) {
  var _props$theme$options6;

  return (_props$theme$options6 = props.theme.options) != null && _props$theme$options6.activeColor ? props.theme.options.activeColor : colors['primary'];
});
var MonthSelected = styled__default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  column-gap: 10px;\n  align-items: center;\n  height: 40px;\n  position: relative;\n  color: ", ";\n  cursor: pointer;\n  justify-content: center;\n  display: flex;\n"])), function (props) {
  var _props$theme$options7;

  return (_props$theme$options7 = props.theme.options) != null && _props$theme$options7.containerColor ? props.theme.options.containerColor : '#212121';
});
var Week = styled__default.ul(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  float: right;\n  list-style: none;\n  display: flex;\n  padding: 0px;\n  margin: 5px;\n  font-size: 13px;\n"])));
var WeekItem = styled__default.li(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  display: flex;\n  color: ", ";\n  align-items: center;\n  justify-content: center;\n"])), function (props) {
  var _props$theme$options8;

  return (_props$theme$options8 = props.theme.options) != null && _props$theme$options8.containerColor ? props.theme.options.containerColor : "#cccccc";
});
var DaysConten = styled__default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  min-height: 180px;\n  overflow-x: hidden;\n  overflow-y: auto;\n"])));
var DayStyle = /*#__PURE__*/styled__default("div")(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  width: 35px;\n  height: 35px;\n  display: flex;\n  color: ", ";\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50px;\n  transition: 0.3s all ease;\n  -webkit-transition: 0.3s all ease;\n  -moz-transition: 0.3s all ease;\n\n  &.hidden {\n    opacity: 0 !important;\n    cursor: unset;\n    z-index: -1;\n  }\n\n  #dayStatus {\n    width: 35px;\n    height: 35px;\n    cursor: pointer;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n\n    &.selected {\n      background: #ff9800;\n      border-radius: 50px;\n      color: #fff;\n    }\n\n    &.today {\n      color: #ff9800;\n    }\n\n\n    &:hover {\n      background: #eee;\n      border-radius: 50px;\n      color: #000;\n    }\n\n\n  }\n\n\n"])), function (props) {
  var _props$theme$options9;

  return (_props$theme$options9 = props.theme.options) != null && _props$theme$options9.containerColor ? props.theme.options.containerColor : '#212121';
});
var WeekColumn = styled__default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  background: ", ";\n  align-content: center;\n  justify-content: space-around;\n"])), function (props) {
  var _props$theme$options10;

  return (_props$theme$options10 = props.theme.options) != null && _props$theme$options10.containerBG ? props.theme.options.containerBG : "#ffffff";
});
var Chevron = styled__default.span(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  transform: rotate(90deg);\n  transition: 0.3s all ease;\n  -webkit-transition: 0.3s all ease;\n  -moz-transition: 0.3s all ease;\n\n  &.active {\n    transition: 0.3s all ease;\n    -webkit-transition: 0.3s all ease;\n    -moz-transition: 0.3s all ease;\n    transform: rotate(270deg);\n  }\n\n"])));
var SelectGroup = styled__default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n  width: 180px;\n  overflow: hidden !important;\n  background: ", ";\n  color: ", ";\n  z-index: -1;\n  grid-template: 2fr / auto auto;\n  opacity: 0;\n  top: 50px;\n  position: absolute;\n  padding: 5px 0 5px 0;\n  display: grid;\n  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);\n  transition: 0.3s all ease;\n  -webkit-transition: 0.3s all ease;\n  -moz-transition: 0.3s all ease;\n  border-radius: 5px;\n\n  &.active {\n    transition: 0.3s all ease;\n    -webkit-transition: 0.3s all ease;\n    -moz-transition: 0.3s all ease;\n    z-index: 99;\n    opacity: 1;\n    top: 30px;\n  }\n"])), function (props) {
  var _props$theme$options11;

  return (_props$theme$options11 = props.theme.options) != null && _props$theme$options11.selectMonthBG ? props.theme.options.selectMonthBG : '#ffffff';
}, function (props) {
  var _props$theme$options12;

  return (_props$theme$options12 = props.theme.options) != null && _props$theme$options12.selectMonthColor ? props.theme.options.selectMonthColor : '#212121';
});
var Preview = styled__default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  width: 100%;\n  cursor: pointer;\n  align-items: center;\n  justify-content: space-around;\n  height: 100%;\n  border: 1px solid #eee;\n  border-radius: 5px;\n\n"])));
var Icon = styled__default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", ";\n  height: ", ";\n"])), function (props) {
  var _props$theme$options13;

  return (_props$theme$options13 = props.theme.options) != null && _props$theme$options13.iconSize ? props.theme.options.iconSize.width : '20px';
}, function (props) {
  var _props$theme$options14;

  return (_props$theme$options14 = props.theme.options) != null && _props$theme$options14.iconSize ? props.theme.options.iconSize.height : '20px';
});
var SelectItem = styled__default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n  text-align: center;\n  padding: 2px 0 2px 0;\n\n  &:hover {\n    color: rgb(13, 71, 161);\n  }\n"])));
var YearGroup = styled__default.ul(_templateObject19 || (_templateObject19 = _taggedTemplateLiteralLoose(["\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  width: 100%;\n"])));
var YearItem = styled__default.li(_templateObject20 || (_templateObject20 = _taggedTemplateLiteralLoose(["\n  height: 35px;\n  line-height: 2.3;\n  color: #686868;\n\n  &.active {\n    font-weight: bold;\n    font-size: 21px;\n    line-height: 1.7;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme$options15;

  return (_props$theme$options15 = props.theme.options) != null && _props$theme$options15.activeColor ? props.theme.options.activeColor : colors['primary'];
});
var TopScroll = styled__default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 40px;\n  top: 0px;\n  left: 0px;\n  z-index: 99;\n  position: absolute;\n  background: linear-gradient(to bottom, ", ", transparent);\n"])), function (props) {
  var _props$theme$options16;

  return (_props$theme$options16 = props.theme.options) != null && _props$theme$options16.sidebarBG ? props.theme.options.sidebarBG : '#ffffff';
});
var BottomScroll = styled__default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 40px;\n  bottom: 0px;\n  left: 0px;\n  z-index: 99;\n  position: absolute;\n  background: linear-gradient(to top, ", ", transparent);\n"])), function (props) {
  var _props$theme$options17;

  return (_props$theme$options17 = props.theme.options) != null && _props$theme$options17.sidebarBG ? props.theme.options.sidebarBG : '#ffffff';
});
var GlassScrols = styled__default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 40px;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  margin: auto;\n  background: #fff;\n"])));
var Background = styled__default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background: rgba(0 0 0 / 2%);\n  z-index: 99999;\n  display: none;\n\n  &.active {\n    display: block;\n  }\n"])));
var MainFooter = styled__default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteralLoose(["\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  column-gap: 15px;\n  padding-left: 15px;\n"])));
var Button = styled__default.button(_templateObject26 || (_templateObject26 = _taggedTemplateLiteralLoose(["\n  width: 100px;\n  height: 35px;\n  border: unset;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.3s all ease;\n  -webkit-transition: 0.3s all ease;\n  -moz-transition: 0.3s all ease;\n\n\n  &.primary {\n    background: #0d47a1 !important;\n    color: #fff !important;\n    transition: 0.3s all ease;\n    -webkit-transition: 0.3s all ease;\n    -moz-transition: 0.3s all ease;\n\n    &:hover {\n      opacity: 0.8;\n      transition: 0.3s all ease;\n      -webkit-transition: 0.3s all ease;\n      -moz-transition: 0.3s all ease;\n    }\n  }\n\n  &.warning {\n    color: #212529;\n    background-color: #e0a800;\n    border-color: #d39e00;\n    transition: 0.3s all ease;\n    -webkit-transition: 0.3s all ease;\n    -moz-transition: 0.3s all ease;\n\n    &:hover {\n      opacity: 0.8;\n      transition: 0.3s all ease;\n      -webkit-transition: 0.3s all ease;\n      -moz-transition: 0.3s all ease;\n    }\n  }\n\n  &.danger {\n    color: #fff;\n    background-color: #c82333;\n    border-color: #bd2130;\n    transition: 0.3s all ease;\n    -webkit-transition: 0.3s all ease;\n    -moz-transition: 0.3s all ease;\n\n    &:hover {\n      opacity: 0.8;\n      transition: 0.3s all ease;\n      -webkit-transition: 0.3s all ease;\n      -moz-transition: 0.3s all ease;\n    }\n  }\n\n  &.success {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34;\n    transition: 0.3s all ease;\n    -webkit-transition: 0.3s all ease;\n    -moz-transition: 0.3s all ease;\n\n    &:hover {\n      opacity: 0.8;\n      transition: 0.3s all ease;\n      -webkit-transition: 0.3s all ease;\n      -moz-transition: 0.3s all ease;\n    }\n  }\n\n  &.default {\n    color: #212121;\n    background: #eee;\n    transition: 0.3s all ease;\n    -webkit-transition: 0.3s all ease;\n    -moz-transition: 0.3s all ease;\n\n    &:hover {\n      color: #eee;\n      background: #212121;\n      transition: 0.3s all ease;\n      -webkit-transition: 0.3s all ease;\n      -moz-transition: 0.3s all ease;\n    }\n  }\n\n\n"])));

var ContextApiDate = /*#__PURE__*/React.createContext('');

function ContextApi(props) {
  var _useState = React.useState(props.defaultValue ? moment(props.defaultValue).locale('fa') : moment().locale('fa')),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = React.useState(false),
      optionActive = _useState2[0],
      setOptionActive = _useState2[1];

  var defaultValue = props.defaultValue;
  return React__default.createElement(ContextApiDate.Provider, {
    value: {
      value: value,
      setValue: setValue,
      optionActive: optionActive,
      defaultValue: defaultValue,
      setOptionActive: setOptionActive
    }
  }, props.children);
}

function SideBar() {
  var _useContext = React.useContext(ContextApiDate),
      value = _useContext.value,
      setValue = _useContext.setValue,
      setOptionActive = _useContext.setOptionActive;

  var _useState = React.useState([]),
      data = _useState[0],
      setData = _useState[1];

  React.useEffect(function () {
    var prevYears = getPrevYears(50);
    var nextYears = getNextYears(50).reverse();
    var newYears = nextYears.concat(prevYears);
    setData(newYears);
  }, []);

  function getPrevYears(numOfYears) {
    var nowDateMini = moment(value).subtract(1, 'year');
    return Array.from({
      length: numOfYears
    }, function (v, i) {
      localStorage.setItem("laruz7476", v ? v : 'emran rastadi');
      return moment(nowDateMini).subtract(i, 'year');
    });
  }

  function getNextYears(numOfYears) {
    return Array.from({
      length: numOfYears
    }, function (v, i) {
      localStorage.setItem("laruz7476", v ? v : 'emran rastadi');
      return moment(value).add(i, 'year');
    });
  }

  var swiperRef = React.useRef(null);
  var params = {
    // direction: "vertical",
    slidesPerView: 8,
    spaceBetween: 5,
    grabCursor: true,
    centeredSlides: true,
    freeMode: true
  };
  return React__default.createElement(YearSide, null, React__default.createElement(TopScroll, null), React__default.createElement(React__default.Fragment, null, React__default.createElement(Swiper, _extends({
    ref: swiperRef
  }, params, {
    activeSlideKey: value ? value.format('YYYY').toString() : '0',
    direction: 'vertical'
  }), data.length > 20 ? data.map(function (item) {
    var itemYear = moment(item).locale('fa').format('YYYY');
    return React__default.createElement("div", {
      key: moment(item).locale('fa').format('YYYY'),
      onClick: function onClick() {
        setValue(item);
        setOptionActive(false);
      },
      className: value ? value.format('YYYY') === itemYear ? 'active' : '' : ''
    }, itemYear);
  }) : '')), React__default.createElement(BottomScroll, null));
}

function isSelected(day, value) {
  return value.isSame(day, "day");
}

function beforeMonth(day, value) {
  return value.isBefore(day, "month");
}

function afterMonth(day, value) {
  return value.isAfter(day, "month");
}

function isToday(day) {
  return day.isSame(new Date(), "day");
}

function dayStyle(day, value) {
  if (beforeMonth(day, value) || afterMonth(day, value)) return "hidden";
  if (isSelected(day, value)) return "selected";
  if (isToday(day)) return "today";
  return "";
}

function buildCalender(value) {
  var startDay = value.clone().startOf("month").startOf("week");
  var EndDay = value.clone().endOf("month").endOf("week");
  var day = startDay.clone().subtract(1, 'day');
  var calender = [];

  while (day.isBefore(EndDay, "day")) {
    calender.push(Array(7).fill(0).map(function () {
      return day.add(1, "day").clone();
    }));
  }

  return calender;
}

function Header() {
  var _useContext = React.useContext(ContextApiDate),
      value = _useContext.value,
      setValue = _useContext.setValue,
      optionActive = _useContext.optionActive,
      setOptionActive = _useContext.setOptionActive;

  var _useState = React.useState([]),
      months = _useState[0],
      setMonths = _useState[1];

  function getHeadDate() {
    return moment(value).locale('fa').format('MMMM') + " " + moment(value).locale('fa').format('YYYY');
  }

  function handleGetMonthList() {
    var monthListArr = [];
    var startOfMonth = value.clone().startOf('year');

    for (var i = 1; i <= 12; i++) {
      var newMonth = moment(startOfMonth).add(i, 'month').clone();
      monthListArr.push(newMonth);
    }

    setMonths(monthListArr);
  }

  return React__default.createElement(Month, null, React__default.createElement(MonthSelected, {
    id: "main-click"
  }, React__default.createElement("span", {
    onClick: function onClick() {
      handleGetMonthList();
      setOptionActive(!optionActive);
    }
  }, getHeadDate()), " ", React__default.createElement(Chevron, {
    className: optionActive ? "active" : ""
  }, String.fromCharCode(60)), React__default.createElement(SelectGroup, {
    id: "optional-group",
    className: optionActive ? "active" : ""
  }, months.length ? months.map(function (item, index) {
    return React__default.createElement(SelectItem, {
      onClick: function onClick() {
        setValue(item);
        setOptionActive(false);
      },
      key: index
    }, item.format('MMMM'));
  }) : '')), React__default.createElement(Today, {
    onClick: function onClick() {
      setValue(moment(new Date()).locale('fa'));
    }
  }, "\u0627\u0645\u0631\u0648\u0632"));
}

function Pretty(props) {
  var year = moment(props.value).locale('fa').format('YYYY');
  var month = moment(props.value).locale('fa').format('MMMM');
  var day = moment(props.value).locale('fa').format('D');
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("span", null, day), React__default.createElement("span", null, month), React__default.createElement("span", null, year));
}

function Default(props) {
  var year = moment(props.value).locale('fa').format('YYYY');
  var month = moment(props.value).locale('fa').format('M');
  var day = moment(props.value).locale('fa').format('D');
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("span", null, day), React__default.createElement("span", null, "/"), React__default.createElement("span", null, month), React__default.createElement("span", null, "/"), React__default.createElement("span", null, year));
}

function Luncher(props) {
  var _props$options, _props$options2, _props$options3, _props$options4, _props$options5, _props$options6;

  var _useContext = React.useContext(ContextApiDate),
      value = _useContext.value,
      setValue = _useContext.setValue,
      setOptionActive = _useContext.setOptionActive,
      defaultValue = _useContext.defaultValue;

  var _useState = React.useState(false),
      show = _useState[0],
      setShow = _useState[1];

  var _useState2 = React.useState([]),
      calendar = _useState2[0],
      setCalendar = _useState2[1];

  var _useState3 = React.useState(''),
      confirmVal = _useState3[0],
      setConfirmVal = _useState3[1];

  var theme = {
    start: {
      height: 50
    }
  };
  React.useEffect(function () {
    setCalendar(buildCalender(value));
  }, [value]);

  function getEventChange(day) {
    setValue(day);
    setOptionActive(false);
    var date = {
      year: moment(day).locale('fa').format('YYYY'),
      month: moment(day).locale('fa').format('MMMM'),
      monthNum: moment(day).locale('fa').format('M'),
      day: moment(day).locale('fa').format('D')
    };
    setConfirmVal({
      date: date,
      timestamp: Date.parse(day)
    });
  }

  var _useState4 = React.useState(defaultValue),
      confirms = _useState4[0],
      setConfirms = _useState4[1];

  function confirm(e) {
    e.preventDefault();
    props.onChange(confirmVal);
    setConfirms(value);
    setShow(false);
  }

  return React__default.createElement(styled.ThemeProvider, {
    theme: theme
  }, React__default.createElement(Preview, {
    onClick: function onClick() {
      return setShow(true);
    }
  }, React__default.createElement(Icon, null, props.icon), (_props$options = props.options) != null && _props$options.showType ? ((_props$options2 = props.options) == null ? void 0 : _props$options2.showType) === "pretty" ? React__default.createElement(Pretty, {
    value: confirms
  }) : React__default.createElement(Default, {
    value: confirms
  }) : React__default.createElement(Default, {
    value: confirms
  })), React__default.createElement(PopUp, {
    className: show ? "active" : ""
  }, React__default.createElement(PopUpContent, {
    className: show ? "active" : ''
  }, React__default.createElement(SideBar, null), React__default.createElement(CalendarContent, null, React__default.createElement(Header, null), React__default.createElement(Week, null, React__default.createElement(WeekItem, null, "\u0634"), React__default.createElement(WeekItem, null, "\u06CC"), React__default.createElement(WeekItem, null, "\u062F"), React__default.createElement(WeekItem, null, "\u0633"), React__default.createElement(WeekItem, null, "\u0686"), React__default.createElement(WeekItem, null, "\u067E"), React__default.createElement(WeekItem, null, "\u062C")), React__default.createElement(DaysConten, null, calendar.map(function (weeks, index) {
    return React__default.createElement(WeekColumn, {
      key: index
    }, weeks.map(function (day, indexs) {
      return React__default.createElement(DayStyle, {
        className: dayStyle(day, value) === "hidden" ? "hidden" : "now",
        key: indexs,
        onClick: function onClick() {
          return getEventChange(day.locale('fa'));
        }
      }, React__default.createElement("div", {
        className: dayStyle(day, value),
        id: "dayStatus"
      }, day.format("D").toString()));
    }));
  })), React__default.createElement(MainFooter, null, React__default.createElement(Button, {
    onClick: function onClick() {
      return setShow(false);
    },
    className: (_props$options3 = props.options) != null && _props$options3.cancelBtnType ? (_props$options4 = props.options) == null ? void 0 : _props$options4.cancelBtnType : "default"
  }, "\u0628\u0627\u0632\u06AF\u0634\u062A"), React__default.createElement(Button, {
    onClick: function onClick(e) {
      return confirm(e);
    },
    className: (_props$options5 = props.options) != null && _props$options5.accessBtnType ? (_props$options6 = props.options) == null ? void 0 : _props$options6.accessBtnType : "primary"
  }, "\u062A\u0627\u06CC\u06CC\u062F"))))));
}

function Index(props) {
  var theme = {
    options: props.options
  };
  return React__default.createElement(ContextApi, {
    defaultValue: props.defaultValue
  }, React__default.createElement(styled.ThemeProvider, {
    theme: theme
  }, React__default.createElement(Luncher, _extends({}, props))));
}

exports.ButtyCalendar = Index;
//# sourceMappingURL=react-butty-persian-calendar.cjs.development.js.map
