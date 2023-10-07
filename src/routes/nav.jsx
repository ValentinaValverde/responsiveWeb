import { Outlet } from "react-router-dom"


export default function Nav() {
    return (

        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@500&family=Silkscreen&family=Source+Code+Pro&display=swap');
            </style>
            {/* for the egg icon: */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


            <div className="navBar">
                <p>vals_web</p>
                <span className="material-symbols-outlined">
                    egg_alt
                </span>
            </div>

            <Outlet />
        </>
    )
}