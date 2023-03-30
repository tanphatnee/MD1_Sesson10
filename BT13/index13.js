let so_cho = 0;
let so_trau_dung = 0;
let so_trau_nam = 0;
let so_trau_gia = 0;

for (let i = 0; i <= 100; i++) {
  // Số trâu đứng ăn năm, số trâu nằm ăn ba
  if (i * 5 + (100 - i) * 3 === 300) {
    so_trau_dung = i;
    so_trau_nam = 100 - i;
    break; // Kết thúc vòng lặp khi tìm ra đáp án
  }
}

for (let i = 0; i <= 100; i++) {
  // Lụm khụm trâu già, ba con một bó
  if (i % 3 === 0 && (100 - i) % 3 === 0) {
    so_trau_gia = i;
    break; // Kết thúc vòng lặp khi tìm ra đáp án
  }
}

// Tính số lượng bó cỏ
let so_bo_co = 100 / 3;

console.log(`Số chó là 1, số trâu đứng là ${so_trau_dung}, số trâu nằm là ${so_trau_nam}, số trâu già là ${so_trau_gia}`);
console.log(`Số bó cỏ là ${so_bo_co}`);
