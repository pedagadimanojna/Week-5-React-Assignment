export default function Notification({ notification, clear }) {
  if (!notification) return null;

  return (
    <div className={`mb-4 p-3 rounded text-white ${notification.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
      <div className="flex justify-between">
        <span>{notification.message}</span>
        <button onClick={clear}>✖</button>
      </div>
    </div>
  );
}
