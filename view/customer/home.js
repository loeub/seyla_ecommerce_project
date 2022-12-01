//Dom Element
const domMianContainer = document.querySelector('main');



// The data
let domData = [
    {
        image:"",
        productName:"Nike",
        price:"$500",
        rating:"Ho Theary Missed the Laundry !"
    },
    {
        image:"",
        productName:"Nike",
        price:"$500",
        rating:"Ho Theary Missed the Laundry !"
    },
    {
        image:"",
        productName:"Nike",
        price:"$500",
        rating:"Ho Theary Missed the Laundry !"
    }
]
// function to store the local store
function saveDomData() {
    localStorage.setItem("dataProruct", JSON.stringify(domData));
}


// get data from the local storage
function getDomData() {
    let dataStorage = JSON.parse(localStorage.getItem("dataProruct"));
    if (dataStorage !== null) {
        domData = dataStorage;
    }
}

function renderDomData (){
    let domDataContainer = document.querySelector(".container");
    domDataContainer.remove();
    domDataContainer = document.createElement("div");
    domDataContainer.setAttribute('class', 'container');
    domMianContainer.appendChild(domDataContainer);


    for (let index = 0; index <domData.length; index++){
        let data = domData[index];

        

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
        titleName.textContent = data.productName;
        domDataInfo2.appendChild(titleName);

        //create the p
        let titlePrice = document.createElement("p");
        titlePrice.textContent = data.price;
        domDataInfo2.appendChild(titlePrice);

        //create the image
        let imageRating = document.createElement("img");
        imageRating.src = data.rating;
        domDataInfo2.appendChild(imageRating);


        //create the button
        let button = document.createElement('button');
        button.textContent = "View";
        domDataInfo2.appendChild(button);
        
    }

}

renderDomData();