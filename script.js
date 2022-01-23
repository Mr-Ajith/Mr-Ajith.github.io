var counter = 0;
var brands = [
	"AJ17H",
	"AJITH"
];
function brand_Animation(){
element=document.getElementById("navbar-brand-top");
element.innerHTML=brands[counter];
counter++;
if(counter == brands.length){
    counter = 0;
}
}

$( document ).ready(function() {
    setInterval(brand_Animation, 2000);
    $('.col').delay(500).fadeIn();
});
