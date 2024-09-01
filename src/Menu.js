import { Link } from 'react-router-dom';


const Menu = () => {
    return(
        <nav className='Header'>
            <ul className="Header-nav">
                <Link className="Header-item" to={'/'}>Home</Link>
                <Link className="Header-item" to={''}>Gifts</Link>
                <Link className="Header-item" to={'/about'}>About</Link>
                <img className='Header-img' src={process.env.PUBLIC_URL + 'img/logo.png'} />
                <Link className="Header-item" to={''}>Login</Link>
                <Link className="Header-item" to={''}>Members</Link>
                <Link className="Header-item" to={''}>Contracts</Link>
            </ul>
        </nav>
    );
};

export default Menu;