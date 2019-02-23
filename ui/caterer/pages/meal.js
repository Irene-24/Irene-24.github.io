const addBtn = document.querySelector(".addBtn");
const closeBtns = document.querySelectorAll(".formclose")
const delBtns = document.querySelectorAll("button.del");
const modBtns = document.querySelectorAll("button.mod")

const addMealForm = document.querySelector("#addMeal");
const modMealForm = document.querySelector("#modMeal"); 
const delMeal = document.querySelector("#delMeal"); 

closeBtns.forEach( btn => {
    btn.addEventListener('click',() =>
    {
        event.preventDefault();
        event.target.parentElement.style.display = "none";
    },false);
} );

function addMealHandler()
{
    let addMealForm = document.querySelector('#addMeal');
    addMealForm.style.display = 'block';

    const addMeal = (event) => 
    {
        event.preventDefault();
        let mealTitle = addMealForm['food-name'].value;
        let mealPrice = addMealForm['food-price'].value;
        let mealPic = addMealForm['meal-pic'];
        console.log(mealTitle);
        console.log(mealPrice);
     
                 
        
    }; 

    addMealForm.addEventListener('submit',addMeal,false);      
    

}

function modMealHandler()
{
    let modMealForm = document.querySelector('#modMeal');
    modMealForm.style.display = 'block';

    const modMeal = (event) => 
    {
        event.preventDefault();
        let mealTitle = modMealForm['mod-food-name'].value;
        let mealPrice = modMealForm['mod-food-price'].value;
        let mealPic = modMealForm['meal-pic'];
        console.log(mealTitle);
        console.log(mealPrice); 
        
    }; 

    modMealForm.addEventListener('submit',modMeal,false);      
    

}

function delMealHandler()
{
    let delMealForm = document.querySelector('#delMeal');
    delMealForm.style.display = 'block';

    const delMeal = (event) => 
    {
        event.preventDefault();
              
    }; 

    delMealForm.addEventListener('submit',delMeal,false);      
    

}



addBtn.addEventListener('click',addMealHandler,false);
modBtns.forEach( btn => {
    btn.addEventListener('click',modMealHandler,false);
} );
delBtns.forEach( btn => {
    btn.addEventListener('click',delMealHandler,false);
} );