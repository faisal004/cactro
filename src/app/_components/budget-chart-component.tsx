import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BudgetChart from "./charts/budget-chart";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { budgetdata } from "@/config/appData";

const BudgetChartComponent = () => {
    return (  <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle>Budget</CardTitle>
      <Tabs defaultValue="week">
        <TabsList>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
        </TabsList>
      </Tabs>
    </CardHeader>
        <CardContent className="w-full">
          <BudgetChart className="aspect-square " />
          <div className="flex justify-center mt-4 gap-4">
          {budgetdata.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
        </CardContent>
      </Card> );
}
 
export default BudgetChartComponent;