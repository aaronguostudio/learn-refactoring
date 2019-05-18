const testSubFunction = require('./test-sub-function')
const createPerformanceCalculator = require('./test-factory-function')

function runSubFunctionTest () {
  console.log(testSubFunction())
}

function runTestPloymorphicCalculator () {
  const mockPerformance = {}
  const mockPlayTragedy = {
    type: 'tragedy'
  }
  const mockPlayComedy = {
    type: 'comedy'
  }
  const calculatorTragedy = createPerformanceCalculator(mockPerformance, mockPlayTragedy)
  const calculatorComedy = createPerformanceCalculator(mockPerformance, mockPlayComedy)
  console.log('> For tragedy', calculatorTragedy.amount)
  console.log('> For comedy', calculatorComedy.amount)
}

runTestPloymorphicCalculator()