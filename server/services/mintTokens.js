// helps us to setup the passport library in order to handle requests visiting
// sites requiring authentication

import makeTransaction from './makeTransaction';
import asyncForEach from '../helpers/asynForEach';
import config from '../config.js';

const tokenIds = [1,2,3,4,5,6,7,8,9,10]

const ValidProof = {
    "proof": {
        "a": ["0x2669b6d5de3b0e1609143ed52e51703b5a01b72a78baea4ae7ecd9c54e02f322", "0x11ed3d9776f251e486cfb14b7bc69cf888945e17caa5cb7a24b3b2df55bf13d4"],
        "b": [["0x14b144e5982b613cf9e0e26ea5c6746bb914ae362ab8a99db7ee50c2b3981bc7", "0x27aeaca781085aad392ab3de662ae564a484b2d0aa9fe34b98f341221e120754"], ["0x010f31cc56b15c419e9ab0c5969eaa108ef27fad1ef3aa05af8e3d964a43bf12", "0x05013fe629579da16fb0b183e4db7599f56752f84082bb9fe92a6f83a4cc820f"]],
        "c": ["0x29884f09e88752a0f4d1aab95961e5c88f43a5c4024bae4bd47584e1649fde07", "0x1ab41ced25211f05cd828f4121e8705937e08d1e41752c408a24b5a8b62e49f3"]
    },
    "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000001"]
}

export default (contracts) => {
    // define the contract to send the information to
    const myContract = contracts[0];
    const toAddress = myContract.options.address;
    // define the account from which it should send
    const fromAccount = config.MetaMaskWallet.accounts[0];
    const destination = config.mintTokenAddress;
    asyncForEach(tokenIds, async (tokenId) => {
        ///@dev Fix randomResponse to 20 for testing purposes
        const data = myContract.methods.mintToken(
            destination, 
            tokenId, 
            ValidProof.proof.a, 
            ValidProof.proof.b,
            ValidProof.proof.c,
            ValidProof.inputs);
        try{
            console.log(data);
            const logs = await makeTransaction(data, fromAccount, toAddress, 7000000);
            console.log("Response from mintToken transaction", logs)
            return;
        } catch(err) {
            console.log(err)
        }
        
    })
}
