import { weatherStore } from "@/store/weatherStore";
import dynamic from "next/dynamic";
import "chart.js/auto";

export default function ChartsTemp() {
  const { data, dayId } = weatherStore();

  if (!data) return <></>;
  const Line = dynamic(() => import("react-chartjs-2").then(mod => mod.Line), {
    ssr: false,
  });

  const titleColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--title")
    .trim();

  const charts = {
    labels: [
      "12 AM",
      "",
      "",
      "",
      "",
      "",
      "5 AM",
      "",
      "",
      "",
      "",
      "",
      "12 PM",
      "",
      "",
      "",
      "",
      "5 PM",
      "",
      "",
      "",
      "",
      "",
      "11 PM",
    ],
    datasets: [
      {
        label: "Temperature change per day",
        data: data.days[dayId].hours.map(hour => hour.temp),
        fill: false,
        tension: 0.5,
        pointBackgroundColor: data.days[dayId].hours.map((_hour, index) => {
          if (index <= new Date().getHours()) {
            return "#000000";
          }
          return "rgb(75, 192, 192)";
        }),
      },
      {
        label: "Temperature by feeling",
        data: data.days[dayId].hours.map(hour => hour.feelslike),
        fill: false,
        tension: 0.5,
        pointBackgroundColor: data.days[dayId].hours.map((_hour, index) => {
          if (index <= new Date().getHours()) {
            return "#000000";
          }
          return "rgb(75, 192, 192)";
        }),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: titleColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: titleColor,
        },
      },
      y: {
        ticks: {
          color: titleColor,
        },
      },
    },
  };

  return (
    <div className=" p-4 text-title">
      <Line data={charts} options={options} />
    </div>
  );
}
