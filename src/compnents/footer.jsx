const Footer = () => {
    return(
        <footer>
            <section className="section-1">
                <div className='join-community'>
                    <h4>MOGames Community</h4>
                    <button>Join Now</button>
                </div>
                <div className='connect-with-us'>
                    <h5>Connect with us:</h5>
                    <div className="social-icons">
                        <span><img src={require('../assets/linkedin.png')} alt=""/></span>
                        <span><img src={require('../assets/twitter.png')} alt=""/></span>
                        <span><img src={require('../assets/facebook.png')} alt=""/></span>
                    </div>
                </div>
            </section>
            <section className='section-2'>
                <div className='links'>
                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li>About</li>
                            <li>Partners</li>
                            <li>Services</li>
                            <li>Events</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Products</h3>
                        <ul>
                            <li>Games</li>
                            <li>Products</li>
                            <li>Services</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Support</h3>
                        <ul>
                            <li>FAQs</li>
                            <li>Customer Support</li>
                        </ul>
                    </div>
                </div>
                <div className='rights'>
                    <div>
                        <span><img src={require('../assets/copyright.png')} alt=""/></span>
                        <p>2022 All Rights Reserved @MOGames</p>
                    </div>                   
                    <div>
                        <p>Terms of Services</p>
                        <span><img src={require('../assets/dot.png')} alt=""/></span>
                        <p>Privacy Policy</p>
                    </div>

                </div>
            </section>
        </footer>
    )
}
export default Footer;