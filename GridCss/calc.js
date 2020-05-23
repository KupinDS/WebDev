function insert(num) {
	document.form.textview.value = document.form.textview.value + num;
}

function clean() {
	document.form.textview.value = "";
}

function back() {
	let calcData = document.form.textview.value;
	document.form.textview.value = calcData.substring(0,calcData.length-1);
}
function result() {
	let value = document.form.textview.value;
	document.form.textview.value = eval(value);
}