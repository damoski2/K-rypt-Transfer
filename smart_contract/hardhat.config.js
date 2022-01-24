// https://eth-ropsten.alchemyapi.io/v2/Szjf3o2C63xArDQqzfLxx85YDu6JNu_-

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url : 'https://eth-ropsten.alchemyapi.io/v2/Szjf3o2C63xArDQqzfLxx85YDu6JNu_-',
      accounts: [ '5b0081ddccf6a86a07fd286a66a595d281706a4a433391898f76c476f6a595b5' ]
    }
  }
}