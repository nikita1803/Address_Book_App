
window.addEventListener("DOMContentLoaded", (event) => {
    contactList = getContactDetailsFromSotage();
    createInnerHtml();
});

const getContactDetailsFromSotage = () =>{
    return localStorage.getItem("ContactList") ?
        JSON.parse(localStorage.getItem("ContactList")) : [];
}

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml =
        "<tr><th>Fullname</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>PhoneNumber</th><th>Actions</th></tr>";
 // let contactList = createContactDetailsJSON();
  let innerHtml = `${headerHtml}`;
  for(const contact of contactList){
     innerHtml = `${innerHtml}
     <tr>
           <td>${contact._name}</td>
             <td>${contact._address}</td>
             <td>${contact._city}</td>
             <td>${contact._state}</td>
             <td>${contact._zip}</td>
             <td>${contact._phoneNumber}</td>
             <td>
                 <img id="${contact._id}" onclick="remove(this)"  src="/asserts/icons/delete-black-18dp.svg">
                 <img id="${contact._id}" onclick="update(this)"  src="/asserts/icons/create-black-18dp.svg">
             </td>
         </tr>
     `;
}
document.querySelector('#table-display').innerHTML = innerHtml;
}
