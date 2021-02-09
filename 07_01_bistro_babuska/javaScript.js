const over = document.querySelector("h1");
const medieurl = "https://babushka-dd8a.restdb.io/media/";
const myHeaders = {

	"x-apikey": "600ec2fb1346a1524ff12de4"
}
document.addEventListener("DOMContentLoaded", start)
let retter;
let filter = "alle";

function start() {
	const filterknapper = document.querySelectorAll("nav button");
	filterknapper.forEach(knap => knap.addEventListener("click", filtreRetter))
	loadJSON();
}

function filtreRetter() {
	filter = this.dataset.kategori;
	over.textContent = this.textContent;
	document.querySelector(".valgt").classList.remove("valgt");
	this.classList.add("valgt");

	visRetter();
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
	const section = document.querySelector("section");
	const template = document.querySelector("template").content;
	section.textContent = "";

	retter.forEach(ret => {
		console.log("Menu", ret.kategori);

		if (filter == ret.kategori || filter == "alle") {
			const klon = template.cloneNode(true);
			klon.querySelector(".pic").src = medieurl + ret.billede;
			klon.querySelector(".navn").textContent = ret.navn;
			klon.querySelector(".pris").textContent = "Pris: " + ret.pris + " kr.";
			klon.querySelector(".k_tekst").textContent = ret.kortbeskrivelse;
			section.appendChild(klon);
		}
	})

}
