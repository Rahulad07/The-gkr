
function offer(){
	var alert=document.getElementById('box');
	alert.style.display="block";
	// console.log(alert)
	}

let selectarray = [];
const parsedData = JSON.parse(data);
const parentDiv = document.getElementById('parent');
const breakfastButton = document.getElementById('breakfast');
const lunchButton = document.getElementById('lunch');
const snackButton = document.getElementById('snack');
const dinnerButton = document.getElementById('dinner');
const drinkButton = document.getElementById('drink');
const dessertButton = document.getElementById('dessert');
// const searchbutton= document.getElementById('search-item');

console.log(parsedData);
// console.log(selectbutton);

function renderCategory(category) {
	parentDiv.innerHTML = '';
	for (let i = 0; i < parsedData.length; i++) {
		if (parsedData[i].category === category) {
			const childDiv = document.createElement('div');
			childDiv.classList.add('child');
			childDiv.innerHTML = `
            
            	<img src="${parsedData[i].image}"></img>
                <div class="child-item"><h1>${parsedData[i].food}</h1>
                <h4>${parsedData[i].price}</h4></div>
				<button id=${parsedData[i].id} class="select-button">Select</buuton>
               
            `;
			parentDiv.appendChild(childDiv);
		}
	}
	selectitem()

}

renderCategory('breakfast');

breakfastButton.addEventListener('click', () => renderCategory('breakfast'));
lunchButton.addEventListener('click', () => renderCategory('lunch'));
snackButton.addEventListener('click', () => renderCategory('snack'));
dinnerButton.addEventListener('click', () => renderCategory('dinner'));
drinkButton.addEventListener('click', () => renderCategory('drinks'));
dessertButton.addEventListener('click', () => renderCategory('dessert'));



function selectitem() {
	const selectbutton = document.getElementsByClassName('select-button');

	for (let i = 0; i < selectbutton.length; i++) {
		selectbutton[i].addEventListener('click', (e) => {
			selectarray.push(e.target.id)
			// console.log(selectarray);
			cart()

		})
	}
}
function cart() {

	var cart = document.getElementById('cart');
	cart.innerHTML = '';
	for (let i = 0; i < selectarray.length; i++) {
		for (let j = 0; j < parsedData.length; j++) {
			if (parseInt(selectarray[i]) == parsedData[j].id) {
				var el = document.createElement('tr');
				var domString = `<td>${parsedData[j].food}</td><td>${parsedData[j].price}</td>`;
				el.innerHTML = domString;
				cart.appendChild(el);
				console.log(parsedData)
			}
		}


	}
}
function order() {
	var cart = document.getElementById('cart');
	alert("Your order will be deliver in 10 min");
	cart.innerHTML = "";
	selectarray=[];

}
// let result=[];
// const toSearch = "lo";

// function search(){
	
// const searchto= document.getElementById("search-item");
// 	for(var i=0; i<data.length; i++) {
// 		for(key in data[i]) {
// 		  if(data[i][key].indexOf(toSearch)!=1) {
// 			searchbutton[i].addEventListener('click', (e) => {
// 				result.push();
// 			})
// 		  }
// 		}
// 	  }

// }


