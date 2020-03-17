// import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import { useEffect, useState } from "react";
// import { FaHome } from "react-icons/fa";
// import { GiTechnoHeart, GiInfo, GiTank, GiBoltBomb } from "react-icons/gi";
import { GoChevronDown, GoInfo, GoRocket } from "react-icons/go";




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
                <nav>
                    <LinkScroll activeClass="active" to="whois" spy={false} smooth={true} offset={5} duration={600} >
                        <li className="link__nav-link" >
                            <GoInfo className="link-icon" />
                        </li>
                    </LinkScroll>
                    <LinkScroll activeClass="active" to="projects" spy={false} smooth={true} offset={5} duration={600} >
                        <li className="link__nav-link" >
                            <GoRocket className="link-icon" />
                        </li>
                    </LinkScroll>
                </nav>
            </div>
            {/* <div className="block__navbar-nav" >
                {userState && userState.user ? (
                    <nav>
                        <Link activeClass="active" to="whois" spy={false} smooth={true} offset={50} duration={900} >
                            <GiTank />
                            WhOis
                        </Link>
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
            </div> */}

        </section>
    )
}

export default Nav
