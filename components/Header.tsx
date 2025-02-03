import Link from "next/link"

const Header = () => {
    return (
        <nav className="h-20 flex items-center px-8 shadow-md fixed w-full bg-white z-50">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                <span className="text-2xl font-bold text-gray-800">ShifoLine</span>
            </div>
            <div className="ml-auto flex items-center gap-8">
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Bosh sahifa
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Shifokorlar
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Mutaxassisliklar
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Dorixonalar
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Blog
                </Link>
                <Link
                    href="/login"
                    className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                    Kirish
                </Link>
            </div>
        </nav>
    )
}

export default Header

