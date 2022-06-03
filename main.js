//BÀI TẬP 1 : Tính tiền lương cho nhân viên 
/* Mô hình 3 khối :
+ Đầu Vào : Người nhân viên sẽ nhập vào số ngày làm của mình (N)
    Gỉa sử số ngày làm của nhân viên là soNgay = 30 ngày. 
    Tiền lương của 1 ngày làm là 100.000 vnđ
+ Xử Lí : 
    Công thức tính lương cho sẵn : Lương = soNgay*100.000
    Vd : số ngày làm là 20 ngày.
    => Lương = 20*100.000 = 2.000.000vnđ
+ Đầu Ra : Tiền lương của nhân viên
*/
var soNgay = 20;
var luong =  soNgay*100000 ;
console.log("Tiền lương của nhân viên là :" + luong.toLocaleString() + "vnđ"); //.toLocalString()

// BÀI TẬP 2 : Tính giá trị trung bình 
/* Mô hình 3 khối :
+ Đầu vào : Nhập vào 5 số thực ngẫu nhiên 
giả sử 5 số đó là : 
soThuc1 = 2 ; soThuc2 = 4; number3 = 6 ; number4 = 8; number5 = 10;
+ Xử lí : 
Tạo 5 giá trị số thực sau đó tính tổng của 5 số đó rồi chia cho 5
VD : 
soThuc1 = 1 ; soThuc2 = 3; number3 = 5 ; number4 = 7; number5 = 9;
trungbinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5)/5
=> trungbinh = soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5
+ Đầu ra : giá trị trung bình của 5 số thực ngẫu nhiên
 */
var soThuc1 = 2;
var soThuc2 = 4;
var soThuc3 = 6;
var soThuc4 = 8;
var soThuc5 = 10;
var trungbinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5 )/5;
console.log("Trung bình của 5 số là :" + trungbinh);

// BÀI TẬP 3 : Quy đổi tiền
 /* Mô hình 3 khối :
+ Đầu vào : 
 Gía USD hiện tại 23.500 vnđ
 Người dùng nhập vào số USD muốn đổi 
+ Xử lí : 
   Sau khi người dùng nhập vào số USD muốn đổi. 
   Số tiền VNĐ nhận được tính bằng : VND = USD*23.500
+ Đầu ra : Xuất ra số tiền sau khi quy đổi
*/
var usd = 5 ;
var vnd = usd*23500;
console.log("Số tiền sau khi quy đổi là : " + vnd.toLocaleString() + "vnđ");

// BÀI TẬP 4 : Tính diện tích và chu vi hình chữ nhật
/* Mô hình 3 khối :
+ Đầu vào : Nhập vào chiều dài (chieuDai) và chiều rộng (chieuRong) của hình chữ nhật
+ Xử lí : 
Công thức tính chu vi : chuVi = (chieuDai + chieuRong)*2
Công thức tính diện tích : dienTich = chieuDai*chieuRong
+ Đầu ra : Xuất ra chu vi và diện tích của hình chữ nhật
*/
var chieuDai = 4 ;
var chieuRong = 5 ;
var chuVi = (chieuDai+chieuRong)*2;
var dienTich = chieuDai*chieuRong;
console.log("Chu vi của hình chữ nhật là : " + chuVi +"m");
console.log("Diện tích của hình chữ nhật là :" + dienTich + "m2");

// BÀI TẬP 5 : Tính tổng 2 ký số 
/*
Mô hình 3 khối 
- Đầu vào : nhập vào 1 số bất kì có 2 chữ số tùy ý 
- Xử Lí : 
+ tách lấy hàng chục n / 10 => làm tròn số Math.floor(n / 10)
+ tách lấy hàng đơn vị n % 10 => làm tròn số Math.floor(n % 10)
sau đó tính tổng 2 con số chục + đơn vị
vd : n = 45 => 4 + 5
- Đầu Ra :tổng
*/
var n = 45;
var chuc = Math.floor(n / 10)  ;
var donvi = Math.floor(n % 10)   ;
var tong = chuc + donvi;
console.log("Tổng 2 ký số là :" + tong);