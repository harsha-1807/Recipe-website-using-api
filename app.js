let box2 = document.getElementById("box2");
let popup = document.getElementById("popup");
let container = document.getElementById("container")
let mealimg = document.getElementById("mealimg")
let ingredients = document.getElementById("ingredients")
let link1 = document.getElementById("link1")
// Random meal section

let randomimg = document.getElementById("randomdish");
let randomname = document.getElementById("randomname");

let url = "https://www.themealdb.com/api/json/v1/1/random.php";

// fetching data for random meal

async function fetchData() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    randomimg.setAttribute("src", data.meals[0].strMealThumb); //image link
    mealimg.setAttribute("src",data.meals[0].strMealThumb); //image for popup
    randomname.innerHTML = data.meals[0].strMeal; //meal name


    // ingredients 
    let link = data.meals[0].strYoutube
    // console.log(link)
    link1.setAttribute("href",link)
    let a  = data.meals[0]
    console.log(a)
    // a.forEach((element,i)=>{
    //     list = a.strIngredient[i]
    //     content.push(list)
    // });
    for(let i = 1;i<=10;i++){
        list = a[`strIngredient${i}`]
        var  content = document.createElement('div');
        content.innerHTML=`<h2 id="list">${list}</h2>`
        ingredients.appendChild(content)
    }
 
    // console.log(popup)
  } catch (error) {
    console.error("Error:", error.message)
  }
}

fetchData();

// Searching meals section
let goButton = document.getElementById("button");
let box = document.getElementById("bg2");

// onclick function
function link() {
  let inputvalue = document.getElementById("search").value;
  // console.log(inputvalue)
  let a = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputvalue}`;
//   console.log(a);
  searchmeal(a);
  box2.removeAttribute("hidden");
}

// fetching data for searching
async function searchmeal(a) {
  try {
    let response = await fetch(a);
    let data = await response.json();
    console.log(data);
    let array = data.meals;
    console.log(array);

    box.innerHTML = "";
    array.forEach((meal, i) => {
      let mealDiv = document.createElement("div");

      mealDiv.innerHTML = `
                <div class="meal" onclick="openbox(this)" >
                    <img src="${meal.strMealThumb}" alt="" id="mealpic">
                    <h2 class="mealname">${meal.strMeal}</h2>
                </div>`;

      box.appendChild(mealDiv);

    // ingredients 
    // let ingredients = []
    // ingredients = data.meals[0].strIngredient
    // console.log(ingredients)

    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

//color changing functions for header
function backgroundchange(x) {
  x.style.color = "white";
  // x.style.borderradius =  "15px"
}

function mouseleave(x) {
  x.style.color = "black";
}

// popup 
function openbox(){
    
    popup.style.display = "block";
    // let name = y.queryselector(".mealname").innertext
    // console.log(name)
    


}

function closebox(){
    popup.style.display = "none";

}