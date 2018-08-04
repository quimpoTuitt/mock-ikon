

const removeHide = () => {
	document.getElementById("divTar").classList.remove("hide");
	document.getElementById("divTar").classList.add("res-tag");
}


const addHide = () => {
	document.getElementById("divTar").classList.add("hide");
	document.getElementById("divTar").classList.remove("res-tag");
}