"use client";

export function Uptime() {
  return (
    <span suppressHydrationWarning>
      {Math.floor((new Date().getTime() - new Date("2025-10-25").getTime()) / (1000 * 60 * 60 * 24))}
    </span>
  );
}
