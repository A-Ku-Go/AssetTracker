import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import StatGrid from "@/components/dashboard/StatGrid";


function DashboardLayout(){
    return (

        <div className="flex">

            <Sidebar />
            <div className="flex flex-1 flex-col p-10 gap-10">
                <Header/>
                <main className="h-screen">

                    <StatGrid/>

                </main>
            </div>
        </div>

    );
}

export default DashboardLayout;