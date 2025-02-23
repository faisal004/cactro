import Navbar from "./_components/navbar";
import StatsCard from "./_components/stats-card";
import TeamMood from "./_components/team-mood-card";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-5 px-10 grid md:grid-cols-10 gap-2 grid-cols-1 container mx-auto">
        <div className="md:col-span-8" >
          <StatsCard />
        </div>
        <div className="md:col-span-2">
          <TeamMood />

        </div>
      </div>
    </>
  )
}
