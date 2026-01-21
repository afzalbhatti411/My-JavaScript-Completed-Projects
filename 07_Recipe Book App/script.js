const API_KEY = "275d58779ccf4e22af03e792e8819fff"
const recipeListE1 = document.getElementById('recipe-list');

function displayRecipes(recipes){
  recipeListE1.innerHTML = "";
  recipes.forEach((recipe)=>{
    const recipeItemE1 = document.createElement('li');
    recipeItemE1.classList.add('recipe-item');
    
    const recipeImageE1 = document.createElement('img');
    recipeImageE1.src = recipe.image;
    recipeImageE1.alt = "recipe image"

    const recipeTitleE1 = document.createElement('h2');
    recipeTitleE1.innerText = recipe.title; 

    const recipeIngredientsE1 = document.createElement('p');
    recipeIngredientsE1.innerHTML = `
    <strong> Ingredients : </strong> ${(recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(','))}
    `;
    
    const recipeLinkE1 = document.createElement('a');
    recipeLinkE1.href = recipe.souceUrl;
    recipeLinkE1.innerText = " View Recipe";

    recipeItemE1.appendChild(recipeImageE1);
    recipeItemE1.appendChild(recipeTitleE1);
    recipeItemE1.appendChild(recipeIngredientsE1);
    recipeItemE1.appendChild(recipeLinkE1);

    recipeListE1.appendChild(recipeItemE1);
});
}

async function getRecipes(){
  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.recipes;  
}

async function init(){
  const recipes = await getRecipes();
  displayRecipes(recipes);  
};

init();
