// Investor pitch content — shown in Pitch screen.
// Mesa Raj Kumar is listed as founder at the bottom.

export const PITCH = {
  problem: {
    headline: "80% of used-car buyers in India get cheated.",
    detail: "Average loss: ₹40K–₹80K per deal. No trust layer for peer-to-peer sales.",
  },
  market: {
    size: "₹4,00,000 Cr",
    detail: "India used-car market · 18% YoY · 5M+ sales/year",
  },
  solution: {
    title: "Independent inspection layer",
    detail: "We do not sell cars. We just verify them. Zero conflict of interest.",
  },
  revenue: [
    { name: "Inspection fees", basis: "₹899/job × 50K/mo", value: "₹4.5 Cr/mo" },
    { name: "Store partnerships", basis: "₹100 referral", value: "₹1.8 Cr/mo" },
    { name: "Insurance affiliate", basis: "₹2K per policy", value: "₹1.4 Cr/mo" },
    { name: "Escrow service", basis: "0.21% of transactions", value: "₹2.1 Cr/mo" },
    { name: "Data API for dealers", basis: "B2B insights", value: "₹2.6 Cr/mo" },
  ],
  totalMRR: "₹12.4 Cr/month",
  totalARR: "₹149 Cr ARR · 30% net margins",
  moats: [
    { num: "01", title: "Independent stance", detail: "Cars24/Spinny sell — we verify" },
    { num: "02", title: "Trust score moat", detail: "Users invest reputation here" },
    { num: "03", title: "Money-back guarantee", detail: "No competitor offers this" },
    { num: "04", title: "Data flywheel", detail: "Every report improves pricing AI" },
  ],
  founder: {
    name: "Mesa Raj Kumar",
    tagline: "Founding the trust layer for India used-car market",
  },
};
