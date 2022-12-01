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

function searchBook(event) {
    // 1- Get the search text
    event.preventDefault();
    let text = searchBookInput.value
  
    // 2- Loop on all LI
    let productLabrary = document.querySelectorAll('li')
    productLabrary.forEach(index => {
      let isBook = index.firstElementChild.textContent
      let isFound = true
      for (let word in text){
        if (text[word].toLocaleLowerCase() !== isBook[word].toLocaleLowerCase()){
          isFound = false
        }
      }
  
      // Update the style of the LI (visible or hidden)
      if (!isFound){
        index.style.display = 'none'
      }else{
        index.style.display = 'block'
      }
    })
}