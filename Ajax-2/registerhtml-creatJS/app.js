const sectionLogin = document.createElement("section");
sectionLogin.className = "vh-100";
sectionLogin.style.backgroundColor = "#eee";
// the con cua the section
const container = document.createElement("div");
container.className = "container h-100";

// the con cua the container
const row = document.createElement("div");
row.className = "row d-flex justify-content-center align-items-center h-100";
// the con cua the row
const col = document.createElement("div");
col.className = "col-lg-12 col-xl-7";
// the con cua the col
const card = document.createElement("div");
card.className = "card text-black";
card.style.borderRadius = "25px";

// the con cua the card
const cardBody = document.createElement("div");
cardBody.className = "card-body p-md-5";
// the con cua the cardBody
const cardCenter = document.createElement("div");
cardCenter.className = "row justify-content-center";
// cac the con cua cardCenter
const cardCenterChild = document.createElement("div");
cardCenterChild.className = "col-md-10 col-lg-7 col-xl-5 order-2 order-lg-1";
// the con cua the cardCenterChild : p
const pChild = document.createElement("p");
pChild.className = "text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4";
pChild.innerText = "Sign up";
// the con cua the cardCenterChild : form
const form = document.createElement("form");
form.className = "mx-1 mx-md-4";
// the form child : 5 div
//----------------------------------------------------------------
// div 1 : chua the lable>i va div>input
const divChildFormName = document.createElement("div");
divChildFormName.className = "d-flex flex-row align-items-center mb-4";
// the lable
const lableName = document.createElement("label");
lableName.className = "form-label";
lableName.htmlFor = "name";
// lable>i
const iconName = document.createElement("i");
iconName.className = "fas fa-user fa-lg me-3 fa-fw";
lableName.appendChild(iconName);
// div (input)
const divInputName = document.createElement("div");
divInputName.className = "form-outline flex-fill mb-0";
// div>input
const inputName = document.createElement("input");
inputName.className = "form-control";
inputName.id = "name";
inputName.type = "text";
inputName.placeholder = "Your Name";
divInputName.appendChild(inputName);

divChildFormName.appendChild(lableName);
divChildFormName.appendChild(divInputName);

//----------------------------------------------------------------

//----------------------------------------------------------------
// div 2 : chua the lable>i va div>input
const divChildFormEmail = document.createElement("div");
divChildFormEmail.className = "d-flex flex-row align-items-center mb-4";
// the lable
const lableEmail = document.createElement("label");
lableEmail.className = "form-label";
lableEmail.htmlFor = "email";
// lable>i
const iconEmail = document.createElement("i");
iconEmail.className = "fas fa-envelope fa-lg me-3 fa-fw";
lableEmail.appendChild(iconEmail);
// div (input)
const divInputEmail = document.createElement("div");
divInputEmail.className = "form-outline flex-fill mb-0";
// div>input
const inputEmail = document.createElement("input");
inputEmail.className = "form-control";
inputEmail.id = "email";
inputEmail.type = "email";
inputEmail.placeholder = "Your Email";
divInputEmail.appendChild(inputEmail);

divChildFormEmail.appendChild(lableEmail);
divChildFormEmail.appendChild(divInputEmail);

//----------------------------------------------------------------
//----------------------------------------------------------------
// div 3 : chua the lable>i va div>input
const divChildFormPass = document.createElement("div");
divChildFormPass.className = "d-flex flex-row align-items-center mb-4";
// the lable
const lablePass = document.createElement("label");
lablePass.className = "form-label";
lablePass.htmlFor = "password";
// lable>i
const iconPass = document.createElement("i");
iconPass.className = "fas fa-lock fa-lg me-3 fa-fw";
lablePass.appendChild(iconPass);
// div (input)
const divInputPass = document.createElement("div");
divInputPass.className = "form-outline flex-fill mb-0";
// div>input
const inputPass = document.createElement("input");
inputPass.className = "form-control";
inputPass.id = "password";
inputPass.type = "password";
inputPass.placeholder = "Password";
divInputPass.appendChild(inputPass);

divChildFormPass.appendChild(lablePass);
divChildFormPass.appendChild(divInputPass);

//----------------------------------------------------------------
//----------------------------------------------------------------
// div 4 : chua the lable>i va div>input
const repeatPassDiv = document.createElement("div");
repeatPassDiv.className = "d-flex flex-row align-items-center mb-4";
// the lable
const lableRepeatPass = document.createElement("label");
lableRepeatPass.className = "form-label";
lableRepeatPass.htmlFor = "repeatPassword";
// lable>i
const iconRepeatPass = document.createElement("i");
iconRepeatPass.className = "fas fa-key fa-lg me-3 fa-fw";
lableRepeatPass.appendChild(iconRepeatPass);
// div (input)
const divInputRepeatPass = document.createElement("div");
divInputRepeatPass.className = "form-outline flex-fill mb-0";
// div>input
const inputRepeatPass = document.createElement("input");
inputRepeatPass.className = "form-control";
inputRepeatPass.id = "repeatPassword";
inputRepeatPass.type = "password";
inputRepeatPass.placeholder = "Repeat your Password";
divInputRepeatPass.appendChild(inputRepeatPass);

repeatPassDiv.appendChild(lableRepeatPass);
repeatPassDiv.appendChild(divInputRepeatPass);

//----------------------------------------------------------------
//----------------------------------------------------------------
// div 5 : chua the lable>i va div>input
const divBtn = document.createElement("div");
divBtn.className = "d-flex justify-content-center mx-4 mb-3 mb-lg-4";
// the div> button
const buttonRegist = document.createElement("button");
buttonRegist.className = "btn btn-primary btn-lg";
buttonRegist.type = "button";
buttonRegist.innerText = "Register";
divBtn.appendChild(buttonRegist);
//----------------------------------------------------------------

sectionLogin.appendChild(container);
container.appendChild(row);
row.appendChild(col);
col.appendChild(card);
card.appendChild(cardBody);
cardBody.appendChild(cardCenter);
cardCenter.appendChild(cardCenterChild);
// trong the cardCenterChild co 2 the con : p va form
cardCenterChild.appendChild(pChild);
cardCenterChild.appendChild(form);

form.appendChild(divChildFormName);
form.appendChild(divChildFormEmail);
form.appendChild(divChildFormPass);
form.appendChild(repeatPassDiv);
form.appendChild(divBtn);
document.querySelector(".root").appendChild(sectionLogin);
console.log(sectionLogin);
