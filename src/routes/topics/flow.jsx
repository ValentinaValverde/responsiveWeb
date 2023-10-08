import { Link } from "react-router-dom"

export default function FlexFlow() {
    return (
        <>
            <div className="directionMain">
                <h2>Flex Flow</h2>
                <p>It is a shorthand property for setting both the flex-direction and flex-wrap properties.</p>
            </div>


            <p>example:</p>
            <div className="flexFlowDemo">
                <p>display: flex</p>
                <p>flex-flow: row wrap;</p>
            </div>

            <div className="nextTopic1">
                <Link className="next" to={"/justifyContent"}>next topic</Link>
            </div>
        </>
    )
}