import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Project, projects } from "@/config/appData";
import { AlertTriangle, Download, Filter, Plus } from "lucide-react";



const BudgetStatus = () => {
    const parseHours = (hours: string): number => {
        return parseInt(hours.replace(/,/g, ''));
    };

    const getProgressBarColor = (type: Project['type']): string => {
        switch (type) {
            case 'over':
                return 'bg-red-500';
            case 'on':
                return 'bg-yellow-500';
            case 'under':
                return 'bg-teal-500';
            default:
                return 'bg-gray-500';
        }
    };

    const getProgressPercentage = (project: Project): number => {
        const hours = parseHours(project.hours);
        const budgetHours = 1000;
        return Math.min((hours / budgetHours) * 100, 100);
    };

    return (
        <div className="">
            <div className="mb-4 flex flex-wrap items-center justify-start gap-4">
                <div className="font-bold text-3xl">
                    Budget Status
                </div>
                <Button className="bg-teal-500 hover:bg-teal-600">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Project
                </Button>
                <Button variant="outlinebrand">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                </Button>
                <div className="flex items-center gap-2">
                    <Input type="date" className="w-auto border-2 border-teal-600 text-teal-800" />
                    <Button variant="outlinebrand" className="">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                    </Button>
                </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                {projects.map((project, i) => (
                    <Card key={i} className="w-full max-w-md">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-4 w-full">
                                <div className="flex items-center justify-between gap-3 w-full">
                                    <div>
                                        <h3 className="font-semibold text-lg">{project.name}</h3>
                                        <p className="text-sm text-gray-500">{project.company}</p>
                                    </div>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/pro.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div className="col-span-2 ">
                                <div className="flex items-center gap-2 justify-between">
                                    <p className="text-sm text-gray-500">Total Budget</p>
                                    <p className="font-semibold text-lg">{project.budget}</p>
                                </div>
                                <div className="flex items-center gap-2 justify-between">
                                    <p className="text-sm text-gray-500">Profitability (100%)</p>
                                    <div className="flex items-center gap-2">
                                        <p className={`font-semibold text-lg ${project.profitability.startsWith('-') ? 'text-red-500' : 'text-emerald-500'
                                            }`}>
                                            {project.profitability}
                                        </p>
                                        
                                    </div>
                                </div>
                                </div>
                             
                                <div className=" flex items-end justify-end">
                                {project.profitability.startsWith('-') && (
                                            <AlertTriangle className="w-5 h-5 text-red-500" />
                                        )}
                                </div>
                                
                            </div>

                            <div className="space-y-2">
                               
                                <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${getProgressBarColor(project.type)}`}
                                        style={{
                                            width: `${getProgressPercentage(project)}%`
                                        }}
                                    />
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span>Hours: {project.hours}</span>
                                    <span className={project.type === 'over' ? 'text-red-500 font-bold' : 'text-gray-500'}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default BudgetStatus;