import MenuSelector from './MenuSelector';
// import ConnectWallet from './ConnectWallet';
import StakeComponent from './StakeComponent';
// import VoteComponent from './VoteComponent';

export default function Main() {
    return (
    <div className="Main flex flex-col mt-12 justify-center">
    
        <MenuSelector />

        <div className="main-content mt-12 mx-24 flex-wrap rounded-2xl">
            <div className="flex px-12 pt-6">
                
                {/* <ConnectWallet /> */}
                <StakeComponent />
                {/* <VoteComponent /> */}
            </div>
            </div>
    </div> 
)};