# Udacity Blockchain Capstone

A decentralized housing product. 

Contract address of Verifier.sol: https://ropsten.etherscan.io/address/0xd2eb4347daa8e2eb14d176bb7fe90b25dfdd7836 

Contract address of Real Estate Listing: https://rinkeby.etherscan.io/token/0xf92df594e7d64da542af08db2541a3e35eb5c4aa#balances


# CAPSTONE PROJECT


## Preview

Marketplace: https://rinkeby.opensea.io/assets/real-estate-listing-v3

## Getting Started

These instructions will get you a copy of the Blockchain-Capstone.app and lets you run the client on the local machine and deploys your own contract to the test network rinkeby.

### Installing and Using the Blockchain-Capstone Contracts for Yourself on the RINKEBY TESTNETWORK

#### Server Setup

1. Clone this repository:

    ```bash
    $ git clone https://github.com/Userrick/Blockchain-Capstone
    ```

2. Got to Blockchain-Capstone/server/ and install all requisite npm packages (as listed in ```package.json```):

    ```bash
    $ npm install
    ```

2. Create a new file in **Blockchain-Capstone/server/** with the name **secrets.js**:

    ```bash
    $ touch secrets.js
    ```

3. Copy the following into it (attention to https://):

    ```javascript
    const secrets = {
        mnemonic: "YOUR-SEED-WORDS-FROM-METAMASK-ACCOUNT",
        ENDPOINT: "https://YOUR-INFURA-ENDPOINT_KEY",
        privateKey: "YOUR-PRIVATE-KEY-OF-METAMASK-ACCOUNT-USED-FOR-REGISTRATING-DEFAULT-ORACLES-AND-ALSO-RESPOND-TO-ORACLE-REQUEST"
    }

    module.exports = secrets;
    ```

4. Edit the **config.js** file in Blockchain-Capstone/server/ to your needs 

    Make sure to use the same address as for deploying your smart contract!


5. Now launch the server by the following command in a new terminal and wait until every token is mint.

    ```bash
    $ npm run dev
    ```

    Now you should be able to interact with your contract at [LOCALHOST](http://localhost:3000/) via METAMASK on the rinkeby test network.

    **If you encounter some issues let me know!**

    **Enjoy!**


## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier. 
* [truffle-hdwallet-provider](https://github.com/trufflesuite/truffle-hdwallet-provider) - HD Wallet-enabled Web3 provider. Use it to sign transactions for addresses derived from a 12-word mnemonic.
* [NODE + NPM](https://github.com/nodejs/node)

## Version Used

* Truffle v5.0.22 (core: 5.0.22)
* Solidity v0.5.8 (solc-js)
* Node v12.4.0
* Web3.js v1.0.0-beta.37

## Authors

Starter code was provided by [Udacity](https://github.com/udacity/Blockchain-Capstone)

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)

