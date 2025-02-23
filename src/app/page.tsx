import BudgetChartComponent from "./_components/budget-chart-component";
import BudgetStatus from "./_components/budget-status";
import Navbar from "./_components/navbar";
import RevenueChartComponent from "./_components/revenue-chart-component";
import StatsCard from "./_components/stats-card";
import TeamMood from "./_components/team-mood-card";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-5 px-5 grid md:grid-cols-10 gap-2 grid-cols-1 container mx-auto pb-8 ">
        <div className="md:col-span-8 space-y-4">
          <div>
            <StatsCard />
          </div>
          <div className=" flex md:flex-row flex-col gap-2 w-full h-fit ">
            <RevenueChartComponent />
            <BudgetChartComponent />
          </div>
        </div>
        <div className="md:col-span-2">
          <TeamMood />

        </div>
      </div>
      <div className="container mx-auto px-5 pb-10">
      <BudgetStatus/>
      </div>
   
    </>
  )
}
