import "./Header.css"
import Logo from "./Logo"

export default function Header() {
    return (
        <header>
        <Logo />
        <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
        </ul>
        <div>
            <a href="/"><p>External Link</p></a>
            <button>Connect Wallet</button>
        </div>
    </header>
)}