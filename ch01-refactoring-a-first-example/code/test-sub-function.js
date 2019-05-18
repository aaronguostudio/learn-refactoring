testSubFunction = () => {
  let result = {}
  result.amount = amountFor()
  result.credit = creditFor()

  function amountFor() {
    return 100
  }

  function creditFor() {
    return 10
  }

  return result
}

module.exports = testSubFunction