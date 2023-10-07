import { Link } from "react-router-dom"

export default function Error() {

    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@500&family=Silkscreen&family=Source+Code+Pro&display=swap');
            </style>


            <div className="errorPage">
                <h1> whomp whomp </h1>
                <p>there's been an error</p>
                <Link to="/" className="errorLink">go home</Link>
            </div>
        </>
    )
}