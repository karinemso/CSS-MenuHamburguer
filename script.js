const btnMobile = document.querySelector(".btnmobile")


btnMobile.addEventListener("click", openav)


function openav() {
	let navBar = document.querySelector(".nav")
	let main = document.querySelector(".corpo")
	navBar.classList.toggle("active")
	btnMobile.classList.toggle("active")
}

