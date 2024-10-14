const Header = () => {
    return(
        <nav className="flex max-w-7xl items-center justify-between p-6">
            <a href="/">
                <img src="logo.png" alt="logo" className="h-10 w-auto"/>
            </a>
            <a href="" className="text-sm font-semibold leading-6 text-gray-900 hover:underline underline-offset-2">About</a>
            <a href="" className="text-sm font-semibold leading-6 text-gray-900 hover:underline underline-offset-2">Projects</a>
            <a href="" className="text-sm font-semibold leading-6 text-gray-900 hover:underline underline-offset-2">Skills</a>
        </nav>
    );
}

export default Header;