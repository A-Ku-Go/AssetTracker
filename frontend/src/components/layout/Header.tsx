import {User} from "lucide-react"

function Header(){

    return (
        <div className="flex justify-between border border-zinc-900 backdrop-blur-lg p-4">
            <p>Dashboard</p>
            <div className="flex gap-2">
                <User color="white"/>
                <p>User</p>
            </div>
        </div>
    )

}

export default Header;