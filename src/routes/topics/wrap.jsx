import { Link } from "react-router-dom"

export default function FlexWrap() {
    return (
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
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg> */}
            </div>

        </>
    )
}