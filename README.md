# SUSTAINABLE PRODUCT NFTs - README

## Overview

This project is a decentralized application (DApp) that allows brands and users to register and add sustainable products to the Ethereum blockchain. The product details are stored as NFTs on IPFS, and each product is associated with a QR code that consumers can scan to verify its authenticity and sustainability claims. This ensures transparency, trust, and verifiability of product information.

## Key Features
- **Add Sustainable Products**: Users can register products on the blockchain, which are stored as Non-Fungible Tokens (NFTs).
- **QR Code Generation**: Each product is associated with a unique QR code that consumers can scan to view the product details on the blockchain.
- **Blockchain-based Storage**: Product data is stored in a decentralized manner using IPFS and Ethereum, ensuring tamper-proof and verifiable records.
- **Token-Based Authentication**: Secure login system using tokens for authentication.
- **MetaMask Integration**: Users can connect their MetaMask wallet for secure account management and interaction with the platform.

## Tech Stack
- **Smart Contracts (Solidity)**: Ethereum smart contracts handle product registration, verification, and NFT minting.
- **Hardhat**: Development environment for compiling, deploying, and testing smart contracts.
- **Frontend (React.js)**: A React-based user interface for product management and QR code interactions.
- **Backend (Node.js & Express)**: A backend server to handle authentication and interact with the Ethereum blockchain.
- **IPFS**: Used for decentralized storage of product data.

## Project Structure

/hardhat - Smart contracts and blockchain-related scripts. /ui - React.js application for the client-side of the DApp. /backend - Node.js server for API and token-based authentication.

markdown
Copy code

## Setup Instructions

### Prerequisites
- **Node.js**: Ensure you have Node.js installed.
- **MetaMask**: MetaMask wallet extension installed in your browser.
- **Hardhat**: Installed globally for smart contract development.

### Clone the Repository
```bash
git clone https://github.com/your-username/sustainable-product-nfts.git
cd sustainable-product-nfts
Backend Setup
Navigate to the backend folder:
bash
Copy code
cd backend
Install dependencies:
bash
Copy code
npm install
Start the backend server:
bash
Copy code
npm start
Frontend Setup
Navigate to the UI folder:
bash
Copy code
cd ui
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm run dev
Hardhat Setup (Smart Contracts)
Navigate to the hardhat folder:

bash
Copy code
cd hardhat
Install dependencies:

bash
Copy code
npm install
Run a local Ethereum blockchain using Hardhat:

bash
Copy code
npx hardhat node
Compile and deploy the smart contracts:

bash
Copy code
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost
Connecting Frontend to Backend
Make sure both the frontend and backend are running on their respective ports, and the blockchain is running locally via Hardhat. The frontend will automatically interact with the backend and blockchain.

Usage
MetaMask Connection: Open the frontend in your browser, and you'll be prompted to connect your MetaMask wallet.
Signup/Login: Once connected, you can sign up using your MetaMask wallet, and token-based authentication will secure your session.
Add Products: Register sustainable products on the blockchain and mint an NFT representing each product.
QR Code Generation: A unique QR code is generated for each product, which links to the product's data stored on IPFS.
View Product Details: Consumers can scan the QR code to access product details and verify its authenticity on the blockchain.
Scripts
Backend: Start the server

bash
Copy code
cd backend && npm start
Frontend: Start the development server

bash
Copy code
cd ui && npm run dev
Hardhat: Run local Ethereum blockchain

bash
Copy code
cd hardhat && npx hardhat node
🎥 Demo Video
Check out our live demo! 🎬👇

(https://drive.google.com/file/d/your-demo-video-link/view?usp=sharing)

Contributing
Feel free to fork this repository and submit pull requests. Contributions and improvements are always welcome!

License
This project is licensed under the MIT License. See the LICENSE file for more details.
