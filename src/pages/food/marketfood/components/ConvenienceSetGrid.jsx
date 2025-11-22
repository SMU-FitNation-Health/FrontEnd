import React from "react";
import ConvenienceSetCard from "./ConvenienceSetCard";

export default function ConvenienceSetGrid({ sets = [] }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(10px,2.2vmin,18px)]">
      {sets.map((s) => (
        <ConvenienceSetCard key={s.id} set={s} />
      ))}
    </section>
  );
}
