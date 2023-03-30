const n = parseInt(prompt("Nhập vào một số nguyên dương n:"));

if (isNaN(n) || n < 1) {
  console.log("Số bạn vừa nhập không hợp lệ");
} else {
  console.log("Các số chẵn từ 1 đến " + n + " là:");
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }
  console.log("Các số lẻ từ 1 đến " + n + " là:");
  for (let i = 1; i <= n; i += 2) {
    console.log(i);
  }
}
