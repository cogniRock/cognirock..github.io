import Link from 'next/link'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'fixed', top: 0, padding: '10px', width: '100%', zIndex: 1000 }}>
        <div className="container">
            <Link className="navbar-brand" href="/">
                <img src="/logo.png" alt="cogniRock solutions" id="logo" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" href="./services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="./contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" aria-disabled="true" href="./our-work">Our work</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Careers</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" href="./blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" href="./github">Github</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar;