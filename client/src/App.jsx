import{ Navbar, Welcome, Footer, Services, Transactions } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
        <Services />
        <Transactions />
        <Footer />
    </div>
  );
}

export default App


//Dependencies

// npm i @tailwindcss/forms
// npm i autoprefixer
// npm i eth-revert-reason
// npm i ethers
// npm i framer-motion
// npm i postcss
// npm i react-dom
// npm i react-icons
// npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle @nomiclabs/hardhat-ethers chai
//npx hardhat
// to test smart contract run npx hardhat run scripts/deploy.js --network ropsten

//npm run dev to start server