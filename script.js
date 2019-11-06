let r = Math.random();
r = r * 10;
r = Math.round(r);
console.log(r);

let userNum = document.querySelector('#user-num');

document.querySelector('#btn').onclick = checkNum;

function checkNum() {
	let num = userNum.value;
	num = parseInt(num);
	console.log(num);
		
	if (isNaN(num)) {
		alert('Введите корректное число.');
	}	
	else {
		if (num == r) {
			alert('УРА!!! Вы угадали!');
			location.reload();
	}
	else {
		if (num > r) {
		alert('Загаданное число меньше. Пробуйте еще.');
		}
	else {
		if (num < r) {
		alert('Загаданное число больше. Пробуйте еще.');
	}
	}
	}
	}
}