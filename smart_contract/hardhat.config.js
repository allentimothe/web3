require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/1K4C4iHIYsObJ4Tk_f7cIurVhtmc3uc0',
      accounts: ['e1e8ceb96b0139a3f031633b842a9c549ce557990324f08c1727f6842cfc266d'],
    },
  },

};