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

const UIcontroller = (function(){
    const updatePersonObj = function(){
        toggleOverlay();
        getAllUsers().then(data => data.data.reduce((acc, el) => acc + `<div class="person"><h4> My name is ${el.name}</h4><br><p>I'm ${el.age} years old</p> <br><p>My id is: ${el.id}</p></div>`,'')).then(data => {
            listeners.persons.innerHTML = data
            toggleOverlay();
        })
    };
        
            return{
                updatePersonObj,

                userCall(){
                    addUser(listeners.newName.value, listeners.newAge.value)
                        .then(status => {
                        status.status === 201? updatePersonObj():console.log('ups')
                        toggleOverlay();
                })},

                findByIdCall(){
                    getUserById(listeners.userId.value).then(data => {
                        if(data.status === 200){
                        listeners.persons.innerHTML = `<div class="person"><h4> My name is ${data.data.name}</h4><br><p>I'm ${data.data.age} years old</p> <br><p>My id is: ${data.data.id}</p></div>`;
                        toggleOverlay();
                    }else{
                            alert('NO SUCH USER FOUND');
                            toggleOverlay()
                        }
                    })
                },

                removeUserCall(){
                    getUserById(listeners.removeId.value).then(data => {
                     data.status === 200?
                    removeUser(data.data.id).then(() => {
                    alert(`${data.data.name} was saccessfuly deleted!`)
                    updatePersonObj();
                    }): alert('NO SUCH USER FOUND'), toggleOverlay();
                    })
                },

                updatePersonInfoCall(){
                    let name = listeners.updateName.value;
                    let age = listeners.updateAge.value;
                    getUserById(listeners.updateId.value).then(data => {
                    data.status === 200?
                    updateUser(data.data.id, name, age).then(() => {
                    updatePersonObj();
                    alert(`${name} was saccessfuly updated!`)
                    }): alert('NO SUCH USER FOUND'), toggleOverlay();
                })
                },

                formHandler(call, resetDom){
                    return function(e){
                    e.preventDefault(); 
                    if(e.target.nodeName !== "BUTTON") return;
                    toggleOverlay();
                        call();
                    resetDom.reset();
                    }
                },
            }
            
})()





const appController = (function(){
    UIcontroller.updatePersonObj();
    listeners.newPersonForm.addEventListener('click', UIcontroller.formHandler(UIcontroller.userCall, listeners.newPersonForm));

    listeners.getUserByIdForm.addEventListener('click', UIcontroller.formHandler(UIcontroller.findByIdCall, listeners.getUserByIdForm));

    
    listeners.removeUserById.addEventListener('click', UIcontroller.formHandler(UIcontroller.removeUserCall, listeners.removeUserById));


    listeners.updateUserById.addEventListener('click', UIcontroller.formHandler(UIcontroller.updatePersonInfoCall, listeners.updateUserById));


    listeners.showAllUsersBtn.addEventListener('click', UIcontroller.updatePersonObj)
})();

