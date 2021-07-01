const ftest = require('./utils/firstTest') 

describe('initial', () => {
    test('first tests', () => {
      expect(false).toBe(ftest())
    })
})