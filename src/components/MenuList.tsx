import { Link } from "react-router-dom";

const MenuList = () => {
    return (
        <div className="h-screen w-64 flex flex-col ">
            <div className="">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Menu</h1>
                <ul className="space-y-3">
                    <li>
                        <Link to="/" className="block text-gray-700 hover:text-blue-600 transition">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin" className="block text-gray-700 hover:text-blue-600 transition">
                            User Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="block text-gray-700 hover:text-blue-600 transition">
                            All Visitors
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="block text-gray-700 hover:text-blue-600 transition">
                            Pending Visitors
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Logout button sticks to the bottom */}
            <div className="mt-auto mb-10">
                <button className="w-full btn rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:shadow-lg transition">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default MenuList;
