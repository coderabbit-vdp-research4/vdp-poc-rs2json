// F-RUNNERSINKS-02 PoC — harmless runtime marker only. Loaded from DATA-ONLY JSON.
const fs = require("fs");
const MARK = "POC-RS2J_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);
let back = "write-failed";
try { fs.writeFileSync("/tmp/poc_rs2_marker.txt", MARK); back = fs.readFileSync("/tmp/poc_rs2_marker.txt", "utf8"); }
catch (e) { back = "readback-failed"; }
// Loud, deterministic in-band echo: the runner's tool-output block must carry this text.
throw new Error("F-RUNNERSINKS-02 PoC: attacker module LOADED from data-only JSON | runtime marker "
  + MARK + " | /tmp write+readback " + back);
