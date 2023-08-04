module.exports = value => {
  const result = parseInt(value, 10)
  if (isNaN(result)) {
    throw new Error(`Passed value is not a number: ${value}`)
  }
  return result
}
