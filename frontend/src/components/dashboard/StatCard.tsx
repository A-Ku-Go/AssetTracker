
function StatCard ({icon, title, value, subtitle}:{icon: React.ReactNode, title: string, value: number, subtitle: string,}) {

    return(
        <div className="border border-zinc-600 flex flex-col hover:border-zinc-200 min-h-10">
            <div className="flex justify-between p-3">
                <p>{title}</p>
                <div className="border border-zinc-900 p-2">{icon}</div>
            </div>
            <h1 className="font-bold text-2xl">{value}</h1>
            <p className="font-semibold text-sm p-2">({subtitle})</p>
        </div>
    )
}

export default StatCard;