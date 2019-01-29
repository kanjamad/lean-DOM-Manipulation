document.querySelector("li").setAttribute("random", "1000"); 
// document.querySelector("h1").style.background="yellow";


// className
var h1 = document.querySelector("h1");
h1.className = "coolTitle";


// add class to li (classList)
// document.querySelector("li").classList.add("coolTitle");
document.querySelector("li").classList.remove("coolTitle");
// classList.toggle => useful if I want to turn somthing on off back and forth
document.querySelector("li").classList.toggle("done");
