"use strict"

const graph = require( './graph');
const max_timestamp = 1584644120;
const timestamp = 1584557720; // Set to 1 day before max timestamp.

/**
 * 
 */
module.exports = class Volume {

    /** 
     * Returns the total volume of buy and sells of oTokens in 1 day,
     * and the buys and sells in $value of insurance coverage bought and sold per day.
    */
    static calculateDailyVolume() {
        let oTokensBuyVolume = 0;
        let oTokensSellVolume = 0;

        let boughtInsuranceCoverage = 0;
        let soldInsuranceCoverage = 0;

        graph.data.buyOTokensActions.forEach(buyOToken => {
            if(parseInt(buyOToken.timestamp) >= timestamp && parseInt(buyOToken.timestamp) <= max_timestamp) {
                oTokensBuyVolume += parseInt(buyOToken.oTokensToBuy);    
                boughtInsuranceCoverage += parseInt(buyOToken.oTokensToBuy) * parseInt(buyOToken.token.strikePriceValue);
            }
        });

        graph.data.sellOTokensActions.forEach(sellOToken => {
            if(parseInt(sellOToken.timestamp) >= timestamp && parseInt(sellOToken.timestamp) <= max_timestamp) {
                oTokensSellVolume += parseInt(sellOToken.oTokensToSell); 
                soldInsuranceCoverage += parseInt(sellOToken.oTokensToSell) * parseInt(sellOToken.token.strikePriceValue);
            }
        });

        console.log("Total Volume: " +  oTokensBuyVolume + oTokensSellVolume);
        console.log("Bought Insurance Coverage: " + boughtInsuranceCoverage);
        console.log("Sold Insurance Coverage: " +  soldInsuranceCoverage);
    }
}