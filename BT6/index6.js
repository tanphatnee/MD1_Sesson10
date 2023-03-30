let n = prompt("Nhập vào một số nguyên dương:");

// Kiểm tra n có phải là số nguyên dương hợp lệ hay không
if (n > 0 && Number.isInteger(Number(n))) {
  let a = 0, b = 1;
  console.log(`Dãy số Fibonacci có ${n} phần tử là:`);
  console.log(a);
  console.log(b);
  for (let i = 2; i < n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
} else {
  console.log("Bạn đã nhập sai hoặc không phải số nguyên dương.");
}