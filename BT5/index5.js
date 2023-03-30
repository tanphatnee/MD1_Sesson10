let n = parseInt(prompt("Nhập một số nguyên dương n:"));

if (!Number.isInteger(n) || n <= 0) {
  console.log("Số bạn vừa nhập không phải là một số nguyên dương hợp lệ.");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
