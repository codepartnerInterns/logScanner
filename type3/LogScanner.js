// Scan Log from Transaction
// Use Case Explorer
const Web3 = require("web3");
let web3rpc = new Web3('https://bsc-testnet.nodereal.io/v1/e489391cd08848b28e92efbf49a92cc1')
web3rpc.eth.getTransactionReceipt('0x93ec673566e02a44c02239513a18f1bc237b2194f10ebbadffc3052001e2ee4e')
.then(res=>{
    console.log(res.logs);

}).catch(err=>{console.log(err)})