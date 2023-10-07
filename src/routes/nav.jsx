import { Outlet, Link } from "react-router-dom"


export default function Nav() {
    return (

        <>
        {/* for the fonts: */}
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@500&family=Silkscreen&family=Source+Code+Pro&display=swap');
            </style>

            {/* for the egg icon: */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            <nav className="navBar">
                <p>vals_web</p>
                <div className="eggs">
                    <Link to="/" className="material-symbols-outlined eggAlt">
                        egg_alt
                    </Link>
                    {/* <span className="material-symbols-outlined egg">
                        egg
                    </span> */}
                </div>
            </nav>

            <Outlet />
        </>
    )
}