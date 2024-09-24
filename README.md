# SUSTAINABLE PRODUCT NFTs - README

## Overview

This project is a decentralized application (DApp) that allows brands and users to register and add sustainable products to the Ethereum blockchain. The product details are stored as NFTs on IPFS, and each product is associated with a QR code that consumers can scan to verify its authenticity and sustainability claims. This ensures transparency, trust, and verifiability of product information.

## Key Features
- **Add Sustainable Products**: Users can register products on the blockchain, which are stored as Non-Fungible Tokens (NFTs).
- **QR Code Generation**: Each product is associated with a unique QR code that consumers can scan to view the product details on the blockchain.
- **Blockchain-based Storage**: Product data is stored in a decentralized manner using IPFS and Ethereum, ensuring tamper-proof and verifiable records.
- **MetaMask Integration**: Users can connect their MetaMask wallet for secure account management and interaction with the platform.

## Tech Stack
- **Smart Contracts (Solidity)**: Ethereum smart contracts handle product registration, verification, and NFT minting.
- **Hardhat**: Development environment for compiling, deploying, and testing smart contracts.
- **Frontend (React.js)**: A React-based user interface for product management and QR code interactions.
- **IPFS**: Used for decentralized storage of product data.


## Setup Instructions

### Prerequisites
- **Node.js**: Ensure you have Node.js installed.
- **MetaMask**: MetaMask wallet extension installed in your browser.
- **Hardhat**: Installed globally for smart contract development.

### Clone the Repository
```bash
git clone https://github.com/your-username/Sustainable-Products-NFTs_DApp.git
cd Sustainable-Products-NFTs_DApp
```
### Frontend Setup
1.Navigate to the UI folder:
```bash
cd ui
```
2.Install dependencies:
```bash
npm install
```
### Hardhat Setup (Smart Contracts)
1.Navigate to the hardhat folder:

```bash
cd hardhat
```
2.Install dependencies:

```bash
npm install
```
### Running the Project
1. Start the Hardhat Local Blockchain
The Hardhat environment provides a local Ethereum blockchain for development and testing.

```bash
cd hardhat
npx hardhat node
```
This command will start the local blockchain and display a list of accounts with their private keys. Keep this terminal window open as it runs the blockchain node.

2. Deploy Smart Contracts
In a new terminal window/tab, navigate to the hardhat directory and run the deployment script.

```bash
cd hardhat
npx hardhat run scripts/deploy.js --network localhost
```
This will deploy the smart contracts to the local Hardhat network. Note the contract address displayed after deployment.

3. Configure the Frontend
Ensure the frontend is aware of the deployed contract address. You may need to update environment variables or configuration files in the ui directory with the contract address and network details.

4. Start the UI
In another terminal window/tab, navigate to the ui directory and start the development server.

```bash
cd ui
npm run dev
```


