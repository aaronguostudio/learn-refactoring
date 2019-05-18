class PerformanceCalculator {
  constructor (aPerformance, aPlay) {
    this.aPerformance = aPerformance
    this.aPlay = aPlay
  }

  // behavior
  get amount () {
    throw new Error('Subclass responsibility')
  }

  // default credits, can be overwrited by the subclass
  get volumeCredits () {
    return Math.max(this.performance.audience - 30, 0)
  }
}

module.exports = PerformanceCalculator