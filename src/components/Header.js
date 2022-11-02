import Logo from "./Logo"

export default function Header() {
    return (
        <header className="py-7">
        <div className="grid grid-flow-col grid-cols-3">
            <Logo />
            <ul className="header-menu flex place-self-center">
                <li>Stake</li>
                <li>DeFi</li>
                <li>veQI</li>
                <li>Analytics</li>
            </ul>
            <div className="flex place-self-center">
                <a href="/" className="my-auto mr-2 px-4"><p>Lend & Borrow</p></a>
                <button className="header-connect-btn rounded-3xl py-2 px-4 border-2">Connect Wallet</button>
            </div>
        </div>
    </header>
)}