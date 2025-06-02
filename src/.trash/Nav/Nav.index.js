import './Nav.style.css';
const Nav = () => {
    return (
        <div className="Navbar">
            <div className='Navbar-content'>
                <span className='Navbar-inner'>
                    <span className='logo'>MagmaMinds</span>
                    <div className='links'>
                        <a>How we work</a>
                        <a>Contact</a>
                        <a>Refunds</a>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Nav;