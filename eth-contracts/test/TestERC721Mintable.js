var ERC721Mintable = artifacts.require('RealEstateERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four = accounts[3];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721Mintable.new({from: account_one});

            await this.contract.mint(account_two,1,{from: account_one});
            await this.contract.mint(account_three,2,{from: account_one});
            // TODO: mint multiple tokens
        })

        it('should return total supply', async function () { 
            let total = await this.contract.totalSupply.call();
            assert.equal(total.toNumber(), 2, "The total supply should be 2");
        })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf.call(account_two, {from: account_one});
            assert.equal(balance.toNumber(), 1, "the balance of account number 1 should be one");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let _tokenURI = await this.contract.tokenURI.call(1, {from: account_one});
            assert(_tokenURI == "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "TokenURI is not matching");
        })

        it('should transfer token from one owner to another', async function () { 
            let tokenId = 1;
            await this.contract.approve(account_three, tokenId, {from: account_two});
            await this.contract.transferFrom(account_two, account_three, tokenId, {from: account_two});
            // check new owner
            currentOwner = await this.contract.ownerOf.call(tokenId);
            assert.equal(currentOwner, account_three, "Owner is not account 3");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721Mintable.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let failed = false;
            try {
                await this.contract.mint(account_four, 5, {from: account_two});
              } catch (e) {
                failed = true;
              }
    
              assert.equal(failed, true, "does not fail");
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.getOwner.call({ from: account_one });
            assert.equal(owner, account_one, "owner should be account 1");
        })

    });
})

