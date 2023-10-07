import { Link } from "react-router-dom"


export default function Home() {

    return (
        <>
            <div className="beg">
                <div className="title">
                    <h1 className="responsive">Responsive</h1>
                    <h1>Web Design</h1>
                </div>
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
                <p className="flexboxDef">CSS Flexible Box Layout, commonly known as Flexbox, is a CSS web layout model. It is in the W3C's candidate recommendation stage. The flex layout allows responsive elements within a container to be automatically arranged depending on viewport size.</p>
            </div>

            {/* example of what you can do with flexbox */}

            <h2 className="example">example:</h2>
            <div className="container">
                <div className="elOne element">
                    <p>element 1</p>
                </div>
                <div className="elTwo element">
                    <p>element 2</p>
                </div>

            </div>

            <div className="hint">
                <p>here's a hint:</p>
                <h2>USE DEV TOOLS</h2>
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

            <div className="cheatSheet">
                <h2>Cheat Sheet</h2>
                <img src="https://i.redd.it/rofzm44oka091.png" alt="cheatsheet"/>
            </div>

            <footer>
                <p>designed by vv</p>
            </footer>
        </>
    )
}