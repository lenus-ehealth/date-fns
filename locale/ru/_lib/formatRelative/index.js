'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = formatRelative

var _index = require('../../../../_lib/isSameUTCWeek/index.js')

var _index2 = _interopRequireDefault(_index)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var accusativeWeekdays = [
  'воскресенье',
  'понедельник',
  'вторник',
  'среду',
  'четверг',
  'пятницу',
  'субботу'
]

function _lastWeek(day) {
  var weekday = accusativeWeekdays[day]

  switch (day) {
    case 0:
      return "'в прошлое " + weekday + " в' p"
    case 1:
    case 2:
    case 4:
      return "'в прошлый " + weekday + " в' p"
    case 3:
    case 5:
    case 6:
      return "'в прошлую " + weekday + " в' p"
  }
}

function thisWeek(day) {
  var weekday = accusativeWeekdays[day]

  if (day === 2 /* Tue */) {
    return "'во " + weekday + " в' p"
  } else {
    return "'в " + weekday + " в' p"
  }
}

function _nextWeek(day) {
  var weekday = accusativeWeekdays[day]

  switch (day) {
    case 0:
      return "'в следующее " + weekday + " в' p"
    case 1:
    case 2:
    case 4:
      return "'в следующий " + weekday + " в' p"
    case 3:
    case 5:
    case 6:
      return "'в следующую " + weekday + " в' p"
  }
}

var formatRelativeLocale = {
  lastWeek: function lastWeek(date, baseDate, options) {
    var day = date.getUTCDay()
    if ((0, _index2.default)(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return _lastWeek(day)
    }
  },
  yesterday: "'вчера в' p",
  today: "'сегодня в' p",
  tomorrow: "'завтра в' p",
  nextWeek: function nextWeek(date, baseDate, options) {
    var day = date.getUTCDay()
    if ((0, _index2.default)(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return _nextWeek(day)
    }
  },
  other: 'P'
}

function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date, baseDate, options)
  }

  return format
}
module.exports = exports['default']
