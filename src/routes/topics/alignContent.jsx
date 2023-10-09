import { Link } from "react-router-dom"

export default function AlignContent() {
    return (
        <>
            <div className="directionMain">
                <h2>Align Content</h2>
                <p>Is used to align the flex lines</p>
                <p>I think of it as a "justify-content" but for align-items.</p>
            </div>


            <div className="alignContentContainer">
                <h3>SPACE-BETWEEN</h3>
                <p className="sub">displays the flex lines with equal space between them</p>
                <div className="spaceBetween">
                    <p className="pElement edit">element 1</p>
                    <p className="pElement edit">element 2</p>
                </div>

                <h3>SPACE-AROUND</h3>
                <p className="sub">displays the flex lines with space before, between, and after them:</p>
                <div className="spaceAround">
                    <p className="pElement edit">element 1</p>
                    <p className="pElement edit">element 2</p>
                </div>

                <h3>STRETCH</h3>
                <p className="sub">stretches the flex lines to take up the remaining space (this is default)</p>
                <div className="stretch">
                    <p className="pElement">element 1</p>
                </div>

                <h3>CENTER</h3>
                <p className="sub">displays the flex lines in the middle of the container</p>
                <div className="center">
                    <p className="pElement">element 1</p>
                </div>

                <h3>FLEX-START</h3>
                <p className="sub">displays the flex lines at the start of the container</p>
                <div className="flexStart">
                    <p className="pElement">element 1</p>
                </div>

                <h3>FLEX-END</h3>
                <p className="sub">displays the flex lines at the end of the container</p>
                <div className="flexEnd">
                    <p className="pElement">element 1</p>
                </div>
            </div>


            <div className="nextTopic1">
                <Link className="next" to={"/alignItems"}><i class="arrow left"></i>align-items</Link>
            </div>
        </>
    )
}