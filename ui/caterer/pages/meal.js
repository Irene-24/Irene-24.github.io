const addBtn = document.querySelector(".addBtn");

const addMealForm = document.querySelector("#addMeal");
const modMealForm = document.querySelector("#modMeal"); 
const delMeal = document.querySelector("#delMeal"); 

function addMealHandler()
{

    let reader = new FileReader();
    let addMealForm = document.querySelector('#addMeal');
    addMealForm.style.display = 'block';
    let output = addMealForm.querySelector('#output_image');

    const addMeal = (event) => 
    {
        event.preventDefault();
        let mealTitle = addMealForm['food-name'].value;
        let mealPrice = addMealForm['food-price'].value;
        console.log(mealTitle);
        console.log(mealPrice);
        
    }; 

    addMealForm.addEventListener('submit',addMeal,false);

       
    

}

addBtn.addEventListener('click',addMealHandler,false)