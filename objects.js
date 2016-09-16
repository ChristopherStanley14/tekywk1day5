var person = {
    firstName : "Christopher",
    lastName : "Stanley",
    email : "christopher.stanley@interapthq.com",
    phone : "606.477.3151",
    birthday : "8/14/1992",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
    
};

function printDetails (p) {
    console.log(p.firstName);
    console.log(p.lastName);
    console.log(p.email);
    console.log(p.phone);
    console.log(p.birthday);
}

printDetails(person);
console.log(person.fullName());