import { useLoaderData, Link, Outlet } from "react-router-dom"

export default function Nav() {



    return (

        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@500&family=Silkscreen&family=Source+Code+Pro&display=swap');
            </style>

            <p>this is a p tag </p>

            <Outlet />
        </>
    )
}