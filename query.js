let Query = `
{
    buyOTokensActions(orderBy: timestamp, orderDirection: desc) {
    oTokensToBuy
    paymentTokenPrice
    paymentTokenAddress
    premiumPaid
    timestamp
    token {
      strike
      strikePriceValue
    }
  }
  
  sellOTokensActions(orderBy: timestamp, orderDirection: desc) {
    oTokensToSell
    payoutTokenPrice
    payoutTokenAddress
    payoutTokensReceived
    timestamp
    token {
      strike
      strikePriceValue
    }
  }
}
`

module.exports = { Query };