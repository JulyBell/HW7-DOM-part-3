
let textInput = document.querySelector('#textInput'); //поле инпута
let button = document.querySelector('#textBtn');	//кнопка
let toDoList = document.getElementById('toDoList');	//поле отображения списка


button.addEventListener('click', addPoint); //обработчик кнопки

function addPoint(e){
	e.preventDefault();

	let inputedPoint = textInput.value; //значение в инпуте
	let liPoint = document.createElement('li'); //формируем пункты списка динамически
	liPoint.innerText = inputedPoint; //записываем в пункты списка значения из инпутов
	liPoint.className ='notDone'; //обозначаем начальный класс
	liPoint.addEventListener('click', (e) => {
		e.preventDefault();
		liPoint.classList.toggle('done'); //меняем класс при клике
		
	})

	let deleteButton = document.createElement('button'); // создаем кнопку

	deleteButton.type = 'submit'; //тип кнопки
	deleteButton.innerText = 'X'; //текст кнопки
	deleteButton.className = 'deleteButton'; //класс
	liPoint.append(deleteButton); //добавляем в li

	deleteButton.addEventListener('click', () => {
		e.preventDefault();

		liPoint.remove(); //удаляем пункт при нажатии кнопки

	});
	

	

	

	toDoList.append(liPoint); // li в toDoList

	textInput.value = ''; //очищаем инпут

}





