import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to ="/" className="w-10 h-10 rounded-lg border border-white items-center justify-center flex font-bold shadow-white">
                <p className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">AJ</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to = "/about" className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent"
                >
                        About
                </NavLink>
                <NavLink to = "/projects" className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                        Projects
                </NavLink>
                <NavLink to = "/contact" className="bg-gradient-to-r from-pink-600 to-purple-400 bg-clip-text text-transparent">
                        Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar;