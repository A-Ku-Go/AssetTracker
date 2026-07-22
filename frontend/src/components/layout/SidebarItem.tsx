import AnimatedOutlineButton from "@/components/ui/AnimatedOutlineButton";
import {Link} from "react-router-dom";

function SidebarItem({icon, name, href}: { icon: React.ReactNode; name: string; href: string }) {

    return (
        <AnimatedOutlineButton>
            <Link to={href} className="flex items-center gap-2">
                {icon}
                {name}
            </Link>
        </AnimatedOutlineButton>
    );

}

export default SidebarItem;