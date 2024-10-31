import Link from "next/link"

export default function Navbar(data:any){
    return(
        <>
        <div className={`${data.font.className} route-parent`}>
            <ul className="routes">
                <li className="route"><Link href="">Work</Link> </li>
                <li className="route"><Link href="">Contact</Link></li>
                <li className="route"><Link href="">Blog</Link></li>
            </ul>
        </div>
        </>
    )
}