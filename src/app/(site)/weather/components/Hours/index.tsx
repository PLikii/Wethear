import { weatherStore } from "@/store/weatherStore";
import { map } from "lodash";
import HoursItem from "./hoursItem";
import { useEffect, useRef } from "react";

export default function Hours() {
  const { data, dayId, hoursId } = weatherStore();

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elementWidth = 83;
      const offset = elementWidth * hoursId;
      containerRef.current.scrollLeft = offset;
    }
  }, [hoursId]);

  if (!data) return <></>;
  return (
    <div>
      <div
        className="flex snap-x space-x-4 overflow-x-auto p-4 "
        ref={containerRef}
      >
        {map(data.days[dayId].hours, (_project, index) => (
          <HoursItem key={index} id={index} />
        ))}
      </div>
    </div>
  );
}
