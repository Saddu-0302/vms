"use client"

import { useState, useEffect } from "react"
import { Users, Clock, CheckCircle, XCircle, Search, TrendingUp, Eye, Phone, Building } from "lucide-react"
import MenuList from "./MenuList"

interface Visitor {
    _id: string
    name: string
    email: string
    phone: string
    company: string
    purpose: string
    host: string
    checkIn: string
    checkOut?: string
    status: "pending" | "approved" | "rejected"
    visitDate: string
}

// Mock data for demonstration
const mockVisitors: Visitor[] = [
    {
        _id: "1",
        name: "John Smith",
        email: "john.smith@example.com",
        phone: "+1234567890",
        company: "Tech Corp",
        purpose: "Business Meeting",
        host: "Alice Johnson",
        checkIn: "09:30 AM",
        checkOut: "11:45 AM",
        status: "approved",
        visitDate: "2025-06-16",
    },
    {
        _id: "2",
        name: "Sarah Wilson",
        email: "sarah.wilson@example.com",
        phone: "+1234567891",
        company: "Design Studio",
        purpose: "Project Discussion",
        host: "Bob Miller",
        checkIn: "10:15 AM",
        status: "pending",
        visitDate: "2025-06-16",
    },
    {
        _id: "3",
        name: "Mike Davis",
        email: "mike.davis@example.com",
        phone: "+1234567892",
        company: "Marketing Inc",
        purpose: "Consultation",
        host: "Carol Brown",
        checkIn: "02:00 PM",
        checkOut: "03:30 PM",
        status: "approved",
        visitDate: "2025-06-16",
    },
    {
        _id: "4",
        name: "Emma Thompson",
        email: "emma.thompson@example.com",
        phone: "+1234567893",
        company: "Finance Ltd",
        purpose: "Interview",
        host: "David Wilson",
        checkIn: "11:00 AM",
        status: "rejected",
        visitDate: "2025-06-16",
    },
    {
        _id: "5",
        name: "James Rodriguez",
        email: "james.rodriguez@example.com",
        phone: "+1234567894",
        company: "Startup Hub",
        purpose: "Partnership Meeting",
        host: "Eva Martinez",
        checkIn: "03:45 PM",
        status: "pending",
        visitDate: "2025-06-16",
    },
]

// Mock chart data
const chartData = [
    { day: "Mon", visitors: 12, approved: 10, rejected: 2 },
    { day: "Tue", visitors: 19, approved: 15, rejected: 4 },
    { day: "Wed", visitors: 15, approved: 12, rejected: 3 },
    { day: "Thu", visitors: 22, approved: 18, rejected: 4 },
    { day: "Fri", visitors: 28, approved: 24, rejected: 4 },
    { day: "Sat", visitors: 8, approved: 7, rejected: 1 },
    { day: "Sun", visitors: 5, approved: 4, rejected: 1 },
]

