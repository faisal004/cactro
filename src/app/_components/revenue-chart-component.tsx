import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RevenueChart from "./charts/revenue-chart";

const RevenueChartComponent = () => {
  return (<Card className="w-full ">
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle>Total Revenue</CardTitle>
      <Tabs defaultValue="week">
        <TabsList>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
        </TabsList>
      </Tabs>
    </CardHeader>
    <CardContent className="w-full ">
      <RevenueChart className="aspect-square  " />
    </CardContent>
  </Card>);
}

export default RevenueChartComponent;