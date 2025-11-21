"use client";

import { useEffect, useState } from "react";

interface Zone {
  label: string;
  tz: string;
}

const zones: Zone[] = [
  { label: "WIB (UTC+7)", tz: "Asia/Jakarta" },
  { label: "UTC+8", tz: "Asia/Shanghai" },
  { label: "UTC+9", tz: "Asia/Tokyo" },
  { label: "GMT (UTC+0)", tz: "UTC" },
  { label: "CET (UTC+1)", tz: "Europe/Paris" },
  { label: "PST (UTC-8)", tz: "America/Los_Angeles" },
];

export default function WorldClock() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const format = (tz: string) =>
    new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      timeZone: tz,
    }).format(now);

  return (
    <div className="flex flex-wrap gap-4 text-sm text-muted">
      {zones.map((z) => (
        <div key={z.tz} className="flex items-center gap-1">
          <span className="font-medium">{z.label}:</span>
          <span>{format(z.tz)}</span>
        </div>
      ))}
    </div>
  );
}
