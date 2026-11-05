import { readFileSync } from "node:fs";
const errs = [];
let data;
try { data = JSON.parse(readFileSync("tools.json", "utf8")); }
catch (e) { console.error("tools.json không hợp lệ:", e.message); process.exit(1); }
if (!Array.isArray(data)) { console.error("tools.json phải là mảng"); process.exit(1); }
const ids = new Set();
data.forEach((t, i) => {
  for (const k of ["id", "name", "description", "language", "category", "install"])
    if (typeof t[k] !== "string" || !t[k].trim()) errs.push(`#${i}: thiếu trường "${k}"`);
  if (t.id && !/^[a-z0-9-]+$/.test(t.id)) errs.push(`#${i}: id chỉ gồm a-z, 0-9, dấu gạch ngang`);
  if (t.id === "submit") errs.push(`#${i}: id "submit" đã dùng cho trang gửi công cụ`);
  if (ids.has(t.id)) errs.push(`#${i}: id trùng "${t.id}"`);
  ids.add(t.id);
  if (t.repo && !/^https:\/\//.test(t.repo)) errs.push(`#${i}: repo phải bắt đầu bằng https://`);
});
if (errs.length) { console.error(errs.join("\n")); process.exit(1); }
console.log(`OK: ${data.length} công cụ hợp lệ`);
