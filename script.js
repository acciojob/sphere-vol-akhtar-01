function volume_sphere() {
    let radius=document.getElementById("radius").value;
	let r=Number(radius);
	int volume=document.getElementById("volume");
	
	if(radius>=0 && !isNaN(r)){
		int value=(4/3)*(3.14*r*r*r);
		volume.value=value.tofixed(4);
	}else{
		volume.value="NaN";
	}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
