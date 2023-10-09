import { Link } from "react-router-dom"

export default function FlexFlow() {
    return (
        <>
            <div className="directionMain">
                <h2>Flex Flow</h2>
                <p>It is a shorthand property for setting both the flex-direction and flex-wrap properties.</p>
            </div>


            <p className="example">example:</p>
            <div className="tryingHard">
                <div className="flexFlowDemo">
                    <p>display: flex</p>
                    <p>flex-flow: column wrap;</p>
                </div>
            </div>

            <div className="nextTopic1">
                <Link className="next" to={"/flexWrap"}><i class="arrow left"></i>flex-wrap</Link>
                <Link className="next" to={"/justifyContent"}>justify-content<i class="arrow right"></i></Link>
            </div>
        </>
    )
}