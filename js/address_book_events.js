//<!------------Event listner is created--------------->

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            let addressBookForm = new AddressBookForm();
            addressBookForm.name = name.value;;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
});

const save = () => {
    try {
        let addressBookForm = createAddressBook();
        createAndUpdateStorage(addressBookForm);
    } catch (e) {
        return;
    }
}
//<!-----UC6 Created a JSON object to xapture the user entry------->
function createAndUpdateStorage(addressBookForm) {
    let addressBookList = JSON.parse(localStorage.getItem("addressBooklList"));
    if (addressBookList != undefined) {
        addressBookList.push(addressBookForm);
    } else {
        addressBookList = [addressBookForm]
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList))
}

const  createAddressBook = () => {
    let addressBookForm = newAddressBookForm();
    try {
        addressBookForm.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    addressBookForm.address = getSelectedValues('[name=address]').pop();
    addressBookForm.city = getSelectedValues('[name=city]').pop();
    addressBookForm.state = getSelectedValues('[name=state]');
    addressBookForm.zip = getInputValueById('#number');
    addressBookForm.phone = getInputValueById('#phonenumber');
   
    return addressBookForm;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItem = [];
    allItems.forEach(item => {
        if (item.checked) selItem.push(item.value);
    });
    return selItem;
}

/**
 * 1: querySelector is the newer feature.
 * 2: The querySelectore method can be used when selectin by element name,
 *    nesting, or class name.
 * 3: querySelector lets you find elements with rules that can,t be expressed with getElementbyId
 */
const getInputValueById = (name) => {
    let value = document.querySelector(name).value;
    return value;
}

/**
 * 1: getElementById is better supported than  querySelector in older versions of the browsers.
 * 2: The thing with getElementById is that it only allows to select an element by its id.
 */
const getInputElementValue = (name) => {
    let value = document.getElementById(name).value;
    return value;
}
const resetFor = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=city]');
    unsetSelectedValues('[name=state]');
    unsetSelectedValues('[name=zip]');
    setValue('#number', '');
    setValue('#phonenumber', '');
    setValue('#address', '');
    
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

const setTextValue = (name, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (name, value) => {
    const element = document.querySelector(id);
    element.value = value;
}