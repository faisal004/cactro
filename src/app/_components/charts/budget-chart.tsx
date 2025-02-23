"use client"

import { budgetdata } from "@/config/appData"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"


const  BudgetChart=({ className }: { className?: string })=> {
  return (
    <ResponsiveContainer width="100%" height="100%" className={className}>
      <PieChart>
        <Pie data={budgetdata} cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" paddingAngle={2} dataKey="value">
          {budgetdata.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-5xl font-bold">
          5
        </text>
        <text x="50%" y="57%" textAnchor="middle" dominantBaseline="middle" className="text-xl font-bold">
          
          Total Budget
        </text>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default BudgetChart