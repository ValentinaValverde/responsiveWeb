import { Link } from "react-router-dom"


export default function Home() {

    return (
        <>
            <div className="beg">
                <h1>Responsive
                    <br />
                    Web Design</h1>
                <p className="byVal">by: val</p>
            </div>


            <div className="whatIs">
                <div className="whatBig">
                    <h2>what is responsive web design?</h2>
                </div>
                <div className="whatSmall">
                    <p>It is a design approach that addresses the range of devices and device sizes, enabling automatic adaption to the screen, whether the content is viewed on a tablet, phone, television, or watch.</p>
                </div>
            </div>


            <div className="introFlex">
                <p>well, let me introduce you to this wonderful thing called:</p>
                <p className="betweenSpark">flexbox</p>
            </div>

            {/* example of what you can do with flexbox */}

            <h2 className="example">example:</h2>
            <div className="container">
                <div className="elOne">
                    <p>element 1</p>
                </div>
                <div className="elTwo">
                    <p>element 2</p>
                </div>

            </div>

            <div className="topics">
                <h2>Topics</h2>
                <Link className="topicItem" to="/">flex-direction</Link>
                <Link className="topicItem" to="/">flex-wrap</Link>
                <Link className="topicItem" to="/">flex-flow</Link>
                <Link className="topicItem" to="/">justify-content</Link>
                <Link className="topicItem" to="/">align-items</Link>
                <Link className="topicItem" to="/">align-content</Link>

            </div>




        </>
    )
}