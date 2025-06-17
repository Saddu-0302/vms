// // import React  from 'react'

// import { useEffect, useState } from "react";
// import { useGetUsersQuery } from "../redux/userApi"
// // import type { coreModuleName } from "@reduxjs/toolkit/query";
// interface User {
//     _id: string;
//     first_name: string;
//     last_name: string;
//     email: string;
//     contact: string;
//     role: string;
// }

// const UserManagment = () => {
//     const [filterRole, setFilterRole] = useState<string | null>(null)
//     const [search, setSearch] = useState<string>()
//     const [filterUsers, setFilterUsers] = useState<User[]>([])
//     const { data } = useGetUsersQuery(undefined)
//     // console.log(data);

//     useEffect(() => {
//         const inputSearch = search?.toLowerCase().trim();
//         let filteredUser: User[] = data
//         if (filterRole) {
//             filteredUser = data.filter((user: User) => user.role === filterRole);
//         }
//         if (inputSearch) {
//             filteredUser = data.filter((user: User) =>
//                 user.email.toLowerCase().includes(inputSearch)
//             );
//         }
//         setFilterUsers(filteredUser)
//     }, [search, data, filterRole])
//     const admin = data?.filter((admin: any) =>
//         admin.role === "admin"   //check the current item
//         &&
//         Object.keys(admin) // if the object is not empty
//             .length > 0   // ensure that object has at least one key
//     );
//     const hr = data?.filter((hr: any) =>
//         hr.role === "hr" && Object.keys(hr).length > 0
//     );
//     const guard = data?.filter((guard: any) =>
//         guard.role === "guard" && Object.keys(guard).length > 0
//     )
//     const userData = [
//         {
//             logo: (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-people-fill text-blue-400" viewBox="0 0 16 16">
//                     <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
//                 </svg>
//             ),
//             name: "All Users",
//             count: data?.length || 0
//         },
//         {
//             logo: (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="text-red-500" viewBox="0 0 16 16">
//                     <path d="M8 0a2 2 0 0 0-2 2v3.586l-1.707 1.707A1 1 0 0 0 4 8v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-.293-.707L10 5.586V2a2 2 0 0 0-2-2z" />
//                 </svg>
//             ),
//             name: "Admin",
//             count: admin?.length || 0
//         },
//         {
//             logo: (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="text-green-500" viewBox="0 0 16 16">
//                     <path d="M3 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H3z" />
//                     <path d="M9 6a3 3 0 1 0-6 0 3 3 0 0 0 6 0z" />
//                     <path d="M13 7.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
//                     <path d="M11.5 9c-1.12 0-2.09.435-2.795 1.005.21.323.38.682.51 1.067.542-.44 1.233-.822 2.285-.822s1.743.382 2.285.822c.13-.385.3-.744.51-1.067C13.59 9.435 12.62 9 11.5 9z" />
//                 </svg>
//             ),
//             name: "Hr",
//             count: hr?.length || 0
//         },
//         {
//             logo: (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="text-yellow-500" viewBox="0 0 16 16">
//                     <path d="M8 0c-.176 0-.353.01-.53.03a4.6 4.6 0 0 1-.47.03C5.5.06 3.6.65 2.15 2.1 0 4.25 0 8 0 8s0 3.75 2.15 5.9C3.6 15.35 5.5 15.94 7 15.97c.157.003.314.03.47.03.177.02.354.03.53.03.986 0 1.947-.216 2.83-.63A7.969 7.969 0 0 0 16 8a7.97 7.97 0 0 0-1.17-4.37A7.97 7.97 0 0 0 8 0zM8 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
//                     <path d="M7 6h2v4H7V6z" />
//                     <path d="M8 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
//                 </svg>
//             ),
//             name: "Guard",
//             count: guard?.length || 0
//         }
//     ]
//     console.log(userData);

//     return <>
//         <div>
//             <div className="navbar bg-slate-500">
//                 <div className="navbar-start">
//                     <h1 className="text-xl">User Managment</h1>
//                 </div>
//                 <div className="navbar-center">
//                 </div>
//                 <div className="navbar-end">
//                 </div>
//             </div>

//             <div>
//                 <div className="flex flex-wrap justify-center gap-4">
//                     {userData && userData.map((user: any, index: number) => (<div key={index + 1} className="w-full sm:w-64 md:w-60 lg:w-64">
//                         <div className="card card-compact h-32 bg-base-100 shadow-xl">
//                             <div className="card-body p-4">
//                                 <div className="flex items-center gap-4">
//                                     <div>{user.logo}</div>
//                                     <div className="">
//                                         <h2 className="font-semibold text-sm sm:text-base">{user.name}</h2>
//                                         <p className="text-sm">{user.count}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     ))}
//                 </div>
//                 <div>

