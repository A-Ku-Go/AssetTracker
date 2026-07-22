import SidebarItem from "@/components/layout/SidebarItem";
import {Home,Settings,Package,User} from "lucide-react"

function Sidebar() {

    const navitems = [
        { Icon: Home, name: 'Dashboard', href: '/dashboard' },
        { Icon: Package, name: 'Assets', href: '/assets' },
        { Icon: User, name: 'Users', href: '/users' },
    ];

    return (
        <aside className="w-[260px] h-screen bg-zinc-950/85 backdrop-blur-lg shadow-xl text-white p-6 border-r border-zinc-800 flex flex-col">
            <p className="p-5 font-bold text-2xl">AssetFlow</p>

            <hr className="border-zinc-800"/>

            <ul className="p-2 flex-1">    
                {navitems.map((item) => (
                    <li className="p-2" key={item.href}>
                        <SidebarItem icon={<item.Icon/>} name={item.name} href={item.href} />
                    </li>
                ))}
            </ul>

            <hr className="border-zinc-800"/>

            <div className="p-2">   
                <SidebarItem icon={<Settings/>} name="Settings" href="/settings"/>
            </div>

        </aside>
    );
}

export default Sidebar;