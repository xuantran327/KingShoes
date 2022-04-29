x=1;
function cong(){
	x = x + 1;
	document.getElementById('soluong').innerHTML = x;
}
function tru(){
	x = x - 1;
	if(x<0){
		alert('Số lượng hiện tại là 0 sản phẩm');			
	}
	else{
	document.getElementById('soluong').innerHTML = x;
}
}