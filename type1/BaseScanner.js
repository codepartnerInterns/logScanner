const Web3 = require('web3');

// Requirement for any Scanner
// WS Link ✅

let wsLink = "wss://bsc-testnet.nodereal.io/ws/v1/e489391cd08848b28e92efbf49a92cc1"

let Web3WS = new Web3(wsLink);

// Web3WS.eth.subscribe('newBlockHeaders') // Define what you want to subscribe
// .on('connected',connectionId=>{ // OPTIONAL BUT GOOD TO KNOW IF CONNECTED OR NOT
//     console.log("Connected",connectionId);
// })
// .on('data',data=>{ // ALL THE PROCESSING OF DATA GOES HERE
//     console.log("Data",data);
// })
// .on("error",err=>{ // IF ERROR NOT IMPLEMENTED THEN I BREAKS THE CODE
//     console.log(err);
// })

// Web3WS.eth.subscribe('pendingTransactions') // Define what you want to subscribe
// .on('connected',connectionId=>{ // OPTIONAL BUT GOOD TO KNOW IF CONNECTED OR NOT
//     console.log("Connected",connectionId);
// })
// .on('data',data=>{ // ALL THE PROCESSING OF DATA GOES HERE
//     console.log("Data",data);
// })
// .on("error",err=>{ // IF ERROR NOT IMPLEMENTED THEN I BREAKS THE CODE
//     console.log(err);
// })

Web3WS.eth.subscribe('logs') // Define what you want to subscribe
.on('connected',connectionId=>{ // OPTIONAL BUT GOOD TO KNOW IF CONNECTED OR NOT
    console.log("Connected",connectionId);
})
.on('data',data=>{ // ALL THE PROCESSING OF DATA GOES HERE
    console.log("Data",data);
})
.on("error",err=>{ // IF ERROR NOT IMPLEMENTED THEN I BREAKS THE CODE
    console.log(err);
})