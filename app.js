
let textInput = document.querySelector('#textInput'); //поле инпута
let button = document.querySelector('#textBtn');	//кнопка
let toDoList = document.getElementById('toDoList');	//поле отображения списка


button.addEventListener('click', addPoint); //обработчик кнопки

function addPoint(e){
	e.preventDefault();

	let inputedPoint = textInput.value; //значение в инпуте
	let liPoint = `
	<li class = "notDone"> ${inputedPoint}</li><button class = "deleteButton">X</button>
	`;

	let wrapper = document.createElement('span'); //обертка
	wrapper.innerHTML = liPoint; //обернули li и button, чтоб можно было их зааппендить и не использовать innerHTML, чтоб не перезаписывался список
	
	toDoList.append(wrapper); // добавляем в toDoList
	textInput.value = ''; //очищаем инпут
}

toDoList.addEventListener('click', (e) => {
	e.preventDefault();

	if(e.target.tagName === 'LI'){
		e.target.classList.toggle('done'); //меняем цвет фона
	}

	if(e.target.tagName === 'BUTTON'){
		e.target.closest('span').remove(); //удаляем элемент по родителю, в который оборачивали
	}
})



