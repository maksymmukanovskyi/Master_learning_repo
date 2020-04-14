const addUser = (n, a)=> {
    newUser = {
        name: n,
        age: a,
    }
   return fetch(`https://test-users-api.herokuapp.com/users/`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        }
    })
    .then(response => response.json())
    .catch(error => error);
    


};

const getAllUsers =() => {
    return fetch(`https://test-users-api.herokuapp.com/users/`)
    .then(response => response.json())
    .catch(error => error);
}

const getUserById = (id) => {
    return fetch(`https://test-users-api.herokuapp.com/users/${id}/`)
    .then(response => response.json())
    .catch(error => error);
}

const removeUser = (id) => {
    return fetch(`https://test-users-api.herokuapp.com/users/${id}/`,{
        method: 'DELETE'
    })
}

const updateUser = (id, n, a) => {
    let editUser = {
        name: n,
        age: a,
    }
    return fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(editUser),
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        }
    })
    .then(data => data.json())
    .catch(error => console.log(error))
}
function toggleOverlay(){
    listeners.overlay.classList.toggle('visible');
}
// addUser('Ivan', 15).then(data => console.log(data));
getAllUsers().then(data => console.log(data.data));
// getUserById('5e93c99c7820220014107c6c').then(data => console.log(data));
// removeUser(null);
// updateUser('5e93c94a7820220014107c61', 'Katya', 25)
const listeners = {
    showAllUsersBtn: document.querySelector('.superBtn'),
    persons: document.querySelector('.persons'),
    newPersonForm: document.querySelector('.new-person-form'),
    newName: document.querySelector('.newname'),
    newAge: document.querySelector('.newage'),
    overlay: document.querySelector('.overlay'),

    getUserByIdForm: document.querySelector('.get-user-by-id'),
    userId: document.querySelector('.user-id'),

    updateUserById: document.querySelector('.update-user-by-id'),
    updateId: document.querySelector('.update-user-id'),
    updateName: document.querySelector('.update-user-name'),
    updateAge: document.querySelector('.update-user-age'),

    removeUserById: document.querySelector('.remove-user-by-id'),
    removeId: document.querySelector('.remove-user-id')

};


function updatePersonObj() {
    toggleOverlay();
    getAllUsers().then(data => data.data.reduce((acc, el) => acc + `<div class="person"><h4> My name is ${el.name}</h4><br><p>I'm ${el.age} years old</p> <br><p>My id is: ${el.id}</p></div>`,'')).then(data => {
        listeners.persons.innerHTML = data
        toggleOverlay();
    })
}




const createNewPersonHandler = (e) => {
    e.preventDefault();
    if(e.target.nodeName !== "BUTTON") return;
    toggleOverlay();

    addUser(listeners.newName.value, listeners.newAge.value)
    .then(status => {
        status.status === 201? updatePersonObj():console.log('ups')
        toggleOverlay();
    })
    listeners.newPersonForm.reset();
}

const findById = (e) => {
    e.preventDefault();
    if(e.target.nodeName !== "BUTTON") return;
    let userId = listeners.userId.value;
    toggleOverlay();
    getUserById(userId).then(data => {
        if(data.status === 200){
        listeners.persons.innerHTML = `<div class="person"><h4> My name is ${data.data.name}</h4><br><p>I'm ${data.data.age} years old</p> <br><p>My id is: ${data.data.id}</p></div>`;
        toggleOverlay();
    }else{
            alert('NO SUCH USER FOUND');
            toggleOverlay()
        }
    })
        listeners.getUserByIdForm.reset();
    }
    

const removeUserHandler = (e) => {
    e.preventDefault();
    if(e.target.nodeName !== "BUTTON") return;
    let removeUserId = listeners.removeId.value;
    toggleOverlay();
    getUserById(removeUserId).then(data => {
        data.status === 200?
        removeUser(removeUserId).then(() => {
                alert(`${data.data.name} was saccessfuly deleted!`)
                updatePersonObj();
            }): alert('NO SUCH USER FOUND'), toggleOverlay();
    listeners.removeUserById.reset();
})
}

const updatePersonInfo = (e) => {
    e.preventDefault();
    if(e.target.nodeName !== "BUTTON") return;
    let updateUserId = listeners.updateId.value;
    let name = listeners.updateName.value;
    let age = listeners.updateAge.value;
    toggleOverlay();
    getUserById(updateUserId).then(data => {
        data.status === 200?
        updateUser(updateUserId, name, age).then(() => {
                updatePersonObj();
                alert(`${name} was saccessfuly updated!`)
            }): alert('NO SUCH USER FOUND'), toggleOverlay();
    listeners.updateUserById.reset();
})

}







const appController = (function(){
    updatePersonObj();
    listeners.newPersonForm.addEventListener('click', createNewPersonHandler);
    listeners.getUserByIdForm.addEventListener('click', findById);
    listeners.removeUserById.addEventListener('click', removeUserHandler);
    listeners.showAllUsersBtn.addEventListener('click', updatePersonObj)
    listeners.updateUserById.addEventListener('click', updatePersonInfo)
})();

