import { Link } from "react-router-dom"

export default function JustifyContent() {
    return (
        <>
            <div className="directionMain">
                <h2>Justify Content</h2>
                <p>Is used to align the flex items</p>
                <p>note: when flex-direction: row, this dictates the position of the items horizontally</p>
            </div>

            <div className="pContainer">
                <h3>CENTER</h3>
                <div className="center">
                    <p className="pElement">aligns the flex items at the center of the container</p>
                </div>

                <h3>FLEX-START</h3>
                <div className="flexStart">
                    <p className="pElement">aligns the flex items at the beginning of the container (this is default)</p>
                </div>

                <h3>FLEX-END</h3>
                <div className="flexEnd">
                    <p className="pElement">aligns the flex items at the end of the container</p>
                </div>

                <h3>SPACE-AROUND</h3>
                <p className="description">displays the flex items with space before, between, and after the lines</p>
                <div className="spaceAround">
                    <p className="pElement">element 1</p>
                    <p className="pElement">element 2</p>
                </div>

                <h3>SPACE-BETWEEN</h3>
                <p className="description">displays the flex items with space between the lines</p>
                <div className="spaceBetween">
                    <p className="pElement">element 1</p>
                    <p className="pElement">element 2</p>
                </div>
            </div>


            <div className="nextTopic1">
                <Link className="next" to={"/alignItems"}>next topic</Link>
            </div>
        </>
    )
}