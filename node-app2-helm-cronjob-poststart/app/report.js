/**
 * This script is executed by the Kubernetes CronJob
 * It runs, does work, and exits
 */

console.log("📊 Report job started");
console.log("APP_ENV:", process.env.APP_ENV);
console.log("DB_USER:", process.env.DB_USER);

// Simulate some work
setTimeout(() => {
    console.log("✅ Report generated successfully");
    console.log("🕒 Finished at:", new Date().toISOString());
    process.exit(0);
}, 2000);