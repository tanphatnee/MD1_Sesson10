// Lấy giá trị n từ người dùng
let n = prompt("Nhập vào một số nguyên dương:");

// Kiểm tra tính hợp lệ của n
if (n <= 0 || isNaN(n)) {
  console.log("Số bạn vừa nhập không hợp lệ!");
} else {
  // Kiểm tra tính nguyên tố của n
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  // In kết quả
  if (isPrime) {
    console.log(n + " là số nguyên tố");
  } else {
    console.log(n + " không phải là số nguyên tố");
  }
}
