class AddressBookForm
{
  
//getter and setter method use to get the value and set the value
get id() {
    return this._id;
}

set id(id) {
    this._id = id;
}
get name() { return this._name; }
set name(name) {
    let nameRegex = RegExp('^[A-Z][a-z A-Z \\s]{2,}$')
    if (nameRegex.test(name))
        this._name = name;
    else throw 'Name is Incorrect!';
}

get address() { return this._address; }
set address(address) { 
    let nameRegex = RegExp('^\d+\s[A-z]+\s[A-z]+')
    if (nameRegex.test(name))
        this._name = name;
    else throw 'Name is Incorrect!'; }

get city(){ 
    return this._city;
}
set city(city)
{
    this._city=city;
}

get state()
{
    return this._state;
}
set state(state)
{
    this._state=state;
}
get zip()
{
    return this._zip;
}
set zip(zip)
{
    this._zip=zip;
}
get phone()
{
    return this._phone;
}
set phone(phone)
{
    let nameRegex = RegExp('^[6-9]\d{9}$')
    if (nameRegex.test(phone))
        this._phone = phone;
    else throw 'Number is Incorrect!';
}
//method
toString() {
    
    return "name=" + this.name + ", address = '" + this.address + ", city = '" + this.city +
        ", state = '" + this.state + ", zip= " + this.zip +
        ", phone = " + this.phone ;
}
}

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function () {
            if (name.value.length == 0) {
                textError.textContent = "";
                return;
            }
            try {
                (new AddressBookForm()).name = name.value;
                textError.textContent = "";
            } catch (e) {
                textError.textContent = e;
            }
        });

        const phone = document.querySelector('#phone');
        const phoneError = document.querySelector('.phone-error');
        name.addEventListener('input',function () {
                if (phone .value.length == 0) {
                    phoneError.textContent = "";
                    return;
                }
                try {
                    (new AddressBookForm()).phoneNumber = phone.value;
                    phoneError.textContent = "";
                } catch (e) {
                    phoneError.textContent = e;
                }
            });

            const address = document.querySelector('#address');
            const addressError = document.querySelector('.address-error');
            name.addEventListener('input',function () {
                    if (address.value.length == 0) {
                        addressError.textContent = "";
                        return;
                    }
                    try {
                        (new AddressBookForm()).address = address.value;
                        addressError.textContent = "";
                    } catch (e) {
                        addressError.textContent = e;
                    }
                });
        
    });
    
//on submit
const save = () => {
    try{
        let addressBookData = createAddressBook();
        createAndUpdateStorage(addressBookData);
        resetForm();
    }catch(e){
        return;
    }
}

const createAddressBook = ()=>{
    let addressBookData = new AddressBookForm();
    addressBookData._id = new Date().getTime();
    try{
      //  console.log("adding name");
        addressBookData._name=document.querySelector('#name').value;
      //  console.log("added name");
    }catch(e){
        setTextValue('.text-error', e)
        throw e;
    }
    console.log(document.querySelector('#name').value);
    addressBookData._id = new Date().getTime();
    addressBookData._phoneNumber=document.querySelector('#phone').value;
    console.log("added phone");
    addressBookData._address=document.querySelector('#address').value;
    addressBookData._city=document.querySelector('#city').value;
    addressBookData._state=document.querySelector('#state').value;
    addressBookData._zip=document.querySelector('#zip').value;
    alert(addressBookData.toString());
    return addressBookData;
}
function createAndUpdateStorage (addressBookData){
    let contactList = JSON.parse(localStorage.getItem("ContactList"));
    if(contactList!=undefined){
        contactList.push(addressBookData);
    }else{
        contactList=[addressBookData];
    }
    alert(contactList.toString());
    localStorage.setItem("ContactList",JSON.stringify(contactList));
}
