import { withRiasecScores, RIASEC_QUESTIONS as OFFICIAL_RIASEC } from "./riasec-questions";
import type { Question } from "./types";

const scale4 = (key: string): Question["options"] => [
  { label: "Rất đúng với tôi", scores: { [key]: 3 } },
  { label: "Đúng một phần", scores: { [key]: 2 } },
  { label: "Chưa chắc", scores: { [key]: 1 } },
  { label: "Không đúng với tôi", scores: { [key]: 0 } },
];

const scale5 = (key: string, reverse = false): Question["options"] => {
  const vals = reverse ? [5, 4, 3, 2, 1] : [1, 2, 3, 4, 5];
  const labels = [
    "Hoàn toàn không",
    "Ít khi",
    "Ở giữa",
    "Khá đúng",
    "Rất đúng",
  ];
  return labels.map((label, i) => ({ label, scores: { [key]: vals[i] ?? 3 } }));
};

export const MBTI_QUESTIONS: Question[] = [
  {
    id: "m1",
    text: "Cuối tuần, cách nào giúp bạn ‘đầy pin’ hơn?",
    hint: "Không có đáp án đúng. Chọn phía gần bạn hơn.",
    options: [
      { label: "Gặp bạn bè, ra ngoài, có chuyện để nói", scores: { E: 1 } },
      { label: "Ở nhà, yên, làm việc riêng hoặc nghỉ thật sự", scores: { I: 1 } },
    ],
  },
  {
    id: "m2",
    text: "Khi bước vào một nhóm người mới, bạn thường…",
    options: [
      { label: "Bắt chuyện, giới thiệu, làm quen khá nhanh", scores: { E: 1 } },
      { label: "Quan sát trước, nói khi đã có chỗ đứng vừa phải", scores: { I: 1 } },
    ],
  },
  {
    id: "m3",
    text: "Sau một ngày gặp nhiều người, bạn thấy…",
    options: [
      { label: "Hưng phấn, muốn kể lại hoặc còn muốn gặp nữa", scores: { E: 1 } },
      { label: "Cần im lặng một lúc mới thấy người trở lại", scores: { I: 1 } },
    ],
  },
  {
    id: "m4",
    text: "Khi học hoặc làm việc, bạn thích…",
    options: [
      { label: "Thảo luận, nghĩ thành tiếng, có người để cọ xát", scores: { E: 1 } },
      { label: "Tập trung một mình rồi mới mang ý ra ngoài", scores: { I: 1 } },
    ],
  },
  {
    id: "m5",
    text: "Trong tin nhắn nhóm, bạn thường…",
    options: [
      { label: "Hay trả lời, thả ý, giữ cuộc nói không tắt", scores: { E: 1 } },
      { label: "Đọc nhiều, viết khi thật sự có điều muốn nói", scores: { I: 1 } },
    ],
  },
  {
    id: "m6",
    text: "Buổi họp kéo dài làm bạn…",
    options: [
      { label: "Ổn nếu cuộc họp có tương tác và nhịp", scores: { E: 1 } },
      { label: "Mệt vì phải ‘bật’ liên tục, muốn kết sớm", scores: { I: 1 } },
    ],
  },
  {
    id: "m7",
    text: "Bạn muốn cuối ngày hôm nay thế nào?",
    options: [
      { label: "Có kế hoạch gặp ai đó, dù ngắn", scores: { E: 1 } },
      { label: "Được ở một mình với việc mình chọn", scores: { I: 1 } },
    ],
  },
  {
    id: "m8",
    text: "Khi nghe một câu chuyện, bạn chú ý hơn đến…",
    options: [
      { label: "Chi tiết cụ thể: ai, lúc nào, chuyện gì xảy ra", scores: { S: 1 } },
      { label: "Ý nghĩa phía sau, mô típ, khả năng liên quan", scores: { N: 1 } },
    ],
  },
  {
    id: "m9",
    text: "Khi giải thích một ý, bạn hay…",
    options: [
      { label: "Lấy ví dụ thật, từng bước, sờ được", scores: { S: 1 } },
      { label: "Dùng hình ảnh, ẩn dụ, bức tranh lớn", scores: { N: 1 } },
    ],
  },
  {
    id: "m10",
    text: "Bạn tin tưởng hơn vào…",
    options: [
      { label: "Kinh nghiệm đã kiểm chứng và sự kiện rõ", scores: { S: 1 } },
      { label: "Trực giác, khả năng và mối liên hệ chưa thấy", scores: { N: 1 } },
    ],
  },
  {
    id: "m11",
    text: "Bạn thích công việc…",
    options: [
      { label: "Có quy trình, kết quả đo được, ít bất ngờ", scores: { S: 1 } },
      { label: "Có chỗ cho ý mới, thử nghiệm, đổi cách làm", scores: { N: 1 } },
    ],
  },
  {
    id: "m12",
    text: "Khi đọc, bạn bị cuốn bởi…",
    options: [
      { label: "Thông tin dùng được, hướng dẫn, sự kiện", scores: { S: 1 } },
      { label: "Ý tưởng, tương lai, tầng nghĩa, ‘nếu như’", scores: { N: 1 } },
    ],
  },
  {
    id: "m13",
    text: "Bạn mô tả một ngày đi chơi theo kiểu…",
    options: [
      { label: "Lịch trình, món ăn, chỗ ngồi, chuyện đã xảy ra", scores: { S: 1 } },
      { label: "Cảm giác tổng thể, điều chợt nghĩ ra, không khí", scores: { N: 1 } },
    ],
  },
  {
    id: "m14",
    text: "Khi học kỹ năng mới, bạn muốn…",
    options: [
      { label: "Làm theo mẫu đúng rồi tinh chỉnh", scores: { S: 1 } },
      { label: "Hiểu nguyên lý rồi tự improvises", scores: { N: 1 } },
    ],
  },
  {
    id: "m15",
    text: "Khi phải quyết một việc quan trọng, bạn ưu tiên…",
    options: [
      { label: "Phân tích đúng–sai, hiệu quả, nguyên tắc logic", scores: { T: 1 } },
      { label: "Tác động tới người, giá trị, hòa khí", scores: { F: 1 } },
    ],
  },
  {
    id: "m16",
    text: "Bạn muốn được nhớ đến như người…",
    options: [
      { label: "Công bằng, sắc sảo, đáng tin về lý lẽ", scores: { T: 1 } },
      { label: "Tử tế, thấu, đứng về phía con người", scores: { F: 1 } },
    ],
  },
  {
    id: "m17",
    text: "Khi bạn bè kể chuyện buồn, bạn thường…",
    options: [
      { label: "Góp cách nhìn, gợi hướng xử lý", scores: { T: 1 } },
      { label: "Ở bên, xác nhận cảm xúc trước đã", scores: { F: 1 } },
    ],
  },
  {
    id: "m18",
    text: "Trong tranh luận, bạn…",
    options: [
      { label: "Tách ý khỏi người, chơi với lập luận", scores: { T: 1 } },
      { label: "Để ý người kia có bị tổn không, rồi mới nói", scores: { F: 1 } },
    ],
  },
  {
    id: "m19",
    text: "Phản hồi của bạn thường…",
    options: [
      { label: "Thẳng, đi thẳng vào chỗ cần sửa", scores: { T: 1 } },
      { label: "Bọc lại cho người kia còn muốn nghe", scores: { F: 1 } },
    ],
  },
  {
    id: "m20",
    text: "Điều khiến bạn ‘ưng’ một quyết định…",
    options: [
      { label: "Nó hợp lý, đứng được khi bị hỏi ‘vì sao’", scores: { T: 1 } },
      { label: "Nó không làm mình phản bội người hoặc giá trị", scores: { F: 1 } },
    ],
  },
  {
    id: "m21",
    text: "Khi góp ý đồng đội, bạn sợ hơn nếu…",
    options: [
      { label: "Nói vòng vo đến mức việc không được sửa", scores: { T: 1 } },
      { label: "Nói khiến người kia thấy bị từ chối", scores: { F: 1 } },
    ],
  },
  {
    id: "m22",
    text: "Lịch trình tuần của bạn thường…",
    options: [
      { label: "Có khung rõ, việc được xếp chỗ", scores: { J: 1 } },
      { label: "Để trống một phần, quyết theo mạch ngày", scores: { P: 1 } },
    ],
  },
  {
    id: "m23",
    text: "Trước hạn nộp, bạn thường…",
    options: [
      { label: "Chia nhỏ và làm sớm cho chắc", scores: { J: 1 } },
      { label: "Tăng tốc gần hạn, vẫn về đích", scores: { P: 1 } },
    ],
  },
  {
    id: "m24",
    text: "Không gian làm việc gọn giúp bạn…",
    options: [
      { label: "Yên tâm, nghĩ được việc tiếp theo", scores: { J: 1 } },
      { label: "Cũng thích, nhưng ‘hơi loạn’ vẫn làm được", scores: { P: 1 } },
    ],
  },
  {
    id: "m25",
    text: "Khi đi chơi, bạn thích…",
    options: [
      { label: "Có lịch: chỗ nào, lúc nào, dự phòng", scores: { J: 1 } },
      { label: "Có hướng, còn lại để ngày tự mở", scores: { P: 1 } },
    ],
  },
  {
    id: "m26",
    text: "Thay đổi kế hoạch đột ngột khiến bạn…",
    options: [
      { label: "Khó chịu, cần chỉnh lại cả chuỗi việc", scores: { J: 1 } },
      { label: "Ổn, coi như một nhánh mới", scores: { P: 1 } },
    ],
  },
  {
    id: "m27",
    text: "Bạn thấy thoải mái hơn khi…",
    options: [
      { label: "Việc đã chốt, hộp đã đóng", scores: { J: 1 } },
      { label: "Còn cửa để đổi nếu có thông tin mới", scores: { P: 1 } },
    ],
  },
  {
    id: "m28",
    text: "Danh sách việc của bạn…",
    options: [
      { label: "Được tick đều, thấy tiến độ là đã yên", scores: { J: 1 } },
      { label: "Có, nhưng sống với ưu tiên của lúc này", scores: { P: 1 } },
    ],
  },
  {
    id: "m29",
    text: "Cuộc họp đông người làm bạn…",
    options: [
      { label: "Tỉnh hơn, muốn góp ý hoặc hỏi", scores: { E: 1 } },
      { label: "Tốn pin, muốn về chỗ yên để nghĩ", scores: { I: 1 } },
    ],
  },
  {
    id: "m30",
    text: "Khi có tin vui, bạn thường…",
    options: [
      { label: "Kể ngay cho ai đó", scores: { E: 1 } },
      { label: "Ngồi với nó một lúc rồi mới chia", scores: { I: 1 } },
    ],
  },
  {
    id: "m31",
    text: "Bạn chọn khóa học vì…",
    options: [
      { label: "Kỹ năng dùng được, giáo viên có case thật", scores: { S: 1 } },
      { label: "Nó mở một cách nhìn mới, dù chưa rõ ‘dùng ngay’", scores: { N: 1 } },
    ],
  },
  {
    id: "m32",
    text: "Khi một ý tưởng hay xuất hiện, bạn…",
    options: [
      { label: "Hỏi ngay: làm thế nào, mất bao lâu, rủi ro gì", scores: { S: 1 } },
      { label: "Để nó nở, nối với ý khác, vẽ bức tranh lớn", scores: { N: 1 } },
    ],
  },
  {
    id: "m33",
    text: "Một quyết định ‘đúng người’ nhưng kém hiệu quả khiến bạn…",
    options: [
      { label: "Khó chịu — việc phải chạy đã", scores: { T: 1 } },
      { label: "Chấp nhận được nếu không ai bị bỏ lại", scores: { F: 1 } },
    ],
  },
  {
    id: "m34",
    text: "Khi nhận góp ý thẳng, bạn cần…",
    options: [
      { label: "Nội dung đúng, tông giọng đứng sau", scores: { T: 1 } },
      { label: "Cảm thấy người kia vẫn đứng về phía mình", scores: { F: 1 } },
    ],
  },
  {
    id: "m35",
    text: "Cuối ngày, việc chưa tick làm bạn…",
    options: [
      { label: "Móc trong đầu, muốn khép hộp", scores: { J: 1 } },
      { label: "Để đó, mai còn cửa", scores: { P: 1 } },
    ],
  },
  {
    id: "m36",
    text: "Bạn thích dự án kiểu…",
    options: [
      { label: "Phạm vi rõ, mốc rõ, biết lúc nào là xong", scores: { J: 1 } },
      { label: "Mở, được đổi khi học được điều mới", scores: { P: 1 } },
    ],
  },
  {
    id: "m37",
    text: "Ở quán cà phê đông, bạn…",
    options: [
      { label: "Dễ bắt chuyện hoặc hòa vào ồn", scores: { E: 1 } },
      { label: "Muốn góc khuất, tai nghe, ít bị kéo", scores: { I: 1 } },
    ],
  },
  {
    id: "m38",
    text: "Bạn tin một hướng đi khi…",
    options: [
      { label: "Đã có người làm được, có số liệu", scores: { S: 1 } },
      { label: "Nhìn thấy khả năng, dù đường còn mờ", scores: { N: 1 } },
    ],
  },
  {
    id: "m39",
    text: "Trong nhóm, bạn hay được nhờ…",
    options: [
      { label: "Phân tích, chốt, chỉ chỗ lệch", scores: { T: 1 } },
      { label: "Giữ khí, dàn hòa, để ý ai đang mệt", scores: { F: 1 } },
    ],
  },
  {
    id: "m40",
    text: "Kỳ nghỉ không kế hoạch sẵn khiến bạn…",
    options: [
      { label: "Hơi đứng hình, muốn có khung tối thiểu", scores: { J: 1 } },
      { label: "Thích, coi như được thở", scores: { P: 1 } },
    ],
  },
];

