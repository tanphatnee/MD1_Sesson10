let amount = prompt("Nhập số tiền cần rút (tối thiểu 50.000 đồng):");
let denominations = [500000, 200000, 100000, 50000];
let count = [0, 0, 0, 0];

if (amount % 50000 !== 0 || amount < 50000) {
  alert("Số tiền không hợp lệ!");
} else {
  for (let i = 0; i < denominations.length; i++) {
    count[i] = Math.floor(amount / denominations[i]);
    amount = amount % denominations[i];
  }
  alert(`Số tiền rút được:\n${count[0]} tờ 500.000 đồng\n${count[1]} tờ 200.000 đồng\n${count[2]} tờ 100.000 đồng\n${count[3]} tờ 50.000 đồng`);
}
