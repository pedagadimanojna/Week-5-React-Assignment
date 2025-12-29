export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold dark:text-white">{value}</p>
    </div>
  );
}
