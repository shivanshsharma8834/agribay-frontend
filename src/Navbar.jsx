function Navbar() {

    return (
        <div className="navigation-bar-main">
            <img src="src/assets/agribay-transparent.png"></img>
            <nav>
                <ul>
                    <li>
                    <a href="#">Dashboard</a>
                    </li>
                    <li>
                    <a href="#">Crop Yield Predict</a>
                    </li>
                    <li>
                    <a href="#">Crop Disease Predict</a>
                    </li>
                    <li>
                    <a href="#">Weather API</a>
                    </li>
                </ul>
            </nav>

            <div className="login-button">
                <button>Login</button> 
            </div>
        </div>
    )
}

export default Navbar;