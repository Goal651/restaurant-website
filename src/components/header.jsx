import { Link, useNavigate } from "react-router-dom"


function Header() {
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="logo">
                <img src="Logo-Pizza-Hut 2.png" alt="Logo" />
                <img src="pizza hut.png" alt="" />
            </div>
            <Link to={'/home'}>Home</Link>
            <Link to={'/about-us'}>About Us</Link>
            <Link to={'/shop'}>Shop</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/pages'}>Pages</Link>
            <Link to={'/contact'}>Contact</Link>
            <button onClick={() => { navigate('/contact') }}>Contact Us</button>
        </div>
    )
}

export default Header