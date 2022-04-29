function xacnhan(){
	var passad='25112002';
	var pass= prompt("XÁC NHẬN: Sử dụng tính năng với tư cách là Quản trị viên.\nNhập mật mã quản trị trước khi truy cập");
	if(pass==passad){
		a = document.getElementById("admin");
		a.setAttribute("href","file:///F:/CongNgheWeb/%C4%90%E1%BB%93%20%C3%81n%20Web/WebXuan/DangSP.html#");
	}
	else{
			a = document.getElementById("admin");
		a.setAttribute("href","");
	}
	}