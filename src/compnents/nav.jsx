import { useState } from 'react';

const Nav = () => {
    const [ menu, setMenu ] = useState(false)

    return(
        <nav>
            <div className="logo">
                <img src={require('../assets/logo.png')} alt=""/>
                <h6>mogames</h6>
            </div>
            {!menu && <span className='toggle'><img onClick={() => setMenu(true)} src={require('../assets/menu.png')} alt=""/></span>}
            {menu && <span className='toggle close'><img onClick={() => setMenu(false)} src={require('../assets/close.png')} alt=""/></span>}
            {menu && 
                <div className='menu'>
                    <ul>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Communities</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                    <button href="#">Log In</button>
                </div>
            }
            <ul>
                <li><a href="#">Games</a></li>
                <li><a href="#">Communities</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Support</a></li>
            </ul>
            <button href="#">Log In</button>
        </nav>
    )
}
export default Nav;