const VisitorDashboard = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredVisitors, setFilteredVisitors] = useState<Visitor[]>([])

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0]

    // Filter today's visitors
    const todaysVisitors = mockVisitors.filter((visitor) => visitor.visitDate === today)

    useEffect(() => {
        const filtered = todaysVisitors.filter(
            (visitor) =>
                visitor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                visitor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                visitor.purpose.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        setFilteredVisitors(filtered)
    }, [searchTerm])

    // Calculate statistics
    const allVisitors = todaysVisitors.length
    const pendingVisitors = todaysVisitors.filter((v) => v.status === "pending").length
    const approvedVisitors = todaysVisitors.filter((v) => v.status === "approved").length
    const rejectedVisitors = todaysVisitors.filter((v) => v.status === "rejected").length

    const statsData = [
        {
            icon: Users,
            title: "All Visitors",
            count: allVisitors,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
        },
        {
            icon: Clock,
            title: "Pending",
            count: pendingVisitors,
            color: "text-yellow-600",
            bgColor: "bg-yellow-50",
            borderColor: "border-yellow-200",
        },
        {
            icon: CheckCircle,
            title: "Approved",
            count: approvedVisitors,
            color: "text-green-600",
            bgColor: "bg-green-50",
            borderColor: "border-green-200",
        },
        {
            icon: XCircle,
            title: "Rejected",
            count: rejectedVisitors,
            color: "text-red-600",
            bgColor: "bg-red-50",
            borderColor: "border-red-200",
        },
    ]

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "approved":
                return "bg-green-100 text-green-800 hover:bg-green-200"
            case "pending":
                return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
            case "rejected":
                return "bg-red-100 text-red-800 hover:bg-red-200"
            default:
                return "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }
    }

    const maxVisitors = Math.max(...chartData.map((d) => d.visitors))

    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Visitor Dashboard</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center text-sm text-gray-600">
                                {/* <Calendar className="w-4 h-4 mr-2" />
                                {new Date().toLocaleDateString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })} */}

                                <label htmlFor="my-drawer" className="btn drawer-button rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                </svg></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {statsData.map((stat, index) => {
                        const IconComponent = stat.icon
                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-lg border-l-4 ${stat.borderColor} shadow-sm hover:shadow-md transition-shadow duration-200`}
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                                            <p className="text-3xl font-bold text-gray-900 mt-2">{stat.count}</p>
                                        </div>
                                        <div className={`${stat.bgColor} p-3 rounded-full`}>
                                            <IconComponent className={`w-6 h-6 ${stat.color}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Chart Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            Weekly Visitor Trends
                        </h2>
                    </div>
                    <div className="p-6">
                        <div className="h-64 flex items-end justify-between gap-4 px-4">
                            {chartData.map((data, index) => (
                                <div key={index} className="flex flex-col items-center flex-1">
                                    <div className="w-full flex justify-center gap-1 mb-2">
                                        {/* Approved bar */}
                                        <div className="flex flex-col items-center flex-1">
                                            <div
                                                className="w-full bg-green-500 rounded-t-sm transition-all duration-300 hover:bg-green-600 cursor-pointer"
                                                style={{
                                                    height: `${(data.approved / maxVisitors) * 200}px`,
                                                    minHeight: data.approved > 0 ? "8px" : "0px",
                                                }}
                                                title={`Approved: ${data.approved}`}
                                            />
                                            <div className="text-xs text-green-600 font-medium mt-1">{data.approved}</div>
                                        </div>
                                        {/* Rejected bar */}
                                        <div className="flex flex-col items-center flex-1">
                                            <div
                                                className="w-full bg-red-500 rounded-t-sm transition-all duration-300 hover:bg-red-600 cursor-pointer"
                                                style={{
                                                    height: `${(data.rejected / maxVisitors) * 200}px`,
                                                    minHeight: data.rejected > 0 ? "8px" : "0px",
                                                }}
                                                title={`Rejected: ${data.rejected}`}
                                            />
                                            <div className="text-xs text-red-600 font-medium mt-1">{data.rejected}</div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-medium text-gray-600 mt-2">{data.day}</div>
                                    <div className="text-xs text-gray-500">Total: {data.visitors}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-6 mt-4 pt-4 border-t">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded"></div>
                                <span className="text-sm text-gray-600">Approved</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded"></div>
                                <span className="text-sm text-gray-600">Rejected</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Today's Visitors Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                <Eye className="w-5 h-5" />
                                Today's Visitors ({filteredVisitors.length})
                            </h2>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64 text-sm"
                                    placeholder="Search visitors..."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        {/* Desktop Table */}
                        <div className="hidden lg:block overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Visitor
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Company
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Purpose
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Host
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Check In
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Check Out
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredVisitors.map((visitor) => (
                                        <tr key={visitor._id} className="hover:bg-gray-50 transition-colors duration-150">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">{visitor.name}</div>
                                                    <div className="text-sm text-gray-500">{visitor.email}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{visitor.company}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{visitor.purpose}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{visitor.host}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{visitor.checkIn}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{visitor.checkOut || "-"}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(visitor.status)}`}
                                                >
                                                    {visitor.status.charAt(0).toUpperCase() + visitor.status.slice(1)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex justify-end gap-2">
                                                    {visitor.status === "pending" && (
                                                        <>
                                                            <button className="bg-green-100 text-green-700 hover:bg-green-200 px-3 py-1 rounded-md text-xs font-medium transition-colors duration-150">
                                                                Approve
                                                            </button>
                                                            <button className="bg-red-100 text-red-700 hover:bg-red-200 px-3 py-1 rounded-md text-xs font-medium transition-colors duration-150">
                                                                Reject
                                                            </button>
                                                        </>
                                                    )}
                                                    <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-md text-xs font-medium transition-colors duration-150">
                                                        View
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile/Tablet Cards */}
                        <div className="lg:hidden space-y-4">
                            {filteredVisitors.map((visitor) => (
                                <div key={visitor._id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{visitor.name}</h3>
                                            <p className="text-sm text-gray-500">{visitor.email}</p>
                                        </div>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(visitor.status)}`}>
                                            {visitor.status.charAt(0).toUpperCase() + visitor.status.slice(1)}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm">
                                        <div className="flex items-center text-gray-600">
                                            <Building className="w-4 h-4 mr-2 text-gray-400" />
                                            <span className="font-medium">Company:</span>
                                            <span className="ml-1">{visitor.company}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <Phone className="w-4 h-4 mr-2 text-gray-400" />
                                            <span className="font-medium">Phone:</span>
                                            <span className="ml-1">{visitor.phone}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <span className="font-medium">Purpose:</span>
                                            <span className="ml-1">{visitor.purpose}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <span className="font-medium">Host:</span>
                                            <span className="ml-1">{visitor.host}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <span className="font-medium">Check In:</span>
                                            <span className="ml-1">{visitor.checkIn}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <span className="font-medium">Check Out:</span>
                                            <span className="ml-1">{visitor.checkOut || "Not checked out"}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        {visitor.status === "pending" && (
                                            <>
                                                <button className="flex-1 bg-green-100 text-green-700 hover:bg-green-200 py-2 px-3 rounded-md text-sm font-medium transition-colors duration-150">
                                                    Approve
                                                </button>
                                                <button className="flex-1 bg-red-100 text-red-700 hover:bg-red-200 py-2 px-3 rounded-md text-sm font-medium transition-colors duration-150">
                                                    Reject
                                                </button>
                                            </>
                                        )}
                                        <button
                                            className={`${visitor.status === "pending" ? "" : "flex-1"} bg-gray-100 text-gray-700 hover:bg-gray-200 py-2 px-3 rounded-md text-sm font-medium transition-colors duration-150`}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredVisitors.length === 0 && (
                            <div className="text-center py-12">
                                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No visitors found</h3>
                                <p className="text-gray-500">
                                    {searchTerm ? "Try adjusting your search criteria." : "No visitors scheduled for today."}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="drawer z-10">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <MenuList />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default VisitorDashboard
