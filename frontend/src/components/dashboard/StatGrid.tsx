import StatCard from "@/components/dashboard/Statcard";
import {Box, UsersRound, MapPinned, Logs} from "lucide-react";

function StatGrid (){

    const statItems = [

        {icon:Box, title:'Asset', value:999, subtitle:'+12 today'},
        {icon:UsersRound, title:'Users', value:23, subtitle:'+2 today'},
        {icon:MapPinned, title:'Locations', value:10, subtitle:'No changes'},
        {icon:Logs, title:'Logs', value:302, subtitle:'+18 today'}

    ]


    return (
        <div className="grid grid-cols-2 gap-5">
            {statItems.map((item)=>(
                <StatCard key={item.title} icon={<item.icon color="white"/>} title={item.title} value={item.value} subtitle={item.subtitle}/>
            ))}
        </div>
    )
}

export default StatGrid;
