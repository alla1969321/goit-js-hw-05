const getUserNames = (users) => {
    return users.map(user => user.name);
    };
console.log(
    getUserNames([
        {
            name: "Moore Hensley",
            email: "moorehensley@indexia.com",
            balance: 2811
        },
        {
            name: "Sharlene Bush",
            email: "sharlenebush@tubesys.com",
            balance: 3821
        },
        {
            name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        balance: 3793
        },
        {
            name: "Elma Head",
        email: "elmahead@omatom.com",
        balance: 2278
        },
        {
            name: "Carey Barr",
            email: "careybarr@nurali.com",
            balance: 3951
        },
       {
            name: "Blackburn Dotson",
            email: "blackburndotson@furngeer.com",
            balance: 1498
        },
        {
            name: "Shere Anthony",
       email: "shereanthony@kog.com",
       balance: 2764
        },
    ])
);//[ " Moore Hensley", "Sharlene Bush","Ross Vazquez","Elma Head","Carey Barr","Blackburn Dotson","Shere Anthony"]