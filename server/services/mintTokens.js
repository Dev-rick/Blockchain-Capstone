// helps us to setup the passport library in order to handle requests visiting
// sites requiring authentication

import makeTransaction from './makeTransaction';
import asyncForEach from '../helpers/asynForEach';
import config from '../config.js';
import ValidProof from '../../zokrates/code/proof';

const tokenIds = config.tokenIds;


export default (contracts) => {
    console.log(ValidProof);
    // define the contract to send the information to
    const myContract = contracts[0];
    const toAddress = myContract.options.address;
    // define the account from which it should send
    const fromAccount = config.MetaMaskWallet.accounts[0];
    const destination = config.mintTokenAddress;
    asyncForEach(tokenIds, async (tokenId) => {
        console.log(tokenId)
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
            const logs = await makeTransaction(data, fromAccount, toAddress, 5000000);
            console.log("Response from mintToken transaction", logs)
            return;
        } catch(err) {
            console.log(err)
        }
        
    })
}
