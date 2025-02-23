"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "19 June", cost: 1000 },
  { date: "20 June", cost: 3200 },
  { date: "21 June", cost: 3500 },
  { date: "22 June", cost: 4200 },
  { date: "23 June", cost: 5500 },
  { date: "24 June", cost: 6500 },
  { date: "25 June", cost: 6500 },
]

const RevenueChart =({ className }: { className?: string }) => {
  return (
    <ResponsiveContainer width="100%" height="50%" className={className}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `€${value}`}
        />
        <Tooltip />
        <Line type="monotone" dataKey="cost" stroke="#14b8a6" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default RevenueChart