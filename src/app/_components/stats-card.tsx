import { Card, CardContent } from "@/components/ui/card";
import { Check, LayoutDashboard, RefreshCcw, TriangleAlert, Users } from "lucide-react";

const stats = [
    { name: "Total Projects", value: "5", icon: LayoutDashboard },
    { name: "Completed", value: "1", icon: Check },
    { name: "Ongoing", value: "3", icon: RefreshCcw },
    { name: "Delayed", value: "1", icon: TriangleAlert, highlight: true },
    { name: "Employees", value: "5", icon: Users },
]

const StatsCard = () => {
    return (<div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 container mx-auto">
            {stats.map((stat) => (
                <Card key={stat.name} className={stat.highlight ? "border-red-200 bg-red-300 text-white" : undefined}>
                    <div className="flex flex-row items-center justify-between p-3 ">
                            <stat.icon className={`size-8   ${stat.highlight ? " text-red-500" :"text-teal-500"}  `}   />
                     
                    </div>
                    <CardContent className="flex flex-col items-center justify-center">
                        <div className="text-5xl font-extrabold pb-1">{stat.value}</div>
                        <div>
                        {stat.name}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>);
}

export default StatsCard;
