// Sample inspection report — shown in Report screen.
export const REPORT = {
  car: "Hyundai Creta 2020",
  reg: "TS09 EZ 4421",
  km: "42,150",
  inspectedBy: "Ravi Teja Konda",
  score: 78,
  verdict: "Worth buying",
  priceMin: 425000,
  priceMax: 465000,
  asking: 510000,

  // 8 section scores covering bottom-to-top of the car
  sections: [
    { name: "Engine & Transmission", score: 82, status: "Good" },
    { name: "Brakes & Suspension", score: 71, status: "Fair" },
    { name: "Electricals & Battery", score: 88, status: "Excellent" },
    { name: "Body & Paint", score: 65, status: "Fair · 4 scratches" },
    { name: "Interior & AC", score: 84, status: "Good" },
    { name: "Tyres & Wheels", score: 78, status: "Good" },
    { name: "Ownership records", score: 90, status: "Clean · 2 owners" },
    { name: "Fines & challans", score: 95, status: "₹0 pending" },
  ],

  // Key findings ranked by severity
  findings: [
    {
      severity: "high",
      title: "Front-right suspension worn",
      cost: "Estimated repair ₹4,800",
      icon: "AlertTriangle",
    },
    {
      severity: "med",
      title: "Repainted left fender",
      cost: "Cosmetic only · no structural damage",
      icon: "Paintbrush",
    },
    {
      severity: "med",
      title: "4 small scratches on body",
      cost: "Mostly on rear door · ₹2,000 polish",
      icon: "Scissors",
    },
    {
      severity: "low",
      title: "Brake pads at 30%",
      cost: "Replace in 2,000 km · ₹2,200",
      icon: "Disc",
    },
    {
      severity: "low",
      title: "1 prior accident in 2021",
      cost: "Insurance claim only · low impact",
      icon: "Car",
    },
  ],

  recommendation:
    "Negotiate to ₹4.40L citing suspension repair + scratches. If seller accepts → good buy. If insists on ₹5L → walk away.",
};

// Past reports for history screen
export const PAST_REPORTS = [
  {
    id: "CC-2026-0118",
    car: "Hyundai Creta 2020",
    date: "Today",
    score: 78,
    verdict: "Worth buying",
    color: "copper",
    live: true,
  },
  {
    id: "CC-2026-0102",
    car: "Maruti Swift 2018",
    date: "12 May",
    score: 84,
    verdict: "Worth buying",
    color: "green",
  },
  {
    id: "CC-2026-0094",
    car: "Honda City 2019",
    date: "08 May",
    score: 62,
    verdict: "Risky",
    color: "red",
  },
  {
    id: "CC-2026-0078",
    car: "Tata Nexon 2021",
    date: "30 Apr",
    score: 91,
    verdict: "Excellent",
    color: "green",
  },
];
