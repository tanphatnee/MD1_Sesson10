// Nhập số nguyên dương n từ người dùng
const n = prompt("Nhập vào số nguyên dương n:");

// Kiểm tra số nguyên dương hợp lệ
if (n > 0 && Number.isInteger(+n)) {
  // Vẽ tam giác vuông 1
  console.log("Tam giác vuông 1:");
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }

  // Vẽ tam giác vuông 2
  console.log("\nTam giác vuông 2:");
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }

  // Vẽ tam giác vuông 3
  console.log("\nTam giác vuông 3:");
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }

  // Vẽ tam giác vuông 4
  console.log("\nTam giác vuông 4:");
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = n; j >= i; j--) {
      row += j + " ";       
    }
    console.log(row);
  }
} else {
  console.log("Số n không hợp lệ.");
}
