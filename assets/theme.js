function bodyLoad(){
	loadSwitchInput();
}
function loadSwitchInput(){
	var status = localStorage.getItem("theme");
	var checkbox = document.getElementById("switch-controller");
	
	if (status === "dark"){
		setDarkMode();
		checkbox.checked = true;
	}
	else{
		setLightMode();
		checkbox.checked = false;
	}
}
function switchInput(){
	var checkbox = document.getElementById("switch-controller");
	
	if (checkbox.checked){
		setDarkMode();
		localStorage.setItem("theme", "dark");
	} 
	else{
		setLightMode();
		localStorage.setItem("theme", "light");
	}
}
function setDarkMode(){
	document.documentElement.setAttribute('data-theme', 'dark');
	document.getElementById("switch-status").innerHTML = "Dark Mode : ON";
}
function setLightMode(){
	document.documentElement.setAttribute('data-theme', 'light');
	document.getElementById("switch-status").innerHTML = "Dark Mode : OFF";
}