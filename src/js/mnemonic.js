var bip39 = require("bip39");
var ethers = require("ethers");
const mnemonic = bip39.generateMnemonic();
console.log(ethers.Wallet.fromMnemonic(mnemonic).privateKey);
console.log(ethers.Wallet.fromMnemonic(mnemonic).address);
