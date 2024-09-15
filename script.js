const container = document.querySelector('.list-container');
const todoItems = document.querySelectorAll('.todo-container');

const createButton = document.getElementById('task-submit');
const deleteButton = document.querySelectorAll('.delete-button');

let titleInput = document.getElementById('input-title');
let descriptionInput = document.getElementById('input-description');

let identifier = 0;

const createItem = (id, title, description) => {
    // Criando a div.todo-container+flex 
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('todo-container', 'flex');

    // Criando a div.todo-text, ID flexível
    const taskText = document.createElement('div');
    taskText.id = id;
    taskText.className = 'todo-text';

    // Criando o h3.title da Task
    const taskTitle = document.createElement('h3');
    taskTitle.textContent = title;

    // Criando o p.description da Task
    const taskDescription = document.createElement('p');
    taskDescription.textContent = description;

    // Atribuindo taskTitle e TaskDescription a div.todo-text
    taskText.append(taskTitle, taskDescription);

    // Criando o button.taskDelete com a class delete-button
    const taskDelete = document.createElement('button');
    taskDelete.textContent = 'X';
    taskDelete.className = 'delete-button';

    // atribuindo tudo a div.todo-container
    taskContainer.append(taskText, taskDelete);

    // Adiciona os elementos criados dentro de taskItem
    container.append(taskContainer);

    // adicionando o evento nos botões
    taskDelete.addEventListener('click', () => {
        // createItem('item4', 'Jantar2', 'Comer uma refeição rica em proteinas às 20:30');
    });
}

const taskCreate = () => {

    let title = titleInput.value;
    let desc = descriptionInput.value;

    if ( title == '' || desc == '') {
        alert('Você precisa informar o titulo e a descrição!');
        return;
    };

    createItem(++identifier, title, desc);

    titleInput.value = '';
    descriptionInput.value = '';

};

const deleteItem = () => {
    
}

// // Função para os botões já existentes
// const addItem = deleteButton.forEach(button => {
//     button.addEventListener('click', () => {
//         button.closest('.todo-container').querySelector('h3');
//         createItem('item3', 'Jantar', 'Comer uma refeição rica em proteinas às 20:30');
//     })
// });

createButton.addEventListener('click', taskCreate)