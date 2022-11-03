import {ethers} from "ethers";
import { useEffect, useState } from "react";

export default function ConnectWallet() {

    const [walletAddress, setWalletAddress] = useState("");

    useEffect(() => {
        getCurrentConnectedWallet();
        addWalletListener();
    });

    const requestAccount = async () => {
        console.log('Requesting...');
        
        if(window.ethereum) {
            console.log('MetaMask Detected...');
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);
                console.log(accounts);
            } catch (err) {
                console.log('Error connecting...' + err);
            }
        } else {
            console.log('MetaMask NOT Detected...');
        }
    }

    const getCurrentConnectedWallet = async () => {
        if(window.ethereum) {
            console.log('MetaMask Detected...');
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });
                if(accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    console.log(accounts);
                } else {
                    console.log('Connect to MetaMask using the "Connect Wallet" button');
                }
            } catch (err) {
                console.log('Error connecting...' + err);
            }
        } else {
            console.log('MetaMask NOT Detected...');
        }
    }

    const addWalletListener = async () => {
        if(window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                setWalletAddress(accounts[0]);
                console.log(accounts[0]);
            });
        } else {
            setWalletAddress('');
        }
    }

    const connectWallet = async () => {
        if(window.ethereum !== undefined) {
            await requestAccount();

            const provider = new ethers.providers.Web3Provider(window.ethereum);
        }
    }

    return (
        <button onClick={connectWallet} className="connect-wallet-button py-2 px-4 border rounded-xl">
            <span>
                {walletAddress && walletAddress.length > 0 ? `${walletAddress.substring(0,5)}...${walletAddress.substring(38)} ` : "Connect Wallet"}
            </span>
        </button>
    )
}