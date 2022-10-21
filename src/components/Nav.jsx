// import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import { useEffect, useState } from "react";
// import { FaHome } from "react-icons/fa";
// import { GiTechnoHeart, GiInfo, GiTank, GiBoltBomb } from "react-icons/gi";
import { GoMail, GoInfo, GoRocket } from "react-icons/go";




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
                    <LinkScroll activeClass="active" to="summary" spy={false} smooth={true} offset={5} duration={600} >
                        <li className="link__nav-link" >
                            <GoInfo className="link-icon" />
                        </li>
                    </LinkScroll>
                    <LinkScroll activeClass="active" to="projects" spy={false} smooth={true} offset={5} duration={800} >
                        <li className="link__nav-link" >
                            <GoRocket className="link-icon" />
                        </li>
                    </LinkScroll>
                    <LinkScroll activeClass="active" to="contact" spy={false} smooth={true} offset={5} duration={1000} >
                        <li className="link__nav-link" >
                            <GoMail className="link-icon" />
                        </li>
                    </LinkScroll>
                </nav>
            </div>
        </section>
    )
}

export default Nav
