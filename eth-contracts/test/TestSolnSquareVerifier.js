// Test if a new solution can be added for contract - SolnSquareVerifier
// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

let SquareVerifier = artifacts.require('SquareVerifier');
let SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

let correctProof = require('../../zokrates/code/proof');

contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    beforeEach(async function () { 
        const SquareVerifierContract = await SquareVerifier.new({ from: account_one });
        this.contract = await SolnSquareVerifier.new(SquareVerifierContract.address, { from: account_one });
    })

    it('if a new solution can be added for contract and ERC721 token can be minted for contract',async function () {
        let canMint = true;
        try{
            await this.contract.mintToken(account_two, 2 ,correctProof.proof.a, correctProof.proof.b, correctProof.proof.c, correctProof.inputs, {from:account_one});
        }
        catch(e) {
            console.log(e);
            canMint = false;
        }
            assert.equal(canMint,true,"cannot mint a token");
        })   
});
