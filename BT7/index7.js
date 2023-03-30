let n = parseInt(prompt("Nhập một số nguyên dương n:"));

if (!Number.isInteger(n) || n <= 0) {
  console.log("Số bạn vừa nhập không phải là một số nguyên dương hợp lệ.");
} else {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(`${i} là số chẵn`);
    } else {
      console.log(`${i} là số lẻ`);
    }
  }
}
