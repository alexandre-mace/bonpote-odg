"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const chartConfig = {
  footprint: {
    label: "Empreinte",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const colors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export function BarChartWithLabels({
  title,
  description,
  data,
  emoji,
  source,
}: {
  title: string;
  description: string;
  data: { category: string; footprint: number }[];
  emoji: string;
  source: string;
}) {
  return (
    <Card>
      <CardHeader className={"relative overflow-hidden"}>
        <div className={"absolute -right-5 top-0"}>
          <Image
            className={"h-16 w-auto md:h-24"}
            width={96}
            height={96}
            src={emoji}
            alt={title}
          />
        </div>
        <div className={"flex items-start justify-between md:flex-row"}>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="footprint"
              fill={colors[Math.floor(Math.random() * colors.length)]}
              radius={8}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 pb-4 pt-0 text-sm">
        <Button asChild variant={"link"} className={""}>
          <a
            target={"_blank"}
            href={source}
            className={"cursor-pointer text-muted-foreground"}
          >
            Voir la source
            <ExternalLink className={"h-4 w-4"} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