export const RIASEC_QUESTIONS: Question[] = withRiasecScores(OFFICIAL_RIASEC);

export const BIGFIVE_QUESTIONS: Question[] = [
  { id: "b1", text: "Tôi thích ý tưởng lạ, góc nhìn mới, chuyện chưa ai kể.", options: scale5("O") },
  { id: "b2", text: "Tôi thấy nghệ thuật, sách, hoặc khái niệm trừu tượng nuôi mình.", options: scale5("O") },
  { id: "b3", text: "Tôi thích giữ thói quen cũ, ít muốn đổi cách làm.", options: scale5("O", true) },
  { id: "b4", text: "Tôi tò mò về ‘vì sao’ hơn là chỉ ‘làm sao cho xong’.", options: scale5("O") },
  { id: "b5", text: "Tôi hay lên kế hoạch và làm đúng hạn.", options: scale5("C") },
  { id: "b6", text: "Bàn làm việc và file của tôi thường có chỗ cho từng thứ.", options: scale5("C") },
  { id: "b7", text: "Tôi dễ bắt đầu rồi bỏ dở khi việc không còn thú.", options: scale5("C", true) },
  { id: "b8", text: "Tôi giữ lời hứa, kể cả việc nhỏ.", options: scale5("C") },
  { id: "b9", text: "Tôi lấy năng lượng từ người khác và cuộc nói chuyện.", options: scale5("E") },
  { id: "b10", text: "Ở nhóm mới tôi thường lên tiếng khá sớm.", options: scale5("E") },
  { id: "b11", text: "Tôi thích ở rìa, quan sát, không cần là trung tâm.", options: scale5("E", true) },
  { id: "b12", text: "Tôi chủ động rủ người đi làm hoặc đi chơi.", options: scale5("E") },
  { id: "b13", text: "Tôi hay để ý cảm xúc người khác trước khi nói.", options: scale5("A") },
  { id: "b14", text: "Tôi tin người ta có thiện ý, trừ khi bị chứng minh ngược.", options: scale5("A") },
  { id: "b15", text: "Tôi thẳng và có thể bị thấy là cứng, miễn là đúng việc.", options: scale5("A", true) },
  { id: "b16", text: "Tôi sẵn sàng nhường một phần ý mình để giữ quan hệ.", options: scale5("A") },
  { id: "b17", text: "Tôi hay lo trước những việc chưa xảy ra.", options: scale5("N") },
  { id: "b18", text: "Khi căng, tôi cần thời gian mới lấy lại được nhịp.", options: scale5("N") },
  { id: "b19", text: "Tôi vẫn nghĩ được việc khi áp lực tăng.", options: scale5("N", true) },
  { id: "b20", text: "Tâm trạng tôi đổi khá rõ trong ngày.", options: scale5("N") },
  { id: "b21", text: "Tôi hay thử món, nơi, cách làm chưa quen.", options: scale5("O") },
  { id: "b22", text: "Tôi hoàn tất việc nhàm nếu đã hứa.", options: scale5("C") },
  { id: "b23", text: "Sau một buổi đông người tôi thường còn muốn gặp tiếp.", options: scale5("E") },
  { id: "b24", text: "Tôi tránh tranh cãi dù nghĩ mình đúng, nếu sợ mất hòa khí.", options: scale5("A") },
  { id: "b25", text: "Một lời chê có thể ở lại trong đầu tôi khá lâu.", options: scale5("N") },
];

