import Navbar from "./_components/navbar";
import StatsCard from "./_components/stats-card";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-5 px-10">
        <StatsCard />

      </div>
    </>
  )
}
