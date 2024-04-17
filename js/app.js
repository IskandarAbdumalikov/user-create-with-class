let USERS = JSON.parse(localStorage.getItem("users")) || [
  {
    fname: "Boburmirzo",
    lname: "Abduvaliyev",
    birthdate: 1999,
    profession: "teacher",
    address: "Tashkent",
  },
  {
    fname: "Iskandar",
    lname: "Abdumalikov",
    birthdate: 2007,
    profession: "student",
    address: "Jizzax",
  },
  {
    fname: "Azizbek",
    lname: "Tolipov",
    birthdate: 2002,
    profession: "admin",
    address: "Tashkent",
  },
];

const tbody = document.querySelector(".tbody");
let form = document.querySelector(".form");
let table = document.querySelector(".table");
let tableWrapper = document.querySelector(".table__wrapper");
let fnameInput = document.querySelector("#user__fname__input");
let lnameInput = document.querySelector("#user__lname__input");
let birthdateInput = document.querySelector("#user__birthdate__input");
let addressInput = document.querySelector("#user__address__input");
let selectProfession = document.querySelector("#user__profession__select");
let addUserBtn = document.querySelector(".add__user");
let cancelBtn = document.querySelector(".cancel__btn");
let addBtn = document.querySelector(".add__btn");



class Users {
  constructor(fname, lname, birthdate, profession, address) {
    this.fname = fname;
    this.lname = lname;
    this.birthdate = birthdate;
    this.profession = profession;
    this.address = address;
  }
}

class Student extends Users {
  constructor(fname, lname, birthdate, profession, address) {
    super(fname, lname, birthdate, profession, address);
  }
}

class Teacher extends Users {
  constructor(fname, lname, birthdate, profession, address) {
    super(fname, lname, birthdate, profession, address);
  }
}

class Admin extends Users {
  constructor(fname, lname, birthdate, profession, address) {
    super(fname, lname, birthdate, profession, address);
  }
}

function createTableData(data) {
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }
  data.forEach((user, index) => {
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.birthdate}</td>
            <td>${user.profession}</td>
            <td>${user.address}</td>
            
        `;
    tbody.appendChild(tableRow);
  });
}
createTableData(USERS);

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let student = new Student(fnameInput.value,lnameInput.value,birthdateInput.value,selectProfession.value,addressInput.value)
  USERS.push(student);
  localStorage.setItem("users", JSON.stringify(USERS));
  createTableData(USERS);
  fnameInput.value = ""
  lnameInput.value = "";
  birthdateInput.value = "";
  selectProfession.value = "";
  addressInput.value = ""
});

addUserBtn.addEventListener("click",()=>{
   form.classList.add("show__form")
   tableWrapper.classList.add("remove__table")
})

cancelBtn.addEventListener("click", () => {
  form.classList.remove("show__form");
  tableWrapper.classList.remove("remove__table");
});
