let n = parseInt(prompt("Nhập một số nguyên dương n:"));

if (!Number.isInteger(n) || n <= 0) {
  console.log("Số bạn vừa nhập không phải là một số nguyên dương hợp lệ.");
} else {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += i / (i + 1);
  }
  console.log(`Tổng của biểu thức A là: ${sum.toFixed(2)}`);
}
