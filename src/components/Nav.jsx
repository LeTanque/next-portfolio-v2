import Link from 'next/link';
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { GiTechnoHeart, GiTank, GiBoltBomb } from "react-icons/gi";




const Nav = props => {
    const { userState, router } = props;
    
    const [ currentNavLocation, setCurrentNavLocation ] = useState("");
    
    useEffect(() => {
        if (props && router === "/") {
            setCurrentNavLocation("index")
        }
        if (props && router) {
            setCurrentNavLocation(router)
        }
    }, [router])
    
    if (!userState) return null;

    return (
        <section className={`section__nav route-${currentNavLocation}`} >
            
            <div className="block__navbar-nav" >
                {userState && userState.user ? (
                    <nav>
                        <Link href="/">
                            <li className="link__nav-link" >
                                <FaHome className="link-icon" />
                                <a >Home</a>
                            </li>
                        </Link>
                        <Link href="/thoughts">
                            <li className="link__nav-link" >
                                <GiTechnoHeart className="link-icon" />
                                <a >Thoughts</a>
                            </li>
                        </Link>
                        <Link href="/share-thought">
                            <li className="link__nav-link" >
                                <GiTechnoHeart className="link-icon" />
                                <a >New Thought</a>
                            </li>
                        </Link>
                        <Link href="/profile">
                            <li className="link__nav-link" >
                                <GiTank className="link-icon" />
                                <a >Profile</a>
                            </li>
                        </Link>
                        <Link href="/logout">
                            <li className="link__nav-link" >
                                <GiBoltBomb className="link-icon" />
                                <a >Log Out</a>
                            </li>
                        </Link>
                    </nav>
                ) : (
                    <nav>
                        <Link href="/">
                            <li className="link__nav-link" >
                                <FaHome className="link-icon" />
                                <a >Home</a>
                            </li>
                        </Link>
                        <Link href="/profile">
                            <li className="link__nav-link" >
                                <GiTank className="link-icon" />
                                <a >Profile</a>
                            </li>
                        </Link>
                        <Link href="/login">
                            <li className="link__nav-link" >
                                <GiTechnoHeart className="link-icon" />
                                <a >Log In</a>
                            </li>
                        </Link>
                    </nav>
                )}
            </div>

        </section>
    )
}

export default Nav
