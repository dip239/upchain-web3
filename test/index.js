'use strict'
const expect = require('chai').expect
const Web3 = require('../lib')

describe('test upchain web3 client', () => {
  it('should connect to a node', (done) => {
    var web3 = new Web3('https://eth.chain.host/testnet', {
      user: 'up',
      password: 'chain'
    })
    web3.eth.getBlock(0, (err, block) => {
      if (err) {
        return done(err)
      }

      expect(block).to.have.ownProperty('hash')
      expect(block.hash).to.equal('0x0cd786a2425d16f152c658316c423e6ce1181e15c3295826d7c9904cba9ce303')

      done()
    })
  })
})