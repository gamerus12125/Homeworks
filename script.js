"use strict";

//task 1
class Worker {
  constructor(firstName, lastName, rate, days) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.rate = rate;
    this.days = days;
  }
  getSalary = () => {
    let salary = this.rate * this.days;
    console.log(salary);
  };
}
class Developer extends Worker {
  constructor(firstName, lastName, rate, days, skill, company) {
    super(firstName, lastName, rate, days);
    this.skill = skill;
    this._company = company;
  }
  getProfile() {
    let salary = this.rate * this.days;
    console.log(this.firstName, this.lastName, this.rate, salary, this.skill);
  }
  get company() {
    console.log(this._company);
  }
}
let salary = new Worker("John", "Doe", "100", "7");
salary.getSalary();
let developer = new Developer(
  "Mike",
  "Doe",
  "200",
  "6",
  "experienced",
  "Microsoft"
);
developer.getProfile();

//task 2

const props = {
  user: {
    login: "Admin",
    password: "1234",
  },
  info: {
    protocol: "https",
    host: "123.45.6.7",
    port: "1234",
  },
};

const { login, password } = props.user;
const { protocol, host, port } = props.info;
console.log(login, password, protocol, host, port);

//stask 3

const coordinates = [12, 134, 567, 456, 13, 14];
let [first, , , fourth, , sixth] = coordinates;
console.log(first, fourth, sixth);
