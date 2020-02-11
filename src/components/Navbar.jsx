import Link from "next/link";
import { FaHome } from "react-icons/fa";

const AppNavbar = props => {
    const { userState } = props;

    const navbarStyle = {
        marginBottom: "25px",
        position: "relative"
    };

    if (!userState) return null;

    return (
        <section className="section__nav" style={navbarStyle}>
            <nav>
                <div className="block__navbar-header">
                    <Link href="/">
                        <FaHome className="link--icon__navbar"/>
                    </Link>
                </div>
                <div aria-controls="basic-navbar-nav" />
                <div id="basic-navbar-nav" style={{ width: "100%" }}>
                    <div className="block__navbar-items">
                        {userState && userState.user ? (
                            <>
                                <Link href="/share-thought">
                                    <a className="nav-link">New Thought</a>
                                </Link>
                                <Link href="/profile">
                                    <a className="nav-link">Profile</a>
                                </Link>
                                <Link href="/logout">
                                    <a className="nav-link">Log Out</a>
                                </Link>
                            </>
                        ) : (
                            <Link href="/login">
                                <a className="nav-link">Log In</a>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default AppNavbar;
