const express = require("express");
const app = express();

// 현재 디렉토리의 정적 파일 제공
app.use(express.static("./"));

// 서버 실행
app.listen(5000, () => {
  console.log("서버가 http://localhost:5000 에서 실행 중입니다.");
});
