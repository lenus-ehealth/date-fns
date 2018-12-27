'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = formatDistance
var formatDistanceLocale = {
  lessThanXSeconds: {
    singular: 'mindre end et sekund',
    plural: 'mindre end {{count}} sekunder'
  },

  xSeconds: {
    singular: 'et sekund',
    plural: '{{count}} sekunder'
  },

  halfAMinute: 'et halvt minut',

  lessThanXMinutes: {
    singular: 'mindre end et minut',
    plural: 'mindre end {{count}} minutter'
  },

  xMinutes: {
    singular: 'et minut',
    plural: '{{count}} minutter'
  },

  aboutXHours: {
    singular: 'cirka en time',
    plural: 'cirka {{count}} timer'
  },

  xHours: {
    singular: 'en time',
    plural: '{{count}} timer'
  },

  xDays: {
    singular: 'en dag',
    plural: '{{count}} dage'
  },

  aboutXMonths: {
    singular: 'cirka en måned',
    plural: 'cirka {{count}} måneder'
  },

  xMonths: {
    singular: 'en måned',
    plural: '{{count}} måneder'
  },

  aboutXYears: {
    singular: 'cirka et år',
    plural: 'cirka {{count}} år'
  },

  xYears: {
    singular: 'et år',
    plural: '{{count}} år'
  },

  overXYears: {
    singular: 'over et år',
    plural: 'over {{count}} år'
  },

  almostXYears: {
    singular: 'næsten et år',
    plural: 'næsten {{count}} år'
  }
}

var wordMapping = [
  'nul',
  'et',
  'to',
  'tre',
  'fire',
  'fem',
  'seks',
  'syv',
  'otte',
  'ni',
  'ti',
  'elleve',
  'tolv'
]

function formatDistance(token, count, options) {
  options = options || {
    onlyNumeric: false
  }

  var translation = formatDistanceLocale[token]
  var result
  if (typeof translation === 'string') {
    result = translation
  } else if (count === 0 || count > 1) {
    if (options.onlyNumeric) {
      result = translation.plural.replace('{{count}}', count)
    } else {
      result = translation.plural.replace(
        '{{count}}',
        count < 13 ? wordMapping[count] : count
      )
    }
  } else {
    result = translation.singular
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'om ' + result
    } else {
      return result + ' siden'
    }
  }

  return result
}
module.exports = exports['default']
