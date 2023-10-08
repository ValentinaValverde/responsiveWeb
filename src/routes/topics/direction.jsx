import { Link } from "react-router-dom"

export default function FlexDirection() {
    return(
        <>
        <div className="directionMain">
            <h2>Flex Direction</h2>
            <p>The flex-direction property defines in which direction the container wants to stack the flex items.</p>
        </div>


            <h3>ROW</h3>
            <div className="rowContainer">
                <div className="rowP">
                    <h3>row</h3>
                    <p>stacks the flex items horizontally (from left to right)</p>
                </div>

                <div className="rowP">
                    <h3>row-reverse</h3>
                    <p>stacks the flex items horizontally (but from right to left)</p>
                </div>
            </div>

            <h3>COLUMN</h3>
            <div className="columnContainer">
                <div className="columnP">
                    <h3>column</h3>
                    <p>stacks the flex items vertically (from top to bottom)</p>
                </div>

                <div className="columnP">
                    <h3>column-reverse</h3>
                    <p>stacks the flex items vertically (but from bottom to top)</p>
                </div>
            </div>
            <div className="nextTopic1">
                <Link className="next" to={"/flexWrap"}>next topic</Link>
            </div>

        </>
    )
}