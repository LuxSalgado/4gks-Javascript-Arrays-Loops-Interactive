let contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}
for(let key in contact){
    // Code goes here
    console.log(`${key} : ${contact[key]}`);
}
/* for (const [key, value] of Object.entries(contact)) {
    console.log(`${key} : ${value}`);
  } */

