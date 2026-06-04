const dg = document.getElementsByClassName("dongia");
const sl = document.getElementsByClassName("soluong");
const thanht = document.getElementsByClassName("thanhtien");
let tong = 0;

for(let i = 0; i < sl.length; i++) {
    let thanhtien = Number(sl[i].innerHTML)* Number(dg[i].innerHTML);
    thanht[i].innerHTML = thanhtien;
    tong += thanhtien;
}
document.getElementById('tong').innerHTML = tong;