//                     <div className="flex justify-between items-center container mt-5">
//                         <h1 className="ml-10 text-2xl">All Users</h1>
//                         <div className="flex items-center">
//                             {/* filter using email */}
//                             <input
//                                 value={search}
//                                 onChange={(e) => setSearch(e.target.value)}
//                                 className="input"
//                                 type="text"
//                                 placeholder="Search" />
//                             {/* filter using role */}
//                             <div className="dropdown">
//                                 <div tabIndex={0} role="button" className="btn m-1">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
//                                         <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
//                                     </svg></div>
//                                 <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
//                                     <li><a onClick={() => setFilterRole("")}>All Users</a></li>
//                                     <li><a onClick={() => setFilterRole("admin")}>Admin</a></li>
//                                     <li><a onClick={() => setFilterRole("hr")}>Hr</a></li>
//                                     <li><a onClick={() => setFilterRole("guard")}>Guard</a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     {
//                         filterUsers && <table className="table">
//                             <thead>
//                                 <tr>
//                                     <th>Id</th>
//                                     <th>Name</th>
//                                     <th>Email</th>
//                                     <th>Contact</th>
//                                     <th>Role</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     filterUsers.map((user: any) => <tr key={user._id}>
//                                         <td>{user._id}</td>
//                                         <td>{user.first_name} {user.last_name}</td>
//                                         <td>{user.email}</td>
//                                         <td>{user.contact}</td>
//                                         <td>{user.role}</td>
//                                         <td>
//                                             <button className="btn btn-success mx-2">Active</button>
//                                             <button className="btn btn-error">Deactive</button>
//                                         </td>
//                                     </tr>)
//                                 }
//                             </tbody>
//                         </table>
//                     }
//                 </div>

//             </div>
//         </div>
//     </>
// }

// export default UserManagment




import { useEffect, useState } from "react"
import { useGetUsersQuery } from "../redux/userApi"
import { Users, Shield, UserCheck, ShieldCheck, Search, Filter, UserX, UserPlus } from "lucide-react"
import CreateUser from "./CreateUser"

interface User {
    _id: string
    first_name: string
    last_name: string
    email: string
    contact: string
    role: string
}

