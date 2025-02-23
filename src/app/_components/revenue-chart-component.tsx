import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RevenueChart from "./charts/revenue-chart";
import { Switch } from "@/components/ui/switch";

const RevenueChartComponent = () => {
  return (<Card className="w-full ">
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle>Total Revenue</CardTitle>
      <div className="flex items-center gap-3">
        <span>
          Month
        </span>
        <Switch />
        <span>
          Week
        </span>
      </div>
   

    </CardHeader>
    <CardContent className="w-full ">
      <RevenueChart className="aspect-square  " />
    </CardContent>
  </Card>);
}

export default RevenueChartComponent;