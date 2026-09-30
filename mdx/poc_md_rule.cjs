// F-RUNNERSINKS-02 PoC — harmless runtime marker only.
// Loaded from DATA-ONLY JSON (mdx/.markdownlint-cli2.json) which contains no executable code.
const fs = require("fs");
const MARK = "POC-RS2J_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);
let back = "write-failed";
try {
  fs.writeFileSync("/tmp/poc_rs2_marker.txt", MARK);
  back = fs.readFileSync("/tmp/poc_rs2_marker.txt", "utf8");
} catch (e) {
  back = "readback-failed:" + String(e).slice(0, 40);
}
module.exports = [
  {
    names: ["POCRS2CanaryRule"],
    description: "PoC canary rule (runtime-generated marker)",
    tags: ["poc-rs2"],
    parser: "markdownit",
    function: function (params, onError) {
      onError({
        lineNumber: 1,
        column: 1,
        ruleNames: ["POCRS2CanaryRule", "POCRS2CanaryRule"],
        ruleDescription: "PoC canary rule",
        message: "F-RUNNERSINKS-02 PoC runtime marker " + MARK,
        detail: "/tmp write+readback " + back,
      });
    },
  },
];
