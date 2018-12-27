// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('sv locale > formatDistance', function() {
  describe('lessThanXSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXSeconds', 1) === 'mindre end et sekund')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(
          formatDistance('lessThanXSeconds', 2) === 'mindre end to sekunder'
        )
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(
          formatDistance('lessThanXSeconds', 13) === 'mindre end 13 sekunder'
        )
      })
    })
  })

  describe('xSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 1) === 'et sekund')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 2) === 'to sekunder')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 13) === '13 sekunder')
      })
    })
  })

  describe('halfAMinute', function() {
    it('returns a proper string', function() {
      assert(formatDistance('halfAMinute') === 'et halvt minut')
    })

    it('ignores the second argument', function() {
      assert(formatDistance('halfAMinute', 123) === 'et halvt minut')
    })
  })

  describe('lessThanXMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXMinutes', 1) === 'mindre end et minut')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(
          formatDistance('lessThanXMinutes', 2) === 'mindre end to minutter'
        )
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(
          formatDistance('lessThanXMinutes', 13) === 'mindre end 13 minutter'
        )
      })
    })
  })

  describe('xMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 1) === 'et minut')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 2) === 'to minutter')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 13) === '13 minutter')
      })
    })
  })

  describe('aboutXHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 1) === 'cirka en time')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 2) === 'cirka to timer')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 13) === 'cirka 13 timer')
      })
    })
  })

  describe('xHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 1) === 'en time')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 2) === 'to timer')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 13) === '13 timer')
      })
    })
  })

  describe('xDays', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 1) === 'en dag')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 2) === 'to dage')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 13) === '13 dage')
      })
    })
  })

  describe('aboutXMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 1) === 'cirka en måned')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 2) === 'cirka to måneder')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 13) === 'cirka 13 måneder')
      })
    })
  })

  describe('xMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 1) === 'en måned')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 2) === 'to måneder')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 13) === '13 måneder')
      })
    })
  })

  describe('aboutXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 1) === 'cirka et år')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 2) === 'cirka to år')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 13) === 'cirka 13 år')
      })
    })
  })

  describe('xYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 1) === 'et år')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 2) === 'to år')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 13) === '13 år')
      })
    })
  })

  describe('overXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 1) === 'over et år')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 2) === 'over to år')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 13) === 'over 13 år')
      })
    })
  })

  describe('almostXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 1) === 'næsten et år')
      })
    })

    context('when the count equals 2', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 2) === 'næsten to år')
      })
    })

    context('when the count is more than 12', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 13) === 'næsten 13 år')
      })
    })
  })

  context('with a past suffix', function() {
    it('adds `sedan` to a string', function() {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'cirka et år siden')
    })
  })

  context('with a future suffix', function() {
    it('adds `om` to a string', function() {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'om et halvt minut')
    })
  })
})