const UserManagement = () => {
    const [filterRole, setFilterRole] = useState<string | null>(null)
    const [search, setSearch] = useState<string>()
    const [filterUsers, setFilterUsers] = useState<User[]>([])
    const { data } = useGetUsersQuery(undefined)

    useEffect(() => {
        const inputSearch = search?.toLowerCase().trim()
        let filteredUser: User[] = data
        if (filterRole) {
            filteredUser = data.filter((user: User) => user.role === filterRole)
        }
        if (inputSearch) {
            filteredUser = data.filter(
                (user: User) =>
                    user.email.toLowerCase().includes(inputSearch) ||
                    user.first_name.toLowerCase().includes(inputSearch) ||
                    user.last_name.toLowerCase().includes(inputSearch),
            )
        }
        setFilterUsers(filteredUser)
    }, [search, data, filterRole])

    const admin = data?.filter((admin: any) => admin.role === "admin" && Object.keys(admin).length > 0)
    const hr = data?.filter((hr: any) => hr.role === "hr" && Object.keys(hr).length > 0)
    const guard = data?.filter((guard: any) => guard.role === "guard" && Object.keys(guard).length > 0)

    const userData = [
        {
            icon: Users,
            name: "All Users",
            count: data?.length || 0,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
        },
        {
            icon: Shield,
            name: "Admin",
            count: admin?.length || 0,
            color: "text-red-600",
            bgColor: "bg-red-50",
            borderColor: "border-red-200",
        },
        {
            icon: UserCheck,
            name: "Hr",
            count: hr?.length || 0,
            color: "text-green-600",
            bgColor: "bg-green-50",
            borderColor: "border-green-200",
        },
        {
            icon: ShieldCheck,
            name: "Guard",
            count: guard?.length || 0,
            color: "text-yellow-600",
            bgColor: "bg-yellow-50",
            borderColor: "border-yellow-200",
        },
    ]

    const getRoleBadgeColor = (role: string) => {
        switch (role) {
            case "admin":
                return "bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium"
            case "hr":
                return "bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
            case "guard":
                return "bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium"
            default:
                return "bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium"
        }
    }
    const openModal = () => {
        const modal = document.getElementById('my_modal_2') as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50/50 ">
            {/* Enhanced Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                        </div>
                        <button onClick={openModal} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 cursor-pointer">
                            <UserPlus className="w-4 h-4" />
                            Add User
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {userData &&
                        userData.map((user: any, index: number) => {
                            const IconComponent = user.icon
                            return (
                                <div
                                    key={index + 1}
                                    className={`bg-white rounded-lg border-l-4 ${user.borderColor} shadow-sm hover:shadow-md transition-shadow duration-200`}
                                >
                                    <div className="p-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-600">{user.name}</p>
                                                <p className="text-3xl font-bold text-gray-900 mt-2">{user.count}</p>
                                            </div>
                                            <div className={`${user.bgColor} p-3 rounded-full`}>
                                                <IconComponent className={`w-6 h-6 ${user.color}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>

                {/* Enhanced Filters and Table Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    {/* Header with Search and Filter */}
                    <div className="px-6 py-4 border-b border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <h2 className="text-lg font-semibold text-gray-900">All Users</h2>
                            <div className="flex flex-col sm:flex-row gap-3">
                                {/* Enhanced Search Input */}
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        value={search || ""}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64 text-sm"
                                        type="text"
                                        placeholder="Search users..."
                                    />
                                </div>

                                {/* Enhanced Filter Dropdown */}
                                <div className="relative">
                                    <div className="dropdown dropdown-end">
                                        <div
                                            tabIndex={0}
                                            role="button"
                                            className="btn btn-outline border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-700 normal-case font-normal"
                                        >
                                            <Filter className="w-4 h-4 mr-2" />
                                            {filterRole ? filterRole.charAt(0).toUpperCase() + filterRole.slice(1) : "All Roles"}
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu bg-white rounded-lg shadow-lg border border-gray-200 z-10 w-52 p-2 mt-1"
                                        >
                                            <li>
                                                <a onClick={() => setFilterRole(null)} className="text-gray-700 hover:bg-gray-50 rounded-md">
                                                    All Users
                                                </a>
                                            </li>
                                            <li>
                                                <a onClick={() => setFilterRole("admin")} className="text-gray-700 hover:bg-gray-50 rounded-md">
                                                    Admin
                                                </a>
                                            </li>
                                            <li>
                                                <a onClick={() => setFilterRole("hr")} className="text-gray-700 hover:bg-gray-50 rounded-md">
                                                    Hr
                                                </a>
                                            </li>
                                            <li>
                                                <a onClick={() => setFilterRole("guard")} className="text-gray-700 hover:bg-gray-50 rounded-md">
                                                    Guard
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Table - Desktop */}
                    <div className="hidden md:block overflow-x-auto">
                        {filterUsers && (
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Contact
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filterUsers.map((user: any) => (
                                        <tr key={user._id} className="hover:bg-gray-50 transition-colors duration-150">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">
                                                {user._id.slice(-6)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {user.first_name} {user.last_name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.contact}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={getRoleBadgeColor(user.role)}>
                                                    {user.role
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        user.role.slice(1)
                                                    }
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex justify-end gap-2">
                                                    <button className="bg-green-100 text-green-700 hover:bg-green-200 px-3 py-1 rounded-md text-xs font-medium transition-colors duration-150 flex items-center gap-1">
                                                        <UserCheck className="w-3 h-3" />
                                                        Active
                                                    </button>
                                                    <button className="bg-red-100 text-red-700 hover:bg-red-200 px-3 py-1 rounded-md text-xs font-medium transition-colors duration-150 flex items-center gap-1">
                                                        <UserX className="w-3 h-3" />
                                                        Deactive
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Enhanced Mobile Cards */}
                    <div className="md:hidden divide-y divide-gray-200">
                        {filterUsers &&
                            filterUsers.map((user: any) => (
                                <div key={user._id} className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-base">
                                                {user.first_name} {user.last_name}
                                            </h3>
                                            <p className="text-sm text-gray-500 font-mono mt-1">ID: {user._id.slice(-6)}</p>
                                        </div>
                                        <span className={getRoleBadgeColor(user.role)}>
                                            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                        </span>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <span className="font-medium w-20 text-gray-500">Email:</span>
                                            <span className="text-gray-900">{user.email}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <span className="font-medium w-20 text-gray-500">Contact:</span>
                                            <span className="text-gray-900">{user.contact}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-green-100 text-green-700 hover:bg-green-200 py-2 px-3 rounded-md text-sm font-medium transition-colors duration-150 flex items-center justify-center gap-1">
                                            <UserCheck className="w-4 h-4" />
                                            Active
                                        </button>
                                        <button className="flex-1 bg-red-100 text-red-700 hover:bg-red-200 py-2 px-3 rounded-md text-sm font-medium transition-colors duration-150 flex items-center justify-center gap-1">
                                            <UserX className="w-4 h-4" />
                                            Deactive
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Empty State */}
                    {filterUsers && filterUsers.length === 0 && (
                        <div className="text-center py-12">
                            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
                            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box ">
                    <CreateUser />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default UserManagement
