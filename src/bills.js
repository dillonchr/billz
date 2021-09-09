// all recurring bills that we know about
// @prop paycheck - which paycheck it comes out of
//   1 = 15th of the month pay
//   2 = 30th of the month paycheck
const bills = [
  {
    name: "Cox",
    price: 113.33,
    autoPay: 1,
    paycheck: 2,
    day: 5
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
    name: "EnerBank USA",
    price: 422.04,
    autoPay: 0,
    paycheck: 1,
    url: "https://enerbankpayments.com/#/person/login/",
    day: 16
  },
  {
    name: "Gas",
    priceEstimate: 50,
    autoPay: 1,
    paycheck: 2,
    url: "https://www.oklahomanaturalgas.com/",
    day: 11
  },
  {
    name: "Ipsy",
    price: 27.23,
    autoPay: 1,
    paycheck: 2,
    day: 1
  },
  {
    name: "Chewy",
    price: 43.39,
    autoPay: 1,
    paycheck: 2,
    day: 7
  },
  {
    name: "VidAngel",
    price: 9.99,
    autoPay: 1,
    paycheck: 2,
    day: 1
  },
  {
    name: "Disney+",
    price: 6.99,
    autoPay: 1,
    paycheck: 2
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
    name: "Tulsa World",
    price: 10.99,
    autoPay: 1,
    paycheck: 1,
    budget: 1,
    day: 16
  },
  {
    name: "JW.org",
    price: 100,
    autoPay: 1,
    paycheck: 1,
    day: 15
  },
  {
    name: "Instacart Express",
    price: 9.99,
    autoPay: 1,
    paycheck: 2,
    day: 14
  },
  {
    name: "Adobe InDesign",
    price: 20.99,
    autoPay: 1,
    paycheck: 1,
    day: 11
  },
  {
    name: "Water",
    priceEstimate: 60,
    autoPay: 0,
    url: "https://www.municipalonlinepayments.com/bixbyok/utilities",
    paycheck: 2
  },
  {
    name: "Electric",
    priceEstimate: 100,
    autoPay: 0,
    url: "https://psoklahoma.com/account/bills/",
    paycheck: 2,
    day: 2
  },
  {
    name: "YouTube Premium",
    price: 14.99,
    autoPay: 1,
    paycheck: 2,
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
    name: "DigitalOcean",
    price: 10.7,
    autoPay: 1,
    paycheck: 2,
    day: 28
  },
  {
    name: "Hulu",
    price: 12.99,
    autoPay: 1,
    paycheck: 1,
    day: 21
  },
  {
    name: "Netflix",
    price: 12.99,
    autoPay: 1,
    paycheck: 2,
    day: 4
  },
  {
    name: "State Farm",
    price: 75.41,
    autoPay: 1,
    paycheck: 1,
    day: 17
  },
  {
    name: "Blue Car",
    price: 359.86,
    autoPay: 0,
    paycheck: 1
  },
  {
    name: "Trash",
    price: 21,
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
    name: "Vivint Equipment",
    price: 26.92,
    autoPay: 1,
    paycheck: 1
  },
  {
    name: "Arlo Smart",
    price: 9.99,
    autoPay: 1,
    paycheck: 1,
    day: 14
  }
];

export default bills;
