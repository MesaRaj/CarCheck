// Single import point for all app data
export { MECHANICS } from "./mechanics.js";
export { STORES, LOCATIONS, DEFAULT_LOCATION } from "./stores.js";
export { NOTIFICATIONS } from "./notifications.js";
export { REPORT, PAST_REPORTS } from "./report.js";
export { VIN_REPORT } from "./vinReport.js";
export { PITCH } from "./pitch.js";

// User profile (constant for demo)
export const USER = {
  name: "Arjun Reddy",
  initials: "AR",
  email: "arjun.reddy@gmail.com",
  mobile: "9876543210",
  trustScore: 87,
};

// Demo OTP codes — what auto-fills in 3 seconds
export const EMAIL_OTP = "482956";
export const PHONE_OTP = "874216";
