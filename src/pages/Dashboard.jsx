import DashboardCard from "../components/DashboardCard";

export default function Dashboard() {
  return (
    <div className="ml-64 p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <DashboardCard title="Users" value="1,240" />
      <DashboardCard title="Tickets Sold" value="8,540" />
      <DashboardCard title="Revenue" value="$52,300" />
    </div>
  );
}
