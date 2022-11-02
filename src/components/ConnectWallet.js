import qiGradient from "../assets/qi-gradient.png"

export default function ConnectWallet() {
    return (
        <div className="connect-wallet-container place-self-center p-8 rounded-xl px-12 mx-auto">
            <div className="connect-wallet">
                <img className="QI-logo mx-auto" src={qiGradient} alt="QI logo" />
                <div className="connect-wallet-content">
                    <p className="pb-6">Please connect your wallet to stake QI.</p>
                    <button className="connect-wallet-button py-2 px-4 border rounded-xl">Connect Wallet</button>
                </div>
            </div>
        </div>
    )
}