// get button
const domAddBtn = document.querySelector("#addItem");
const domCancelBtn = document.querySelector("#cencal");
const domBtnCreateItem = document.querySelector("#add");
const addProduct = document.querySelector("#addProduct");
const  dialog = document.querySelector("#dialog");
let container = document.querySelector("#container");
let getImage = document.querySelector("#file");
let domData = []

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
        
        let divImage = document.createElement("div");
        divImage.setAttribute("class", "images");
        card.appendChild(divImage)

        let cardInfo = document.createElement("div");
        cardInfo.setAttribute("class", "cardInfo");
        card.appendChild(cardInfo);

        let image = document.createElement("img");
        image.src = data.image;
        divImage.appendChild(image)



        let brand = document.createElement("span");
        brand.className = "brand";
        brand.textContent = data.brand;
        cardInfo.appendChild(brand);

        let price = document.createElement("span");
        price.className = "title";
        price.textContent = data.price; 
        cardInfo.appendChild(price);


        let size = document.createElement("span");
        size.className = "title";
        size.textContent = data.size;
        cardInfo.appendChild(size);

        let descriptionShoes = document.createElement("span");
        descriptionShoes.className = "title";
        descriptionShoes.textContent = data.description;
        cardInfo.appendChild(descriptionShoes);
    
        let actions = document.createElement("div");
        actions.className = "actions";
        card.appendChild(actions);
    
        let editAction = document.createElement("img");
        editAction.src = "../../image/edit.svg"
        editAction.addEventListener("click", editeData);
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
function onAddProduct() {
    showDialog(dialog)
    document.querySelector("#add").textContent = "Add Product";
}


function editeData(event){
    let index = event.target.parentElement.parentElement.dataset.index;
    getIndex = index;
    document.querySelector("#file").value = getImage.value;
    document.querySelector("#price").value = domData[index].price;
    document.querySelector("#shoeSize").value = domData[index].size;
    domData.splice(index, 1);
    showDialog(dialog);
    document.querySelector("#add").textContent = "Edite";
}


function removeQuestion(event) {
    let index = event.target.parentElement.parentElement.dataset.index;

    domData.splice(index, 1);
  
    saveData();
  
    renderDataItem();
}




function createProduct(event) {
    // 1- Create new product
    let newDataProduct = {};
    newDataProduct.image = imageURL;
    newDataProduct.brand = document.getElementById("shoesBrand").value;
    newDataProduct.price = document.getElementById("price").value;
    newDataProduct.size = document.getElementById("shoeSize").value;
    domData.push(newDataProduct);
    hideDialog(dialog);
  
    // 2- Save product
    saveData();
    
    // 3 - Update the product
    renderDataItem();
}

getData();
renderDataItem();






let imageURL = " ";

function uploadImage(element) {
    let file = element.files[0];
    let reader = new FileReader();
    reader.onloadend = function() {
        imageURL = reader.result;
    }
    reader.readAsDataURL(file);
}
getImage.addEventListener('change', function(event) {
    uploadImage(this);
});

domAddBtn.addEventListener("click", onAddProduct);
domCancelBtn.addEventListener("click", onCencal);
domBtnCreateItem.addEventListener('click', createProduct)