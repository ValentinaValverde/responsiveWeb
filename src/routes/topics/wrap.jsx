
export default function FlexWrap() {
    return(
        <>
        <div className="directionMain">
            <h2>Flex Wrap</h2>
            <p>The flex-wrap property specifies whether the flex items should wrap or not.</p>
        </div>        
        
        <div className="containerWrap">
            <div className="wrapP">
                <p>container 1</p>
            </div>
            <div className="warpP">
                <p>container 2</p>
            </div>
        </div>

        <div className="containerNoWrap">
        <div className="noWrapP">
                <p>container 1</p>
            </div>
            <div className="noWarpP">
                <p>container 2</p>
            </div>
        </div>
        
        </>
    )
}