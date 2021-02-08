const medieurl = "https://babushka-dd8a.restdb.io/media";
const myHeaders = {

	"x-apikey": "600ec2fb1346a1524ff12de4"
}
document.addEventListener("DOMContentLoaded", start)

function start() {
	loadJSON();
}

async function loadJSON() {
	const JSONData = await fetch("https://babushka-dd8a.restdb.io/rest/menu", {
		headers: myHeaders
	});
	retter = await JSONData.json();
	console.log("Menu", retter);
	visRetter();
}

function visRetter() {
	console.log(retter);
}
