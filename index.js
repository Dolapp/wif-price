const axios = require('axios');

async function getWifPrice() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=wifi-coin&vs_currencies=usd');
    const wifPrice = response.data['wifi-coin'].usd;
    return wifPrice;
  } catch (error) {
    console.error('Error retrieving WIF price:', error);
    throw error;
  }
}

module.exports = {
  getWifPrice
};
