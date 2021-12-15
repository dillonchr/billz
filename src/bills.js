// all recurring bills that we know about
// @prop paycheck - which paycheck it comes out of
//   1 = 15th of the month pay
//   2 = 30th of the month paycheck
const bills = [
  {
    name: "Adobe InDesign",
    price: 20.99,
    autoPay: 1,
    paycheck: 1,
    day: 11
  },
  {
    name: "Arlo Smart",
    price: 9.99,
    autoPay: 1,
    paycheck: 1,
    day: 14
  },
  {
    name: "BarkBox",
    autoPay: 1,
    paycheck: 2,
    price: 27.23,
    day: 3
  },
  {
    name: "Blue Car",
    price: 359.86,
    autoPay: 0,
    paycheck: 1
  },
  {
    name: "Chewy",
    price: 43.39,
    autoPay: 1,
    paycheck: 2,
    day: 7
  },
  {
    name: "Cox",
    price: 113.33,
    autoPay: 1,
    paycheck: 2,
    day: 5
  },
  {
    name: "DigitalOcean",
    price: 10.7,
    autoPay: 1,
    paycheck: 2,
    day: 28
  },
  {
    name: "Disney+",
    price: 6.99,
    autoPay: 1,
    paycheck: 2
  },
  {
    name: "Electric Bill",
    priceEstimate: 100,
    autoPay: 0,
    url: "https://psoklahoma.com/account/bills/",
    paycheck: 2,
    day: 2
  },
  {
    name: "EnerBank USA",
    price: 422.04,
    autoPay: 0,
    paycheck: 1,
    url: "https://enerbankpayments.com/#/person/login/",
    day: 16
  },
  {
    name: "Funimation",
    price: 7.99,
    paycheck: 2,
    day: 11,
    autoPay: 1
  },
  {
    name: "Gas Bill - ONG",
    priceEstimate: 50,
    autoPay: 1,
    paycheck: 2,
    url: "https://www.oklahomanaturalgas.com/",
    day: 11
  },
  {
    name: "Github",
    price: 4,
    autoPay: 1,
    paycheck: 2,
    day: 14
  },
  {
    name: "House",
    price: 970.79,
    autoPay: 1,
    paycheck: 2,
    day: 11
  },
  {
    name: "Hulu",
    price: 12.99,
    autoPay: 1,
    paycheck: 1,
    day: 21
  },
  {
    name: "Instacart Express",
    price: 9.99,
    autoPay: 1,
    paycheck: 2,
    day: 14
  },
  {
    name: "Ipsy",
    price: 27.23,
    autoPay: 1,
    paycheck: 2,
    day: 1
  },
  {
    name: "Netflix",
    price: 12.99,
    autoPay: 1,
    paycheck: 2,
    day: 4
  },
  {
    name: "Packt Pub Sub",
    price: 9.99,
    autoPay: 1,
    paycheck: 1,
    budget: 1,
    day: 19
  },
  {
    name: "JW.org",
    price: 100,
    autoPay: 1,
    paycheck: 1,
    day: 15
  },
  {
    name: "Sapulpa Times",
    price: 9.99,
    autoPay: 1,
    paycheck: 2,
    budget: 1,
    day: 28
  },
  {
    name: "State Farm",
    price: 75.41,
    autoPay: 1,
    paycheck: 1,
    day: 17
  },
  {
    name: "Trash",
    price: 21,
    autoPay: 1,
    paycheck: 1
  },
  {
    name: "Tulsa World",
    price: 10.99,
    autoPay: 1,
    paycheck: 1,
    budget: 1,
    day: 16
  },
  {
    name: "VidAngel",
    price: 9.99,
    autoPay: 1,
    paycheck: 2,
    day: 1
  },
  {
    name: "Vivint Equipment",
    price: 26.92,
    autoPay: 1,
    paycheck: 1
  },
  {
    name: "Vivint Service",
    price: 44.99,
    autoPay: 1,
    paycheck: 1
  },
  {
    name: "Water Bill",
    priceEstimate: 60,
    autoPay: 0,
    url: "https://www.municipalonlinepayments.com/bixbyok/utilities",
    paycheck: 2
  },
  {
    name: "YouTube Premium",
    price: 14.99,
    autoPay: 1,
    paycheck: 2,
    day: 14
  }
];

export default bills;