export const INTEREST_QUESTIONS: Question[] = [
  { id: "i1", text: "Một ngày lý tưởng có nhiều thời gian…", options: [
    { label: "Làm ra hoặc sửa một thứ cụ thể", scores: { R: 2 } },
    { label: "Đọc, phân tích, hiểu một vấn đề", scores: { I: 2 } },
    { label: "Vẽ, viết, dựng, bày biện", scores: { A: 2 } },
    { label: "Nói chuyện, hỗ trợ, dạy ai đó", scores: { S: 2 } },
  ]},
  { id: "i2", text: "Bạn muốn được khen vì…", options: [
    { label: "Tay nghề chắc, việc chạy", scores: { R: 2 } },
    { label: "Lời giải sắc", scores: { I: 2 } },
    { label: "Sản phẩm có hồn", scores: { A: 2 } },
    { label: "Người khác nhờ bạn mà ổn hơn", scores: { S: 2 } },
  ]},
  { id: "i3", text: "Môn học nào kéo bạn ngồi lại?", options: [
    { label: "Thí nghiệm, máy, kỹ thuật", scores: { R: 2, I: 1 } },
    { label: "Toán, logic, nghiên cứu", scores: { I: 2 } },
    { label: "Văn, nghệ thuật, thiết kế", scores: { A: 2 } },
    { label: "Tâm lý, giáo dục, xã hội", scores: { S: 2 } },
  ]},
  { id: "i4", text: "Trong dự án nhóm, bạn tình nguyện…", options: [
    { label: "Làm phần kỹ thuật, hiện thực", scores: { R: 2, C: 1 } },
    { label: "Nghiên cứu, góp khung", scores: { I: 2 } },
    { label: "Hình ảnh, câu chuyện, trải nghiệm", scores: { A: 2 } },
    { label: "Điều phối người, giữ khí thế", scores: { E: 2, S: 1 } },
  ]},
  { id: "i5", text: "Bạn ngại hơn với kiểu việc…", options: [
    { label: "Ngồi im với giấy tờ lặp lại", scores: { A: 1, E: 1, R: -1 } },
    { label: "Nói trước đám đông không chuẩn bị", scores: { I: 1, C: 1 } },
    { label: "Không có khung, không biết ‘xong’ là gì", scores: { C: 2 } },
    { label: "Làm việc không gặp ai cả tuần", scores: { S: 2, E: 1 } },
  ]},
  { id: "i6", text: "Nếu được thử nghề 1 tuần, bạn chọn…", options: [
    { label: "Xưởng, lab, hiện trường", scores: { R: 2 } },
    { label: "Phòng nghiên cứu hoặc phân tích", scores: { I: 2 } },
    { label: "Studio sáng tạo", scores: { A: 2 } },
    { label: "Lớp học, phòng khám, cộng đồng", scores: { S: 2 } },
  ]},
  { id: "i7", text: "Tiền và danh có ý nghĩa khi…", options: [
    { label: "Đi cùng tay nghề thật", scores: { R: 1, C: 1 } },
    { label: "Đi cùng việc mình hiểu sâu", scores: { I: 2 } },
    { label: "Đi cùng tự do tạo", scores: { A: 2 } },
    { label: "Đi cùng ảnh hưởng tới người khác", scores: { E: 1, S: 1 } },
  ]},
  { id: "i8", text: "Bạn thích bảng việc có…", options: [
    { label: "Việc tay và việc đầu xen nhau", scores: { R: 2 } },
    { label: "Một bài toán lớn để cắn", scores: { I: 2 } },
    { label: "Một blank page", scores: { A: 2 } },
    { label: "Người cần mình hôm nay", scores: { S: 2 } },
  ]},
  { id: "i9", text: "Bạn muốn tuần làm việc nghiêng về…", options: [
    { label: "Mục tiêu, cuộc họp chốt, tiến độ", scores: { E: 2 } },
    { label: "Hệ thống, file, quy trình êm", scores: { C: 2 } },
    { label: "Khám phá, đọc, thí nghiệm", scores: { I: 2 } },
    { label: "Làm ra sản phẩm nhìn thấy", scores: { R: 1, A: 1 } },
  ]},
  { id: "i10", text: "Khi xem người khác thành công, bạn ngưỡng…", options: [
    { label: "Người dựng được thứ chắc", scores: { R: 2 } },
    { label: "Người hiểu thứ khó", scores: { I: 2 } },
    { label: "Người tạo được giọng riêng", scores: { A: 2 } },
    { label: "Người kéo được một nhóm đi", scores: { E: 2 } },
  ]},
  { id: "i11", text: "Công cụ nào khiến bạn thấy ‘đây là chỗ của mình’?", options: [
    { label: "Máy, kit, bản vẽ kỹ thuật", scores: { R: 2 } },
    { label: "Bảng, code, giấy nghiên cứu", scores: { I: 2 } },
    { label: "Canvas, camera, soạn thảo", scores: { A: 2 } },
    { label: "Lịch nhóm, inbox người cần mình", scores: { S: 1, C: 1 } },
  ]},
  { id: "i12", text: "Bạn chịu được áp lực kiểu…", options: [
    { label: "Deadline sản phẩm phải chạy", scores: { R: 1, C: 1 } },
    { label: "Bài toán chưa có đáp", scores: { I: 2 } },
    { label: "Trình diễn ý tưởng trước người lạ", scores: { E: 1, A: 1 } },
    { label: "Người đang cần mình ngay", scores: { S: 2 } },
  ]},
  { id: "i13", text: "Môi trường lý tưởng có…", options: [
    { label: "Dụng cụ tốt, ít họp", scores: { R: 2, I: 1 } },
    { label: "Tự do lịch, được đào sâu", scores: { I: 1, A: 1 } },
    { label: "Đồng đội ấm, sứ mệnh rõ", scores: { S: 2 } },
    { label: "Mục tiêu đo được, quyền quyết", scores: { E: 2, C: 1 } },
  ]},
  { id: "i14", text: "Bạn muốn 5 năm nữa mình…", options: [
    { label: "Thành thạo một nghề tay", scores: { R: 2 } },
    { label: "Là người người ta hỏi khi việc khó", scores: { I: 2 } },
    { label: "Có portfolio đúng giọng mình", scores: { A: 2 } },
    { label: "Dẫn được một nhóm hoặc một hướng", scores: { E: 2 } },
  ]},
  { id: "i15", text: "Việc nhàm vẫn làm được nếu…", options: [
    { label: "Nó là phần của hệ thống mình giữ", scores: { C: 2 } },
    { label: "Nó phục vụ người mình quan tâm", scores: { S: 2 } },
    { label: "Nó dẫn tới sản phẩm mình tin", scores: { A: 1, R: 1 } },
    { label: "Nó nằm trên đường tới mục tiêu lớn", scores: { E: 2 } },
  ]},
  { id: "i16", text: "Câu nào gần bạn hơn?", options: [
    { label: "Tôi muốn hiểu rồi mới tin.", scores: { I: 2 } },
    { label: "Tôi muốn làm ra rồi mới nói.", scores: { R: 1, A: 1 } },
    { label: "Tôi muốn người ổn rồi việc mới tính.", scores: { S: 2 } },
    { label: "Tôi muốn việc chạy, người theo kịp.", scores: { E: 1, C: 1 } },
  ]},
  { id: "i17", text: "Bạn chọn intern vì…", options: [
    { label: "Được sờ việc thật, dụng cụ thật", scores: { R: 2 } },
    { label: "Được hỏi, đọc, phân tích", scores: { I: 2 } },
    { label: "Được làm sản phẩm có giọng", scores: { A: 2 } },
    { label: "Được gặp người và hỗ trợ họ", scores: { S: 2 } },
  ]},
  { id: "i18", text: "Deadline gấp, bạn tình nguyện…", options: [
    { label: "Chốt hướng, phân việc, giữ nhịp", scores: { E: 2 } },
    { label: "Rà file, checklist, không sót", scores: { C: 2 } },
    { label: "Làm phần kỹ thuật cho xong", scores: { R: 2 } },
    { label: "Giữ khí nhóm, kéo người đang kiệt", scores: { S: 2 } },
  ]},
  { id: "i19", text: "Bạn muốn buổi sáng bắt đầu bằng…", options: [
    { label: "Một việc tay hoặc hiện trường", scores: { R: 2 } },
    { label: "Một câu hỏi để cắn", scores: { I: 2 } },
    { label: "Một trang trắng hoặc moodboard", scores: { A: 2 } },
    { label: "Một cuộc họp chốt ưu tiên", scores: { E: 1, C: 1 } },
  ]},
  { id: "i20", text: "Điều khiến bạn ở lại với một nghề lâu…", options: [
    { label: "Tay nghề càng chắc", scores: { R: 2, C: 1 } },
    { label: "Mãi còn thứ để hiểu", scores: { I: 2 } },
    { label: "Còn chỗ cho giọng mình", scores: { A: 2 } },
    { label: "Còn người cần mình", scores: { S: 2 } },
  ]},
];

