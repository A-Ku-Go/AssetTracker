import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

function DashboardLayout(){
    return (

        <div className="flex">

            <Sidebar />
            <div className="flex flex-1 flex-col p-10">
                <Header/>
                <main className="h-screen">
                    
                    <h1>Welcome to your dashboard!</h1>
                </main>
            </div>
        </div>

    );
}

export default DashboardLayout;