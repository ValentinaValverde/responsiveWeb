import { Link } from "react-router-dom"

export default function AlignItems() {
    return (
        <>
            <div className="directionMain">
                <h2>Align Items</h2>
                <p>is used to align the flex items</p>
            </div>

            <div className="alignItemsContainer">
                <h3>CENTER</h3>
                <div className="center">
                    <p className="pTag">aligns the flex items in the middle of the container</p>
                </div>

                <h3>FLEX-START</h3>
                <div className="flexStart">
                    <p className="pTag">aligns the flex items at the top of the container</p>
                </div>

                <h3>FLEX-END</h3>
                <div className="flexEnd">
                    <p className="pTag">aligns the flex items at the bottom of the container</p>
                </div>

                <h3>STRETCH</h3>
                <div className="stretch">
                    <p className="pTag">stretches the flex items to fill the container (this is default)</p>
                </div>

                <h3>BASELINE</h3>
                <div className="baseline">
                    <p className="pTag">aligns the flex items such as their baselines aligns</p>
                    <p className="pTag">aligns the flex items such as their baselines aligns</p>
                </div>
            </div>

            <div className="nextTopic1">
                <Link className="next" to={"/justifyContent"}><i class="arrow left"></i>justify-content</Link>
                <Link className="next" to={"/alignContent"}>align-content<i class="arrow right"></i></Link>
            </div>
        </>
    )
}