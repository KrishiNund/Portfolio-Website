const Header = () => {
    return(
        <header className="border-x-slate-200 border-2 mb-12">
             <nav className="flex w-screen items-center justify-between p-6">
                <a href="/">
                    <img src="logo.png" alt="logo" className="h-10 w-auto"/>
                </a>

                <div className="flex w-screen items-center justify-evenly">
                    <a href="" className="text-lg font-semibold leading-6 text-gray-900 hover:underline underline-offset-2">About</a>
                    <a href="" className="text-lg font-semibold leading-6 text-gray-900 hover:underline underline-offset-2">Projects</a>
                    <a href="" className="text-lg font-semibold leading-6 text-gray-900 hover:underline underline-offset-2">Skills</a>
                </div>
            
            </nav>
        </header>
       
    );
}

export default Header;