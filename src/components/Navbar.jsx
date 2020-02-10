import Link from "next/link";


export default function AppNavbar() {
    const navbarStyle = { 
        marginBottom: "25px",
        position: "relative",
    };

    return (
        <section className="section__nav" style={navbarStyle} >
            <nav>
                <div>
                    <Link href="/">
                        <a>Thoughts!</a>
                    </Link>
                </div>
                <div aria-controls="basic-navbar-nav" />
                <div id="basic-navbar-nav">
                    <div className="mr-auto">
                        <Link href="/share-thought">
                            <a className="nav-link">New Thought</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </section>
    );
}
