import { BarChartWithLabels } from "@/components/BarChartWithLabels";
import data from "@/data/charts.json";

export default function Home() {
  return (
    <main
      className={"container mx-auto max-w-7xl space-y-10 px-4 py-10 md:px-0"}
    >
      <h1 className={"font-phudu text-3xl font-black md:text-5xl"}>
        Les{" "}
        <span className={"bg-bonpote-yellow text-bonpote-darkblue"}>
          ordres de grandeur
        </span>{" "}
        sur le climat
      </h1>
      <div className={"grid gap-6 md:grid-cols-2"}>
        {data.map((datum) => (
          <BarChartWithLabels
            title={datum.title}
            description={datum.description}
            data={datum.data}
            key={datum.title}
            emoji={datum.emoji}
          />
        ))}
      </div>
    </main>
  );
}
