const PerformanceCalculator = require('./PerformanceCalculator')

function createPerformanceCalculator (aPerformance, aPlay) {
  switch(aPlay.type) {
    case "tragedy":
      return new TragedyCalculator()
    case "comedy":
      return new ComedyCalculator()
    default:
      throw new Error("UnKnow type")
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount () {
    return 100
  }

  get volumeCredits () {
    return super.volumeCredits + Math.floor(this.performance.audience / 5)
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount () {
    return 200
  }
}

module.exports = createPerformanceCalculator