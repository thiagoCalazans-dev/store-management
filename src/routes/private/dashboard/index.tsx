import AverageTicket from "./avarage-ticket";
import Sales from "./sales";
import { SalesByProductPieChart } from "./sales-by-product-pie-chart";
import { SalesPerDay } from "./sales-per-day-area-chart";

export function Dashboard() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-10">
      <div className="space-y-4 max-w-screen-2xl  w-full">
        <div>
          <h1 className="font-semibold leading-none tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">Control your store.</p>
        </div>
        <main className="grid gap-4">
          <AverageTicket />
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <SalesByProductPieChart />
              <SalesPerDay />
            </div>
            <div className="col-span-3">
              <Sales />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
