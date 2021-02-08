const medieurl = "https://babushka-dd8a.restdb.io/media/";
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

const section = document.querySelector("section");
const template = document.querySelector("template").content;

function visRetter() {
	console.log(retter);
	retter.forEach(ret => {
		const klon = template.cloneNode(true);
		klon.querySelector(".pic").src = medieurl + ret.billede;
		klon.querySelector(".navn").textContent = ret.navn;
		klon.querySelector(".pris").textContent = ret.pris;
		klon.querySelector(".k_tekst").textContent = ret.kortbeskrivelse;
		section.appendChild(klon);
	})

}
