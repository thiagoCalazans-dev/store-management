import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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
import { getTotalSalesByProducts } from "@/data/data";
import { toCamelCase } from "@/lib/strings";

export const description = "A donut chart with text";

const chartConfig = {
  bikini: {
    label: "Bikini",
    color: "hsl(var(--chart-1))",
  },
  sunglasses: {
    label: "Sunglasses",
    color: "hsl(var(--chart-2))",
  },
  beachTowel: {
    label: "Beach Towel",
    color: "hsl(var(--chart-3))",
  },
  flipFlops: {
    label: "Flip Flops",
    color: "hsl(var(--chart-4))",
  },
  beachUmbrella: {
    label: "Beach Umbrella",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function SalesByProductPieChart() {
  const { salesData, total } = getTotalSalesByProducts();

  const chartData = salesData.map((item) => {
    const stringFill = toCamelCase(item.product);
    return {
      product: item.product,
      sales: item.totalSales,
      fill: `var(--color-${stringFill})`,
    };
  });

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="product"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Sales
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
