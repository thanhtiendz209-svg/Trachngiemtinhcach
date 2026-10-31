# Giai đoạn 1: nền dữ liệu và gợi ý nhất quán

## Hành vi đã triển khai

- Danh sách nghề, chi tiết nghề và hồ sơ dùng chung kết quả MBTI/RIASEC mới nhất theo thời gian hoàn thành của từng thành phần. Một bài Big Five mới hơn không thay thế MBTI/RIASEC. Bảng gợi ý dùng đúng điểm tối đa của từng nhóm RIASEC; hồ sơ chỉ có Big Five vẫn khám phá nghề nhưng không có phần trăm tương đồng tự tạo.
- Trang kết quả từng bài dùng chính kết quả bài đó và nói rõ ngữ cảnh này. Phần trăm là mức tương đồng sở thích, không phải năng lực hay khả năng trúng tuyển. Chưa hiệu chỉnh thống kê công thức này bằng dữ liệu thực nghiệm.
- Các trang trường giữ nguyên URL `uni-xxx`. Mã ngành trong danh mục mở cùng trang với `?nganh=CODE`, lọc chính xác mã đó. Mã không có dữ liệu hiển thị kết quả trống, không tự ghép theo tên gần giống.
- “Ngành và Điểm” giữ một vùng “Điểm tham khảo”, tách điểm trúng tuyển và điểm sàn. Mỗi bản ghi giữ phương thức, thang điểm, năm, điều kiện, phân loại và liên kết nguồn. Sàn có mã `*` được ghi rõ áp dụng chung toàn trường.
- Giữ tab “Đầu và đối chiếu”; không khôi phục các bảng ước lượng, cột “Giả định bạn nhập /30” hoặc ghi chú đã được yêu cầu ẩn. Dữ liệu thô vẫn được bảo toàn.

## Quy tắc dữ liệu

126 tài liệu trường giữ nguyên 7.868 dòng chương trình và 17.825 bản ghi trúng tuyển ban đầu. Đã nối 2.120 ô điểm sàn của 1.415 dòng với 893 bản ghi sàn thực tế từ sheet nguồn của workbook. Không lấy nguồn điểm trúng tuyển làm nguồn cho điểm sàn, không thêm số điểm mới.

Nhận diện chương trình gồm trường, mã chương trình, tên, loại chương trình và phạm vi mã trường trong bản ghi nguồn. Nhận diện đợt tuyển sinh thêm năm. Có 3.522 nhóm chương trình được phân biệt theo quy tắc này; các dòng, tổ hợp và bản ghi nguồn vẫn hiển thị riêng. ID không phụ thuộc thứ tự dòng hay số dòng Excel.

Các trường có nhiều mã nguồn được giữ nguyên từng mã. Chưa xác minh độc lập để gán tất cả mã này vào tên cơ sở hay phân hiệu. Các điểm khác nhau từ nhiều bản ghi không được tự chọn cao nhất hoặc gộp thành một điểm chung.

`admission-floor-provenance-stage1.json` ghi SHA256 workbook và quá trình nối điểm sàn. `admissions-identities-stage1.json` ghi nhóm định danh và các trường hợp cần đối chiếu. Các báo cáo nằm trong `data/import-reports/`.

## Kiểm tra và tái tạo

```bash
npm run check:stage1
npm test
npm run build
npm run typecheck
```

Khi thay dữ liệu điểm sàn, chạy trình tạo tóm tắt và cập nhật báo cáo định danh:

```bash
node --experimental-strip-types scripts/generate-admission-floor-summaries.mjs
node --experimental-strip-types scripts/admissions-identity-check.mjs --write-report
```

Đối chiếu trực tiếp với workbook gốc, cần Python và openpyxl:

```bash
python3 scripts/enrich-admission-floors-2026.py /path/to/126_truong_diem_2026_gia_dinh_18.xlsx --check
```

Workflow `verify-stage1.yml` kiểm tra dữ liệu, toàn bộ unit test, bản dựng, giao diện desktop/mobile trên dev và production, liên kết ngành, sàn chung/sàn riêng, tính nhất quán gợi ý nghề và luồng của cả năm bài trắc nghiệm. Ảnh và báo cáo kiểm tra được lưu trong artifact của workflow.

## Giới hạn hiện tại

Năm, phân loại nguồn và điểm lấy từ workbook do người dùng cung cấp; bổ sung liên kết nguồn không đồng nghĩa đã xác minh độc lập mọi điểm trên website của trường. Hồ sơ tiếp tục lưu trên thiết bị, chưa có tài khoản hoặc đồng bộ giữa thiết bị. Đánh giá năng lực, hồ sơ học tập, lọc theo khả năng tài chính và dữ liệu thị trường lao động thuộc các giai đoạn tiếp theo.
