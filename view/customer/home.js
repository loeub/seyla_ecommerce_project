//Dom Element
const domMianContainer = document.querySelector('main');



// get data from the local storage
let getData = JSON.parse(localStorage.getItem("dataProruct"));
function renderDomData (){
    let domDataContainer = document.querySelector(".container");
    domDataContainer.remove();
    domDataContainer = document.createElement("div");
    domDataContainer.setAttribute('class', 'container');
    domMianContainer.appendChild(domDataContainer);


    for (let index = 0; index <getData.length; index++){
        let data = getData[index];

        let domDataInfo = document.createElement('div');
        domDataInfo.setAttribute('class', 'card')
        domDataContainer.append(domDataInfo);

        let domDataImage = document.createElement('div');
        domDataImage.setAttribute('class', 'image')
        domDataInfo.appendChild(domDataImage)

        let domDataInfo2 = document.createElement('div');
        domDataInfo2.setAttribute('class', 'text_button')
        domDataInfo.appendChild(domDataInfo2)
        
        //create image 
        let image = document.createElement("img");
        image.src = data.image;
        domDataImage.appendChild(image)
        
        // create span
        let titleName = document.createElement("span");
        titleName.className = "title";
        titleName.textContent = data.brand;
        domDataInfo2.appendChild(titleName);

        //create the p
        let titlePrice = document.createElement("p");
        titlePrice.textContent = data.price + "$";
        domDataInfo2.appendChild(titlePrice);


        //create the button
        let button = document.createElement('button');
        button.textContent = "Buy Now";
        domDataInfo2.appendChild(button);
        
    }

}

renderDomData();


// searcher product
