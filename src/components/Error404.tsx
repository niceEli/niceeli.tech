"use client";
import { useState } from "react";

export default function Error404() {
  const [ clicks, setClicks ] = useState(404);

  const getClickFunny = () => {
    if (clicks === 420) return "🌿🗿 (420 hehe)"
    return clicks
  }

  return <h1 className="text-5xl font-bold transition-all hover:italic select-none" onClick={() => setClicks(clicks+1)}>{getClickFunny()}</h1>
}