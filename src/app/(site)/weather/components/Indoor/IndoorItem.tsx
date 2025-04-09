export default function IndoorItem({ icon, title, description }) {
  return (
    <div className=" m-4 flex justify-between rounded-2xl border border-cardBorder bg-card p-4 text-lg text-title caret-lime-50 backdrop-blur-sm">
      <div className=" flex space-x-4">
        <div className=" grid place-content-center caret-lime-50"> {icon}</div>
        <div className=" text-xl">{title}</div>
      </div>

      <div> {description}</div>
    </div>
  );
}
