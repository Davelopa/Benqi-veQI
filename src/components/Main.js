import veQIGraph from "../assets/veqi-dark.svg"
import qiGradient from "../assets/qi-gradient.png"

export default function Main() {
    return (
    <div>
        <h2>Stake QI for veQI</h2>
        <img src={veQIGraph} />
        <div>
            <img src={qiGradient} alt="" />
            <p>Please connect your wallet to stake QI</p>
            <button>Connect Wallet</button>
        </div>
        <h1>Delegate staked AVAX from BENQI Liquid Staking to your Avalanche validator of choice with veQI.</h1>
        <p>veQI represents your voting power for AVAX delegations on BENQI Liquid Staking. It starts accruing value the moment it is staked and resets once unstaked. veQI is not transferable nor tradeable. Read more.</p>
    </div> 
)};