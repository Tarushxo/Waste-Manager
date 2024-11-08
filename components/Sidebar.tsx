import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MapPin, Trash, Coins, Medal, Settings, Home, Car } from "lucide-react"

const sideBarItems = [
    {href:"/" ,icon: Home, label:"Home"},
    {href:"/reports" ,icon: MapPin, label:"Report"},
    {href:"/collection" ,icon: Trash, label:"Collection"},
    {href:"/rewards" ,icon: Coins, label:"Rewards"},
    {href:"/leaderboard" ,icon: Medal, label:"Leaderboard"},
]

interface sideBarProps{
    open: boolean
}

export default function Sidebar({open}:sideBarProps) {
    const pathName = usePathname()

  return (
    <aside className={`bg-white border-r pt-20 border-gray-200 text-gray-800 dark:bg-[#181818] dark:border-[#121212] dark:text-slate-100 w-64 fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"} `}>
        <nav className="h-full flex flex-col justify-between">
            <div className="px-4 py-6 space-y-8">
            {sideBarItems.map((item) => (
                <Link href={item.href} key={item.href} passHref>
                    <Button variant={pathName === item.href ? "secondary" : "ghost"} className={`w-full justify-start py-3 ${pathName === item.href ? "bg-green-300 text-green-800" : "text-gray-600 dark:text-slate-100 hover:bg-gray-100 hover:dark:bg-[#272727]"}`}>
                        <item.icon className="mr-3 h-5 w-5"/>\
                        <span className="text-base">{item.label}</span>
                    </Button>
                </Link>
            ))}
            </div>
            <div className="p-4 border-t border-gray-200">
                <Link href="/settings" passHref>
                <Button variant={pathName === "/settings" ? "secondary" : "ghost"} className={`w-full justify-start py-3 ${pathName === "/settings" ? "bg-green-300 text-green-800" : "text-gray-600 dark:text-slate-100 hover:bg-gray-100 hover:dark:bg-[#272727]"}`}>
                <Settings className="mr-3 h-5 w-5" />
                        <span className="text-base">Settings</span> 
                    </Button>
                </Link>
            </div>
        </nav>
    </aside>
  )
}
