import MenuSelector from './MenuSelector';
import veQIGraph from "../assets/veqi-dark.svg"
import ConnectWallet from './ConnectWallet';

export default function Main() {
    return (
    <div className="Main flex flex-col mt-12 justify-center">
    
        <MenuSelector />

        <div className="main-content mt-12 mx-24 flex-wrap rounded-2xl">
            <h2 className="pt-12 text-2xl">Stake QI for veQI</h2>
            <div className="flex px-12 pt-6">
                <div>
                    <img className="" src={veQIGraph} alt="QI graph" />
                </div>
                <ConnectWallet />
            </div>
            <h1 className="text-xl px-28 py-6">Delegate staked AVAX from BENQI Liquid Staking to your Avalanche validator of choice with veQI.</h1>
            <p className="text-sm px-12 py-6">veQI represents your voting power for AVAX delegations on BENQI Liquid Staking. It starts accruing value the moment it is staked and resets once unstaked. veQI is not transferable nor tradeable. <a href="/" className="underline">Read more.</a></p>
        </div>
    </div> 
)};