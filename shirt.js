let product = document.querySelectorAll(".product-card");
let pcontainer = document.getElementById("product-container")
let mcontainer = document.getElementById("main-container")
let slider1 = document.getElementById("p-slider1")
let slider2 = document.getElementById("p-slider2")
let slider3 = document.getElementById("p-slider3")
let ptype = document.getElementById("p-type")

let pcolor = document.getElementById("p-color")

let pfabric = document.getElementById("p-fabric")



let ppattern = document.getElementById("p-pattern")

let pfit = document.getElementById("p-fit")
let psleeve = document.getElementById("p-sleeve")
let pacolor = document.getElementById("p-a-color")
let pasize = document.getElementById("p-a-size")
 
console.log(product)

product.forEach(function(value){
    value.addEventListener("click",()=>{
        console.log(value.childNodes)
        let pdimgsrc1 = value.childNodes[1].src;
        let pdimgsrc2 = value.childNodes[3].src;
        let pdasize = value.childNodes[7].innerHTML;
        let pdacolor = value.childNodes[9].innerHTML;
        let pdtype = value.childNodes[11].textContent;
        let pdcolor = value.childNodes[13].innerText;
        let pdfabric = value.childNodes[15].textContent;
        
        let pdpattern = value.childNodes[17].textContent;
        let pdfit = value.childNodes[19].textContent;
        let pdsleeve = value.childNodes[21].textContent;
        
        
        

        // console.log(pdimgsrc1,pdtype , pdimgsrc2, pdcolor, pdfabric, pdpattern, pdfit, pdsleeve, pdcollar)
        

        mcontainer.style.display = "none"
        pcontainer.style.display = "inline"

        slider1.src = pdimgsrc1
        slider2.src = pdimgsrc2
        slider3.src = pdimgsrc1
        pasize.innerHTML = pdasize
        ptype.innerText = pdtype
        pcolor.innerText = pdcolor
        pfabric.innerText = pdfabric
        
        ppattern.innerText = pdpattern
        pfit.innerText = pdfit
        psleeve.innerText = pdsleeve
        pacolor.innerHTML = pdacolor
        
    })
})