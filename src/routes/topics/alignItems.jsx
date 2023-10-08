import { Link } from "react-router-dom"

export default function AlignItems() {
    return(
        <>
            <h2>Align Items</h2>



            <div className="nextTopic1">
                <Link className="next" to={"/alignContent"}>next topic</Link>
            </div>
        </>
    )
}