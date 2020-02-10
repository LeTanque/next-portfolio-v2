import Link from "next/link";


export default function AppNavbar({ user }) {
    const navbarStyle = {
        marginBottom: "25px",
        position: "relative"
    };

    return (
        <section className="section__nav" style={navbarStyle}>
            <nav>
                <div>
                    <Link href="/">
                        <a>Thoughts!</a>
                    </Link>
                </div>
                <div aria-controls="basic-navbar-nav" />
                <div id="basic-navbar-nav">
                    <div className="mr-auto">
                        {user && (
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
                        )}
                        {!user && (
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
