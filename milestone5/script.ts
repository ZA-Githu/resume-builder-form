let myName: any= document.getElementById("name");
console.log(" 😊 ~ myName: ",myName);    
let desig: any = document.getElementById("desig");
console.log(" 😊 ~ desig: ",desig);
let phone: any = document.getElementById("phone");
console.log(" 😊 ~ phone: ",phone);
let email: any = document.getElementById("email");
console.log(" 😊 ~ email: ",email);
let address: any = document.getElementById("address");
console.log(" 😊 ~ address: ",address);
// <1>
let pass: any = document.getElementById("pass");
console.log(" 😊 ~ pass: ",pass);
let deg: any = document.getElementById("deg");
console.log(" 😊 ~ deg: ",deg);
let uni: any = document.getElementById("uni");
console.log(" 😊 ~ uni: ",uni);
// <2>
let pass1: any = document.getElementById("pass1");
console.log(" 😊 ~ pass1: ",pass1);
let deg1: any = document.getElementById("deg1");
console.log(" 😊 ~ deg1: ",deg1);
let uni1: any = document.getElementById("uni1");
console.log(" 😊 ~ uni1: ",uni1);
// <3>
let pass2: any = document.getElementById("pass2");
console.log(" 😊 ~ pass2: ",pass2);
let deg2: any = document.getElementById("deg2");
console.log(" 😊 ~ deg2: ",deg2);
let uni2: any = document.getElementById("uni2");
console.log(" 😊 ~ uni2: ",uni2);
// <4>
let pass3: any = document.getElementById("pass3");
console.log(" 😊 ~ pass3: ",pass3);
let deg3: any = document.getElementById("deg3");
console.log(" 😊 ~ deg3: ",deg3);
let uni3: any = document.getElementById("uni3");
console.log(" 😊 ~ uni3: ",uni3);
// <1>
let skill1: any = document.getElementById("skill1");
console.log(" 😊 ~ skill1: ",skill1);
// <2>
let skill2: any = document.getElementById("skill2");
console.log(" 😊 ~ skill2: ",skill2);
// <3>
let skill3: any = document.getElementById("skill3");
console.log(" 😊 ~ skill3: ",skill3);
// <4>
let skill4: any = document.getElementById("skill4");
console.log(" 😊 ~ skill4: ",skill4);
// <5>
let skill5: any = document.getElementById("skill5");
console.log(" 😊 ~ skill5: ",skill5);
// <1>
let language1: any = document.getElementById("lang1");
console.log(" 😊 ~ lang1: ",language1);
// <2>
let language2: any = document.getElementById("lang2");
console.log(" 😊 ~ lang2: ",language2);
let styear: any = document.getElementById("styear");
console.log(" 😊 ~ styear: ",styear);
let endyear: any = document.getElementById("endyear");
console.log(" 😊 ~ endyear: ",endyear);
let company: any = document.getElementById("company");
console.log(" 😊 ~ company: ",company);
let comlocation: any = document.getElementById("comlocation");
console.log(" 😊 ~ comlocation: ",comlocation);
let jobTitle: any = document.getElementById("jobTitle");
console.log(" 😊 ~ jobTitle: ",jobTitle);
// <1>
let achv1: any = document.getElementById("achv1");
console.log(" 😊 ~ achv1: ",achv1);
// <2>
let achv2: any = document.getElementById("achv2");
console.log(" 😊 ~ achv2: ",achv2);
// <3>
let achv3: any = document.getElementById("achv3");
console.log(" 😊 ~ achv3: ",achv3);




let submitBtn = document.getElementById("submitBtn");

let form = document.getElementById("form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("name", myName.value);
  localStorage.setItem("desig", desig.value);
  localStorage.setItem("phone", phone.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("address", address.value);
  localStorage.setItem("pass", pass.value);
  localStorage.setItem("deg", deg.value);
  localStorage.setItem("uni", uni.value);
  localStorage.setItem("pass1", pass1.value);
  localStorage.setItem("deg1", deg1.value);
  localStorage.setItem("uni1", uni1.value);
  localStorage.setItem("pass2", pass2.value);
  localStorage.setItem("deg2", deg2.value);
  localStorage.setItem("uni2", uni2.value);
  localStorage.setItem("pass3", pass3.value);
  localStorage.setItem("deg3", deg3.value);
  localStorage.setItem("uni3", uni3.value);
  localStorage.setItem("skill1", skill1.value);
  localStorage.setItem("skill2", skill2.value);
  localStorage.setItem("skill3", skill3.value);
  localStorage.setItem("skill4", skill4.value);
  localStorage.setItem("skill5", skill5.value);
  localStorage.setItem("language1", language1.value);
  localStorage.setItem("language2", language2.value);
  localStorage.setItem("styear", styear.value);
  localStorage.setItem("endyear", endyear.value);
  localStorage.setItem("company", company.value);
  localStorage.setItem("jobTitle", jobTitle.value);
  localStorage.setItem("achv1", achv1.value);
  localStorage.setItem("achv2", achv2.value);
  localStorage.setItem("achv3", achv3.value);

 window.location.href = "./resume/index.html"

 
})
