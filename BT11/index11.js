const cau_sau = 6;
const bo_sau_yeu = 3;
const bo_sau_ghet = 10;

const so_nguoi = 100;
const so_qua = 17;

let tong_bo_yeu = 0;
let tong_bo_ghet = 0;

// Tính tổng số quả chia cho nhau khi yêu nhau và khi ghét nhau
for (let i = 1; i <= cau_sau; i++) {
  tong_bo_yeu += bo_sau_yeu;
  tong_bo_ghet += bo_sau_ghet;
}

const tong_qua = tong_bo_yeu + tong_bo_ghet; // Tổng số quả
const so_qua_con_lai = so_qua - tong_qua; // Số quả còn lại chưa chia

let so_nguoi_yeu = 0;
let so_nguoi_ghet = 0;

// Tính số người yêu nhau và số người ghét nhau
for (let i = 1; i <= so_nguoi; i++) {
  if (so_qua_con_lai > 0) {
    // Nếu còn quả chưa chia, chia cho người này
    so_qua_con_lai--;
    if (i % 2 === 0) {
      so_nguoi_ghet++;
    } else {
      so_nguoi_yeu++;
    }
  } else {
    // Nếu đã hết quả chưa chia, chia đều cho mỗi người
    if (i % 2 === 0) {
      so_nguoi_ghet += tong_bo_ghet / tong_qua;
    } else {
      so_nguoi_yeu += tong_bo_yeu / tong_qua;
    }
  }
}

console.log(`Số người yêu nhau là ${so_nguoi_yeu.toFixed(0)}`);
console.log(`Số người ghét nhau là ${so_nguoi_ghet.toFixed(0)}`);