export const COMBINED_QUESTIONS: Question[] = [
  {
    id: "c1",
    text: "Năng lượng của bạn đầy hơn khi…",
    options: [
      { label: "Có người, có chuyện, có nhịp chung", scores: { E: 1, S: 1 } },
      { label: "Có khoảng lặng để nghĩ và thở", scores: { I: 1 } },
    ],
  },
  {
    id: "c2",
    text: "Bạn tiếp nhận thông tin theo kiểu…",
    options: [
      { label: "Sự kiện, chi tiết, cái đang có", scores: { S: 1, R: 1 } },
      { label: "Khả năng, mô típ, bức tranh lớn", scores: { N: 1, I: 1 } },
    ],
  },
  {
    id: "c3",
    text: "Khi chốt một việc nhóm, bạn nghiêng…",
    options: [
      { label: "Đúng nguyên tắc, ra kết quả", scores: { T: 1, E: 1 } },
      { label: "Người ổn, giá trị không bị rạn", scores: { F: 1, S: 1 } },
    ],
  },
  {
    id: "c4",
    text: "Tuần làm việc của bạn đẹp hơn khi…",
    options: [
      { label: "Khung rõ, hộp được đóng", scores: { J: 1, C: 1 } },
      { label: "Còn cửa đổi nếu có tín hiệu mới", scores: { P: 1, A: 1 } },
    ],
  },
  {
    id: "c5",
    text: "Bạn muốn ngày mai chủ yếu…",
    options: [
      { label: "Làm ra thứ sờ được", scores: { rR: 2 } },
      { label: "Hiểu một vấn đề đến đáy", scores: { rI: 2 } },
      { label: "Tạo một thứ có giọng", scores: { rA: 2 } },
      { label: "Giúp ai đó tiến một bước", scores: { rS: 2 } },
    ],
  },
  {
    id: "c6",
    text: "Trong họp, bạn hay là người…",
    options: [
      { label: "Nói sớm, đẩy việc tới chốt", scores: { E: 1, rE: 1 } },
      { label: "Nghe, rồi góp một nhát đúng chỗ", scores: { I: 1 } },
    ],
  },
  {
    id: "c7",
    text: "Bạn học nhanh nhất khi…",
    options: [
      { label: "Làm theo mẫu, luyện, sửa", scores: { S: 1, R: 1 } },
      { label: "Nắm nguyên lý, tự suy", scores: { N: 1, I: 1 } },
    ],
  },
  {
    id: "c8",
    text: "Phản hồi bạn muốn nhận…",
    options: [
      { label: "Thẳng, chỉ chỗ sai, tôn trọng lý lẽ", scores: { T: 1 } },
      { label: "Có ngữ cảnh, không làm mình thấy bị loại", scores: { F: 1 } },
    ],
  },
  {
    id: "c9",
    text: "Deadline với bạn là…",
    options: [
      { label: "Mốc để chia việc từ sớm", scores: { J: 1, C: 1 } },
      { label: "Áp lực hữu ích gần giờ G", scores: { P: 1 } },
    ],
  },
  {
    id: "c10",
    text: "Bạn muốn ảnh hưởng tới hướng đi của nhóm.",
    options: scale4("rE"),
  },
  {
    id: "c11",
    text: "Bạn muốn hệ thống, file, quy trình chạy êm.",
    options: scale4("rC"),
  },
  {
    id: "c12",
    text: "Bạn thích tự do tạo hơn là làm đúng khuôn.",
    options: scale4("rA"),
  },
  {
    id: "c13",
    text: "Cuối tuần lý tưởng nghiêng về…",
    options: [
      { label: "Người và chuyện", scores: { E: 1, S: 1 } },
      { label: "Một mình với thứ mình chọn", scores: { I: 1 } },
    ],
  },
  {
    id: "c14",
    text: "Khi kể chuyện, bạn bắt đầu từ…",
    options: [
      { label: "Chuyện đã xảy ra, thứ tự thời gian", scores: { S: 1 } },
      { label: "Điều bạn thấy phía sau chuyện đó", scores: { N: 1 } },
    ],
  },
  {
    id: "c15",
    text: "Quyết định khó được bạn ‘chốt trong bụng’ khi…",
    options: [
      { label: "Nó chịu được câu hỏi ‘vì sao’", scores: { T: 1 } },
      { label: "Nó không phản bội người mình quý", scores: { F: 1 } },
    ],
  },
  {
    id: "c16",
    text: "Kế hoạch bị đổi đột ngột…",
    options: [
      { label: "Làm bạn phải dựng lại cả chuỗi", scores: { J: 1 } },
      { label: "Là một nhánh có thể hay", scores: { P: 1 } },
    ],
  },
  {
    id: "c17",
    text: "Bạn thích tháo lắp, sửa, làm ra thứ cụ thể.",
    options: scale4("rR"),
  },
  {
    id: "c18",
    text: "Bạn thích đào một câu hỏi đến khi ra cơ chế.",
    options: scale4("rI"),
  },
  {
    id: "c19",
    text: "Bạn thấy có ích khi người khác nhờ mình mà ổn hơn.",
    options: scale4("rS"),
  },
  {
    id: "c20",
    text: "Bạn muốn nghề cho phép vừa làm vừa còn là mình.",
    options: [
      { label: "Rất đúng", scores: { rA: 2, F: 1 } },
      { label: "Đúng nếu việc vẫn ra kết quả", scores: { rE: 1, T: 1 } },
      { label: "Mình thích rõ vai hơn là ‘là mình’", scores: { rC: 2, J: 1 } },
      { label: "Chưa chắc", scores: { P: 1 } },
    ],
  },
  {
    id: "c21",
    text: "Bạn lấy pin từ…",
    options: [
      { label: "Người, chuyện, phòng đông vừa phải", scores: { E: 1, rS: 1 } },
      { label: "Im, đọc, làm một mình", scores: { I: 1, rI: 1 } },
    ],
  },
  {
    id: "c22",
    text: "Khi chọn việc, bạn tin hơn vào…",
    options: [
      { label: "Kinh nghiệm, số, người đã làm được", scores: { S: 1, rR: 1 } },
      { label: "Khả năng, trực giác, bức tranh lớn", scores: { N: 1, rA: 1 } },
    ],
  },
  {
    id: "c23",
    text: "Nhóm đang đứng hình, bạn thường…",
    options: [
      { label: "Đứng ra chốt một hướng", scores: { E: 1, rE: 2 } },
      { label: "Rà lại việc, chia nhỏ, giữ nhịp", scores: { J: 1, rC: 2 } },
    ],
  },
  {
    id: "c24",
    text: "Một tuần lý tưởng có nhiều…",
    options: [
      { label: "Việc tay hoặc hiện trường", scores: { rR: 2, S: 1 } },
      { label: "Câu hỏi để đào", scores: { rI: 2, N: 1 } },
      { label: "Chỗ để tạo", scores: { rA: 2, P: 1 } },
      { label: "Người để đồng hành", scores: { rS: 2, F: 1 } },
    ],
  },
];

export function questionsFor(quizId: string): Question[] {
  switch (quizId) {
    case "mbti":
      return MBTI_QUESTIONS;
    case "riasec":
      return RIASEC_QUESTIONS;
    case "bigfive":
      return BIGFIVE_QUESTIONS;
    case "interest":
      return INTEREST_QUESTIONS;
    case "combined":
      return COMBINED_QUESTIONS;
    default:
      return [];
  }
}
