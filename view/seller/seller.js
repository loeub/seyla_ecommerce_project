// get button
const domAddBtn = document.querySelector("#addItem");
const domCancelBtn = document.querySelector("#cencal");
const domBtnCreateItem = document.querySelector("#add");
const addProduct = document.querySelector("#addProduct");
const  dialog = document.querySelector("#dialog");
let container = document.querySelector("#container");
let domData = [
    {
        image:"", 
        name:"Nike",
        brand: "",
        rating: 5
    },
    {
        image:"", 
        name:"Nike",
        brand: "",
        rating: 5
    },
    // {
    //     image:"", 
    //     name:"Nike",
    //     brand: "",
    //     rating: 5
    // },
]

function saveData() {
    localStorage.setItem("dataProruct", JSON.stringify(domData));
}
// get data from the local storage
function getData() {
    let dataStorage = JSON.parse(localStorage.getItem("dataProruct"));
    if (dataStorage !== null) {
        domData = dataStorage;
    }
}

// Element name 
// function use to create the element when you click.
function showDialog(element){
    element.style.display = "block";
}

function hideDialog(element){
    element.style.display = "none";
}
// add event on the button


function renderDataItem(){
    document.querySelector("#cardContainer").remove();

    let  cardContainer = document.createElement("div");
    cardContainer.setAttribute("id", "cardContainer");
    container.appendChild(cardContainer);

    for (let index = 0; index < domData.length; index ++){
        let data = domData[index];

        let card = document.createElement("div");
        card.setAttribute("class", "card")
        card.dataset.index = index;
        cardContainer.appendChild(card);

        let cardInfo = document.createElement("div")
        cardInfo.setAttribute("class", "cardInfo");
        card.appendChild(cardInfo);


        let image = document.createElement("img");
        image.src = data.image;
        cardInfo.appendChild(image)

        let productName = document.createElement("span");
        productName.className = "title";
        productName.textContent = data.name;
        cardInfo.appendChild(productName);


        let title = document.createElement("span");
        title.className = "title";
        title.textContent = data.brand;
        cardInfo.appendChild(title);

        let price = document.createElement("span");
        price.className = "title";
        price.textContent = data.price;
        cardInfo.appendChild(price);
    
        let actions = document.createElement("div");
        actions.className = "actions";
        card.appendChild(actions);
    
        let editAction = document.createElement("img");
        editAction.src = "../../image/edit.svg"
        editAction.addEventListener("click", updateData);
        actions.appendChild(editAction);
    
        let trashAction = document.createElement("img");
        trashAction.src = "../../image/trash.png";
        trashAction.addEventListener("click", removeQuestion);
        actions.appendChild(trashAction);
    }

}
function onCencal() {
    hideDialog(dialog);
}
function onAddItem() {
    showDialog(dialog)
    document.querySelector("#add").textContent = "Add Product";
}


function editQuestion(event) {
    showDialog(dialog);
    // TODO  Get the question index using the dataset
    // TODO   update the dialog with question informatin
    document.querySelector("#url").value = domData[index].image;
    document.querySelector("#name").value = domData[index].name;
    document.querySelector("#price").value = domData[index].price;
    document.querySelector("#shoeSize").value = domData[index].size;


    domData[index].image = document.querySelector("#url").value
    domData[index].name = document.querySelector("#name").value
    domData[index].price = document.querySelector("#price").value
    domData[index].size = document.querySelector("#shoeSize").value
        
    // TODO   Show the dialog
    domData.splice(index,1);
}


function updateData(event){
    showDialog(dialog);
    document.querySelector("#add").textContent = "Update";
    let index = event.target.parentElement.parentElement.dataset.index;


    document.querySelector("#url").value = domData[index].image; 
    document.querySelector("#name").value = domData[index].name;
    document.querySelector("#price").value = domData[index].price;
    document.querySelector("#shoeSize").value = domData[index].size;
    domData.splice(index, 1);
}



function removeQuestion(event) {
    //  Get index
    let index = event.target.parentElement.parentElement.dataset.index;
  
    // Remove question
    domData.splice(index, 1);
  
    // Save to local storage
    saveData();
  
    // Update the view
    renderDataItem();
}




function createProduct(event) {
    hideDialog(dialog);
    // 1- Create new question
    let newDataProduct = {};
    newDataProduct.image = document.getElementById("url").value;
    newDataProduct.name = document.getElementById("name").value;
    newDataProduct.price = document.getElementById("price").value;
    newDataProduct.size = document.getElementById("shoeSize").value;
    domData.push(newDataProduct);
  
    // 2- Save question
    saveData();
    
    // 3 - Update the view
    renderDataItem();
}

// saveData();
getData();
renderDataItem();


domAddBtn.addEventListener("click", onAddItem);
domCancelBtn.addEventListener("click", onCencal);
domBtnCreateItem.addEventListener('click', createProduct)

