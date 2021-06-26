
const customer = {
    firstName : "Jaruwit",
    lastName : "Suriyo",
    location : {
        city : "Bangkok",
        country : "TH"
    }
}


const toString = ({firstName, lastName, location : { city } }) => {
    return `FirstName : ${firstName}, lastName  ${lastName}, city : ${city}`;
}


toString(customer);


const foods = ['cake', 'pizza', 'burger'];
const [cake, pizza, burger] = foods;
const [, pizza] = foods;

