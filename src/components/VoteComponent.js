import qiGradient from "../assets/qi-gradient.png"

export default function Vote() {
    return(
        <div className="pb-12">

        <div className="connect-wallet-container place-self-center pt-8 rounded-xl px-12 mx-auto mt-12">
            <div className="connect-wallet-vote">
                <img className="QI-logo-vote mx-auto" src={qiGradient} alt="QI logo" />
                    
                    <div className="vote-container mx-auto">

                        <div className="vote-info flex justify-between">
                            <p className="text-lg">Total Supply</p>
                            <p className="text-xl font-bold vote-text-highlight">880.2M <span className="text-sm font-normal">veQI</span></p>
                        </div>

                        <div className="vote-info flex justify-between">
                            <p className="text-lg">My Balance</p>
                            <p className="text-xl font-bold vote-text-highlight">30.00 <span className="text-sm font-normal">veQI</span></p>
                        </div>

                        <div className="py-4"><hr /></div>
                        
                        <div className="vote-info flex justify-between">
                            <p className="text-lg">Outstanding Vote Power</p>
                            <p className="text-xl font-bold vote-text-highlight">100.00 <span>%</span></p>
                        </div>
                        <div className="vote-power p-4 mt-6 rounded-xl text-left">
                            <p className="vote-text-highlight mb-2">You have not voted for any Avalanche Validator</p>
                            <p>Please select a validator from the Avalanche Validator list below or enter your NodeID of choice to get started.</p>
                        </div>

                    </div>
                    

            </div>
                    
        </div>

        <h1 className="text-2xl pt-16">Vote for your Avalanche Validator of choice using veQI</h1>

        <div className="connect-wallet-container place-self-center p-8 rounded-xl px-12 mx-auto mt-12">
            <p className="text-lg text-left">Select from the list below or enter Node ID</p>
            <input className="node-search w-full px-4 py-2 mt-6 border rounded-xl bg-transparent" type="text" placeholder="Search for Node ID" value=""></input>
            
            <div className="">
                
                <table className="table-auto w-full mt-6">
                    
                    <thead className="vote-head">
                        <tr>
                            <th className="text-left pl-6">Node ID</th>
                            <th>veQI Weight</th>
                            <th className="text-right pr-6">Delegated AVAX</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-left pl-6">NodeID-xxxxxxxxxxxxxxxxx</td>
                            <td>38.8 <span>%</span></td>
                            <td className="text-right pr-6">340 000</td>
                        </tr>
                    </tbody>

                </table>
                <button className="vote-btn text-lg px-16 py-2 mt-6 border rounded-xl mx-3">Vote</button>

            </div>
        </div>

        </div>
    )
}
