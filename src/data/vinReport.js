// Free VIN history report — government records from VAHAN, NCRB, etc.
export const VIN_REPORT = {
  vin: "MA3FAEFKS00123456",
  car: "Hyundai Creta SX 1.6",
  year: "2020",
  fuel: "Petrol",
  reg: "TS09 EZ 4421",

  // Summary status indicators
  summary: {
    status: { label: "Clean", color: "green" },
    owners: { label: "2 prev", color: "ink" },
    accidents: { label: "1 claim", color: "amber" },
    theft: { label: "Not flagged", color: "green" },
  },

  // Timeline of events
  timeline: [
    {
      year: "2020",
      title: "First registered",
      detail: "Hyundai Motor, Chennai",
      color: "green",
    },
    {
      year: "2021",
      title: "Insurance claim",
      detail: "Front bumper · ₹28,400",
      color: "amber",
    },
    {
      year: "2022",
      title: "Ownership transfer",
      detail: "Owner 1 → Owner 2",
      color: "muted",
    },
    {
      year: "2025",
      title: "FASTag active",
      detail: "All tolls cleared",
      color: "green",
    },
  ],
};
