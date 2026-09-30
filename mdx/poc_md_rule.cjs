// F-RUNNERSINKS-02 PoC — harmless runtime marker only.
// Pulled in from DATA-ONLY JSON (mdx/.markdownlint-cli2.jsonc) which contains no code.
const fs = require("fs");
const MARK = "POC-RS2J_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);
let back = "write-failed";
try {
  fs.writeFileSync("/tmp/poc_rs2_marker.txt", MARK);
  back = fs.readFileSync("/tmp/poc_rs2_marker.txt", "utf8");
} catch (e) {
  back = "readback-failed:" + String(e).slice(0, 40);
}
// Thrown at load so the runner's tool-output block echoes the marker in-band.
throw new Error("F-RUNNERSINKS-02 PoC: attacker module LOADED from data-only JSON | runtime marker "
  + MARK + " | /tmp write+readback " + back);
