import Sidebar from "@/components/layout/Sidebar";

function DashboardLayout(){
    return (

        <div className="flex">
            <Sidebar />
            <main className="h-screen flex-1 p-10">
                <p>Welcome to your dashboard!</p>
            </main>
        </div>

    );
}

export default DashboardLayout;