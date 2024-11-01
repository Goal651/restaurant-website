import { Link, useNavigate } from "react-router-dom"


function Header() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-evenly bg-white py-5  ">
            <div className="flex">
                <img src="Logo-Pizza-Hut 2.png" alt="Logo" />
                <img className="w-auto h-5 justify-self-center" src="pizza hut.png" alt="" />
            </div>
            <div className="flex justify-between gap-5">
                <Link className="link link-hover text-black font-mono " to={'/'}>Home</Link>
                <Link className="link link-hover text-black font-mono " to={'/about-us'}>About Us</Link>
                <Link className="link link-hover text-black font-mono " to={'/shop'}>Shop</Link>
                <Link className="link link-hover text-black font-mono " to={'/blog'}>Blog</Link>
                <Link className="link link-hover text-black font-mono " to={'/pages'}>Pages</Link>
                <Link className="link link-hover text-black font-mono " to={'/contact'}>Contact</Link>
            </div>
            <div>
                <button
                    className="btn  bg-yellow-400 hover:bg-yellow-500 text-white font-mono" 
                    onClick={() => { navigate('/contact') }}
                >
                    Contact Us
                </button>
            </div>
        </div>
    )
}

export default Header