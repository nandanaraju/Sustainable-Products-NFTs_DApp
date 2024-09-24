
SUSTAINABLE PRODUCT NFTs
This project demonstrates a decentralized platform that allows users to add product-related data to the blockchain. The product data is stored and accessed via QR codes, and consumers can scan these QR codes to retrieve information stored securely on the blockchain using IPFS NFTs. This DApp ensures transparency, immutability, and security for all product information.

Key Features
Add Product to Blockchain: Users can upload product data, and it is permanently stored on the blockchain and associated with a unique NFT.
QR Code Generation: Each product's data is linked with a QR code for easy access by consumers.
Scan and View Product Data: Consumers can scan the QR code to view the product details stored on the blockchain.
Blockchain-based Storage: Product data is stored on IPFS (InterPlanetary File System) and verified via the Ethereum blockchain.
MetaMask Integration: Users authenticate and interact with the DApp through their MetaMask wallet, ensuring secure access.
Token-Based Authentication: Secure login and product interactions are authenticated using tokens.
Tech Stack
Smart Contracts (Solidity): The smart contracts are responsible for adding products, managing product data, and storing the associated NFTs on the blockchain.
Hardhat: A development environment to compile, deploy, and test Ethereum smart contracts.
IPFS: Decentralized storage system used for product data storage.
Frontend (React.js): User-friendly interface built with React.js that interacts with smart contracts and IPFS.
Backend (Node.js & Express): Backend server to handle API requests and interactions with smart contracts.
MetaMask: Wallet integration to sign transactions and authenticate users.
Project Structure
bash
Copy code
sustainable-product-nfts/
├── hardhat/     # Contains the smart contracts and blockchain-related scripts
│   ├── contracts/
│   ├── scripts/
│   └── test/
├── ui/          # React.js application for the client-side of the DApp
│   ├── public/
│   ├── src/
│   └── components/
Setup Instructions
Prerequisites
Node.js: Ensure you have Node.js installed on your machine.
MetaMask: MetaMask wallet extension installed in your browser.
Hardhat: Install Hardhat globally to compile and deploy smart contracts.
IPFS: You will need IPFS installed for decentralized storage.
Clone the Repository
bash
Copy code
git clone https://github.com/your-username/sustainable-product-nfts.git
cd sustainable-product-nfts
Backend Setup (Hardhat)
Navigate to the hardhat folder:

bash
Copy code
cd hardhat
Install the dependencies:

bash
Copy code
npm install
Start a local Ethereum blockchain using Hardhat:

bash
Copy code
npx hardhat node
Compile and deploy the smart contracts:

bash
Copy code
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost
Frontend Setup (React.js)
Navigate to the ui folder:

bash
Copy code
cd ../ui
Install dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm run dev
The frontend will run on http://localhost:3000.

Connecting the Frontend to Backend
Ensure the local blockchain (Hardhat) is running, and then start both the frontend and backend. The frontend will automatically interact with the blockchain via MetaMask.

Usage
MetaMask Wallet Connection: When you open the frontend in your browser, connect your MetaMask wallet.
Add Product: Use the form to upload product information, mint the NFT, and store data on IPFS.
Scan QR Code: Consumers can scan the QR code to access product data from the blockchain.
Scripts
Backend (Hardhat): Run a local Ethereum blockchain

bash
Copy code
cd hardhat && npx hardhat node
Frontend: Start the frontend development server

bash
Copy code
cd ui && npm run dev
Deploy Smart Contracts: Deploy the smart contracts to the blockchain

bash
Copy code
cd hardhat && npx hardhat run scripts/deploy.js --network localhost
🎥 Demo Video
Check out our live demo! 🎬👇

Watch Demo

Contributing
Feel free to fork this repository and submit pull requests. Contributions and improvements are always welcome!

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Enjoy building sustainable products on the blockchain with this decentralized platform!

