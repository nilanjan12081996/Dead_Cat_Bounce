import DashboardCard from "../../components/DashboardCard.jsx";
import TableOne from "../../components/TableOne.jsx";
const Dashboard = () => {
  return (
    <div className="wrapper_area w-full my-0 mx-auto px-0">
      <div className="bg-white mb-4 md:mb-0 py-6 px-6 shadow-md rounded-xl w-full h-full lg:h-screen">
        <h1 className="text-2xl font-medium text-black mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <DashboardCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
