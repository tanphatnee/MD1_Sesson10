let n2 = +prompt("Nhập vào số n:");
let sum2 = 0;       
for (let i = 2; i < n2; i++) {
  sum2 += sum2 +  1 / (i * (i - 1));
}
alert("Tổng của dãy C là: " + sum2);