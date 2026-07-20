import Background from '@/components/background/Background';
import LandingPage from '@/pages/LandingPage';
import {Route, Routes} from "react-router-dom";
import DashboardPage from '@/pages/DashboardPage';

function App() {
  return (
    <>
    <Background />
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
    </>
    );
}

export default App;