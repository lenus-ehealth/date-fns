'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _index = require('../../../_lib/buildLocalizeFn/index.js')

var _index2 = _interopRequireDefault(_index)

var _index3 = require('../../../_lib/buildLocalizeArrayFn/index.js')

var _index4 = _interopRequireDefault(_index3)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var weekdayValues = {
  narrow: ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so'],
  short: ['neď', 'pon', 'uto', 'str', 'štv', 'pia', 'sob'],
  long: [
    'nedeľa',
    'pondelok',
    'utorok',
    'streda',
    'štvrtok',
    'piatok',
    'sobota'
  ]
}

var monthValues = {
  short: [
    'jan',
    'feb',
    'mar',
    'apr',
    'máj',
    'jún',
    'júl',
    'aug',
    'sep',
    'okt',
    'nov',
    'dec'
  ],
  long: [
    'január',
    'február',
    'marec',
    'apríl',
    'máj',
    'jún',
    'júl',
    'august',
    'september',
    'október',
    'november',
    'december'
  ]
}

var timeOfDayValues = {
  uppercase: ['AM', 'PM'],
  lowercase: ['am', 'pm'],
  long: ['a.m.', 'p.m.']
}

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber)
  return number + '.'
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: (0, _index2.default)(weekdayValues, 'long'),
  weekdays: (0, _index4.default)(weekdayValues, 'long'),
  month: (0, _index2.default)(monthValues, 'long'),
  months: (0, _index4.default)(monthValues, 'long'),
  timeOfDay: (0, _index2.default)(timeOfDayValues, 'long', function(hours) {
    return hours / 12 >= 1 ? 1 : 0
  }),
  timesOfDay: (0, _index4.default)(timeOfDayValues, 'long')
}

exports.default = localize
module.exports = exports['default']
