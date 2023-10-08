import { Link } from "react-router-dom"

export default function FlexWrap() {
    return(
        <>
        <div className="directionMain">
            <h2>Flex Wrap</h2>
            <p>The flex-wrap property specifies whether the flex items should wrap or not.</p>
        </div>        
        
        <h3>WRAP</h3>
        <div className="containerWrap">
            <div className="wrapP">
                <p>container 1</p>
            </div>
            <div className="wrapP">
                <p>container 2</p>
            </div>
        </div>

        <h3>NO WRAP</h3>
        <div className="containerNoWrap">
        <div className="noWrapP">
                <p>container 1</p>
            </div>
            <div className="noWrapP">
                <p>container 2</p>
            </div>
        </div>

        <div className="nextTopic1">
            <Link className="next" to={"/flexFlow"}>next topic</Link>
        </div>
        
        </>
    )
}