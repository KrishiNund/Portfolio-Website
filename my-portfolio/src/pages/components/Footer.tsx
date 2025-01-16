"use client";

const Footer = () => {
    

    return(
        <footer className="text-gray-900 py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                &copy; {new Date().getFullYear()} Krishi Nund. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;