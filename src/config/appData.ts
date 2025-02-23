export const teamMood = [
    { name: "Andrea", role: "UX Junior", mood: 100, image: "https://github.com/s.png" },
    { name: "Alvaro", role: "Back-end Developer", mood: 100, image: "https://github.com/shadc.png" },
    { name: "Juan", role: "UX Senior", mood: 50, image: "https://github.com/shad.png" },
    { name: "Jose", role: "Marketing", mood: 50, image: "https://github.com/sha.png" },
    { name: "Maria", role: "UX Junior", mood: 50, image: "https://github.com/sh.png" },
    { name: "Faisal", role: "Front-end Developer", mood: 100, image: "https://github.com/faisal004.png" },
  ];
  
  export const budgetdata = [
    { name: "Over Budget", value: 19, color: "#ef4444" },
    { name: "On Budget", value: 33, color: "#3b82f6" },
    { name: "Under Budget", value: 48, color: "#10b981" },
  ]
  
 export interface Project {
    name: string;
    company: string;
    budget: string;
    profitability: string;
    hours: string;
    status: string;
    type: 'over' | 'on' | 'under';
}

export const projects: Project[] = [
    {
        name: "Insurance App",
        company: "Verit",
        budget: "70,000 €",
        profitability: "-2,500 €",
        hours: "1,100",
        status: "100 hours over budget",
        type: "over",
    },
    {
        name: "Neo",
        company: "Bankia",
        budget: "70,000 €",
        profitability: "4,000 €",
        hours: "1,100",
        status: "1000 sold hours",
        type: "on",
    },
    {
        name: "VR Website",
        company: "Barça",
        budget: "70,000 €",
        profitability: "4,000 €",
        hours: "2,000",
        status: "2000 sold hours",
        type: "under",
    },
    {
        name: "VR Website",
        company: "Barça",
        budget: "70,000 €",
        profitability: "4,000 €",
        hours: "1,100",
        status: "1100 sold hours",
        type: "under",
    },
];