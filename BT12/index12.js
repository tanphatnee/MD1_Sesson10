let so_ga = 0;
let so_cho = 0;

for (let i = 0; i <= 36; i++) {
  // i con gà, 36 - i con chó
  if ((i * 2) + ((36 - i) * 4) === 100) {
    // Tổng số chân bằng 100
    so_ga = i;
    so_cho = 36 - i;
    break; // Kết thúc vòng lặp khi tìm ra đáp án
  }
}

console.log(`Số gà là ${so_ga}, số chó là ${so_cho}`);
