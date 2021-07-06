class AddressBookForm
{
  
//getter and setter method use to get the value and set the value

get name() { return this._name; }
set name(name) {
    let nameRegex = RegExp('^[A-Z][a-z A-Z \\s]{2,}$')
    if (nameRegex.test(name))
        this._name = name;
    else throw 'Name is Incorrect!';
}

get address() { return this._address; }
set address(address) { this._address = address; }

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
    this._phone=phone;
}
//method
toString() {
    
    return "name=" + this.name + ", address = '" + this.address + ", city = '" + this.city +
        ", state = '" + this.state + ", zip= " + this.zip +
        ", phone = " + this.phone ;
}
}