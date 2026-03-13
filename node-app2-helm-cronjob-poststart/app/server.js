const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "App is working",
        time: new Date(),
    });
});

/* ---------------- STARTUP ---------------- */

let started = false;

// Simulate slow startup (e.g., DB connection, migrations)
setTimeout(() => {
    started = true;
    console.log("🚀 Application startup completed");
}, 20000); // 20 seconds startup delay

/* ---------------- READINESS ---------------- */

let ready = true;

app.get("/ready", (req, res) => {
    if (!ready) {
        return res.status(500).json({ status: "not ready" });
    }
    res.json({ status: "ready" });
});

app.post("/not-ready", (req, res) => {
    ready = false;
    res.send("Readiness disabled");
});

app.post("/ready-on", (req, res) => {
    ready = true;
    res.send("Readiness enabled");
});

/* ---------------- LIVENESS ---------------- */

let healthy = true;

app.get("/health", (req, res) => {
    if (!healthy) {
        return res.status(500).send("unhealthy");
    }
    res.json({ status: "ok" });
});

app.post("/break", (req, res) => {
    healthy = false;
    res.send("Liveness broken");
});

/* ---------------- SHUTDOWN ---------------- */

process.on("SIGTERM", () => {
    console.log("🛑 SIGTERM received. Pod is shutting down...");
    setTimeout(() => {
        console.log("✅ Shutdown complete");
        process.exit(0);
    }, 4000);
});

/* ---------------- START ---------------- */

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Web app running on port ${PORT}`);
});