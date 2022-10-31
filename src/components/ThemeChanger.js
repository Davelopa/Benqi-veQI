export default function ThemeChanger() {
    return(
        <>
        {/* <div>
            <p>kuu-icon</p>
            <input type="radio" name="" id="" />
            <p>aurinko-icon</p>
        </div> */}
        
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>

        {/* <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" id="default-toggle" class="sr-only peer"></input>
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
        </label> */}

        <div class="flex justify-center">
            <div class="form-check form-switch">
                <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                <label class="form-check-label inline-block text-gray-800" for="flexSwitchCheckDefault">Default switch checkbox input</label>
            </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>

        </div>
        
        
        {/* <div class="">
                <button class="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13.171" height="13.645" viewBox="0 0 13.171 13.645">
                        <g id="Group_6300" data-name="Group 6300" transform="translate(0)">
                            <g id="Group_6297" data-name="Group 6297" transform="translate(0 0)">
                                <path id="Path_6560" data-name="Path 6560" d="M61.856,856.545a6.823,6.823,0,0,1,0-13.645.613.613,0,0,1,.08.005h.191a.629.629,0,0,1,.428,1.089,4.532,4.532,0,0,0,4.786,7.521.628.628,0,0,1,.815.823,6.838,6.838,0,0,1-6.3,4.206ZM60.71,844.275a5.564,5.564,0,1,0,5.6,8.786,5.786,5.786,0,0,1-5.6-8.786Z" transform="translate(-55.031 -842.9)" fill="currentColor"></path>
                            </g>
                        </g>
                    </svg>
                </button>
                <div class="react-toggle">
                    <input class="react-toggle-screenreader-only" type="checkbox">
                    </input>
                </div>
                <button class="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.001" height="14" viewBox="0 0 14.001 14">
                        <g id="Group_6296" data-name="Group 6296" transform="translate(0 0)">
                            <g id="Group_6294" data-name="Group 6294" transform="translate(3.552 3.551)">
                                <path id="Path_6558" data-name="Path 6558" d="M42.3,853.744a3.448,3.448,0,1,1,3.448-3.448A3.452,3.452,0,0,1,42.3,853.744Zm0-5.682a2.234,2.234,0,1,0,2.234,2.234A2.236,2.236,0,0,0,42.3,848.062Z" transform="translate(-38.854 -846.847)" fill="currentColor"></path>
                            </g>
                            <g id="Group_6295" data-name="Group 6295" transform="translate(0 0)">
                                <path id="Path_6559" data-name="Path 6559" d="M41.468,856.462a.608.608,0,0,1-.607-.607v-.71a.607.607,0,1,1,1.215,0v.71A.608.608,0,0,1,41.468,856.462Zm4.546-1.846a.606.606,0,0,1-.43-.178l-.5-.5a.608.608,0,0,1,.859-.859l.5.5a.608.608,0,0,1-.43,1.037Zm-9.091,0a.608.608,0,0,1-.43-1.037l.5-.5a.607.607,0,0,1,.858.859l-.5.5A.605.605,0,0,1,36.923,854.615Zm10.939-4.547H47.15a.607.607,0,1,1,0-1.215h.711a.607.607,0,1,1,0,1.215Zm-12.076,0h-.71a.607.607,0,1,1,0-1.215h.71a.607.607,0,1,1,0,1.215Zm9.731-4.049a.607.607,0,0,1-.429-1.037l.5-.5a.607.607,0,1,1,.858.859l-.5.5A.608.608,0,0,1,45.517,846.02Zm-8.1,0a.6.6,0,0,1-.429-.177l-.5-.5a.607.607,0,1,1,.858-.859l.5.5a.607.607,0,0,1-.429,1.037Zm4.048-1.633a.608.608,0,0,1-.607-.607v-.71a.607.607,0,0,1,1.215,0v.71A.608.608,0,0,1,41.468,844.387Z" transform="translate(-34.468 -842.462)" fill="currentColor"></path>
                            </g>
                        </g>
                    </svg>
                </button></div> */}
                </>

    )
}