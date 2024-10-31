
import Link from "next/link"

export default function Navbar(data:{className:string , font:unknown}){
    return(
        <>
        <div className={`${data.className} route-parent`}>
            <ul className="routes">
                <li className="route"><Link href="">Work</Link> </li>
                <li className="route"><Link href="">Contact</Link></li>
                <li className="route"><Link href="">Blog</Link></li>
            </ul>
        </div>
        </>
    )
}