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
    mainForm: document.querySelector('.update-user-by-id'),
    inputId: document.querySelector('.user-id'),
    inputName: document.querySelector('.user-name'),
    inputAge: document.querySelector('.user-age'),
    createBtn: document.querySelector('.btnCreate'),
    getBtn: document.querySelector('.btnGet'),
    updateBtn: document.querySelector('.btnUpdate'),
    removeBtn: document.querySelector('.btnRemove'),
    superBtn :document.querySelector('.superBtn'),
    overlay: document.querySelector('.overlay'),
    persons: document.querySelector('.persons'),
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
                    addUser(listeners.inputName.value, listeners.inputAge.value)
                        .then(status => {
                        if(status.status === 201){
                            alert(`${status.data.name} was saccessfuly added!`);
                            updatePersonObj()
                            toggleOverlay();
                        }else{
                        alert('NO SUCH USER ADDED')
                        toggleOverlay();
                        }
                })
            },

                findByIdCall(){
                    getUserById(listeners.inputId.value).then(data => {
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
                    getUserById(listeners.inputId.value).then(data => {
                     data.status === 200?
                    removeUser(data.data.id).then(() => {
                    alert(`${data.data.name} was saccessfuly deleted!`)
                    updatePersonObj();
                    }): alert('NO SUCH USER FOUND'), toggleOverlay();
                    })
                },

                updatePersonInfoCall(){
                    let name = listeners.inputName.value;
                    let age = listeners.inputAge.value;
                    getUserById(listeners.inputId.value).then(data => {
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
    listeners.createBtn.addEventListener('click', UIcontroller.formHandler(UIcontroller.userCall, listeners.mainForm));
    listeners.getBtn.addEventListener('click', UIcontroller.formHandler(UIcontroller.findByIdCall, listeners.mainForm));
    listeners.removeBtn.addEventListener('click', UIcontroller.formHandler(UIcontroller.removeUserCall, listeners.mainForm));
    listeners.updateBtn.addEventListener('click', UIcontroller.formHandler(UIcontroller.updatePersonInfoCall, listeners.mainForm));
    listeners.superBtn.addEventListener('click', UIcontroller.updatePersonObj)
})();

