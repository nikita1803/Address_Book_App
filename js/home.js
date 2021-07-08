/**
 * UC3 Added person in address book table using template literal.
 */
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {

    const headerHtml = "<th>Name</th><th>Address</th><th>City</th>"+"<th>State</th><th>Zip</th><th>Phone number</th><th>Action</th>";
    let addressBook = creteAddressBookJSON()[0];
    const innerHtml = `${headerHtml}
    
    <tr>
        <td>${addressBook._name}</td> I
        
        <td>${addressBook._address}</td>
        
        <td><div class='dept-label'>${addressBook._city}</div></td>
        
        <td>${addressBook._state}</td>
        
        <td>${addressBook._zip}</td>
        
        <td>${addressBook._phonenumber}</td>
        
        <td><img name="1" onclick="remove(this)" src="/asserts/icons/delete-black-18dp.svg" alt="delete">
        
        <img name="1" onclick="update(this)" src="/asserts/icons/create-black-18dp.svg" alt="edit"> 
        </td>
    
    </tr>
`;
    document.querySelector('#table-display').innerHTML = innerHtml;
    
}
const creteAddressBookJSON = () => { 
    let addressBookListLocal = [
    {

        _name: 'Nikita rai',
        _address: 'Ansal',
        _city: 'Lucknow',
        _state: 'UP',
        _zip: '226016',
        _phonenumber: '9599237376',
    
    }, 
 ];  
    return addressBookListLocal;
}
