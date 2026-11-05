# OCODEJS Hub

Thư mục công cụ TUI/CLI. Trang tĩnh, chạy trên GitHub Pages.

## Cấu trúc
- `index.html`: giao diện, đọc dữ liệu từ `tools.json`
- `tools.json`: danh sách công cụ (nguồn dữ liệu duy nhất)
- `scripts/validate.mjs`: kiểm tra `tools.json`
- `.github/`: issue template và workflow CI/CD

## Quy trình thêm công cụ
1. Người dùng bấm **+ Gửi công cụ** (hoặc tạo Issue từ template) → Issue gắn nhãn `submission`.
2. Maintainer kiểm tra repo và lệnh cài đặt, rồi thêm một mục vào `tools.json` qua Pull Request.
3. CI (`validate.yml`) kiểm tra định dạng, id trùng, trường thiếu.
4. Merge vào `main` → `pages.yml` tự triển khai.

## Thiết lập
1. Trong `index.html`, đổi `REPO="OWNER/REPO"` thành repo của bạn.
2. Settings → Pages → Source: **GitHub Actions**.
3. Chạy thử cục bộ: `npx serve .` (mở file trực tiếp sẽ không tải được `tools.json`).

## Mục `tools.json`
```json
{"id":"my-tool","name":"my-tool","description":"...","language":"Rust","category":"Git","install":"cargo install my-tool","repo":"https://github.com/..."}
```
