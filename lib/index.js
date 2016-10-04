const Web3 = require('web3')
const btoa = require('btoa')
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const Provider = Web3.providers.HttpProvider

class Client {
  constructor (user, password, network) {
    Provider.prototype.prepareRequest = function (async) {
      var request = new XMLHttpRequest()
      request.open('POST', this.host, async)
      request.setRequestHeader('Content-Type','application/json')
      request.setRequestHeader('Authorization','Basic ' + btoa(user + ':' + password))
      return request
    }

    var provider = new Provider('https://eth.chain.host/' + network)
    var web3 = new Web3(provider)

    return web3
  }
}

module.exports = Client