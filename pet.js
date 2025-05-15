console.log('pet successfully');

const loadCategory=()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then(res => res.json())
    .then(data => displayCategory(data.categories))
    .catch(error=> console.log(error))
}

const displayCategory=(categories)=>{
    //console.log(categories);
    const categoryContainer= document.getElementById("category");

    categories.forEach(item => {
        console.log(item);
        const category =item.category;
        //console.log(category);
        const buttonContainer=document.createElement("div");
        buttonContainer.classList="";
        buttonContainer.innerHTML=`
        <button id="btn-${category}" class="btn btn-outline btn-accent px-4 py-2 w-full lg:btn-lg rounded-lg">
        <img class="w-6 h-6" src="${item.category_icon}"> ${category}</button>
        `
        categoryContainer.append(buttonContainer);
    });
   
}



loadCategory();