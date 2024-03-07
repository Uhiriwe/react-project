import { Outlet, Link } from "react-router-dom";
import img1 from '../assets/images/buffer-logo.svg'
import img2 from '../assets/images/search.svg'

const Layout = () => {
   
    return (
        <>
            <nav className="container">
                <ul className="background">
                    <div className="logo">
                        <img src={img1} alt="" />
                        
                        <p><b>Buffer</b></p>
                    </div>
                    <div className="navbar">
                        <Link className="color" to="/">Tools</Link>
                    </div>
                    <div>
                        <Link className="color" to="channels/">Channels</Link>
                    </div>
                    <div>
                        <Link className="color" to="pricing/">Pricing</Link>
                    </div>
                    <div>
                        <Link className="color" to="blogs/">Blogs</Link>
                    </div>
                    <div className="nav">
                        <img src={img2} alt="" />
                        <Link className="color" to="login/">Login</Link>
                    </div>
                    <div className="start">
                        <Link className="colors" to="start/">Get started now</Link>
                    </div>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};
export default Layout;
