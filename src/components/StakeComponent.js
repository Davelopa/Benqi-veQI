import qiGradient from "../assets/qi-gradient.png";
import veQIGraph from "../assets/veqi-dark.svg";

export default function Stake() {
    return(
        <div>

        <h2 className="pt-12 text-2xl">Stake QI for veQI</h2>
        <div className="flex">
            <div>
                <img className="" src={veQIGraph} alt="QI graph" />
            </div>
            <div className="connect-wallet-container place-self-center p-8 rounded-xl px-12 mx-auto">
                <div className="connect-wallet">
                    <img className="QI-logo mx-auto" src={qiGradient} alt="QI logo" />
                        
                        <div className="stake-container mx-auto">

                            <div className="stake-info flex justify-between">
                                <p className="text-lg">Total Supply</p>
                                <p className="text-xl font-bold stake-text-highlight">880.2M <span className="text-sm font-normal">veQI</span></p>
                            </div>

                            <div className="stake-info flex justify-between">
                                <p className="text-lg">My Balance</p>
                                <p className="text-xl font-bold stake-text-highlight">30.00 <span className="text-sm font-normal">veQI</span></p>
                            </div>
                            <div className="py-4"><hr /></div>
                            <div className="stake-info flex justify-between">
                                <p className="text-lg">QI Staked</p>
                                <p className="text-xl font-bold stake-text-highlight">30.00 <span className="text-sm font-normal">QI</span></p>
                            </div>

                            <div className="stake-input-container pt-6">
                                <button className="stake-btn text-xl px-6 py-1 border rounded-xl mx-3">Stake</button>
                                <button className="stake-btn text-xl px-6 py-1 border rounded-xl mx-3">Unstake</button>
                            </div>

                        </div>
                        

                </div>
                
            </div>
        </div>
        <h1 className="text-xl px-28 py-6">Delegate staked AVAX from BENQI Liquid Staking to your Avalanche validator of choice with veQI.</h1>
            <p className="text-sm px-12 py-6">veQI represents your voting power for AVAX delegations on BENQI Liquid Staking. It starts accruing value the moment it is staked and resets once unstaked. veQI is not transferable nor tradeable. <a href="/" className="underline">Read more.</a></p>
        
        </div>
    )
}