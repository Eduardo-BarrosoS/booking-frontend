import "./styles.css"

export function Navbar() {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">LamaBooking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>


        </div>
    )
}