// created a footer and add it to the body
const footer = document.createElement('footer');
const body = document.querySelector('body');
body.appendChild(footer);

// Added a copyright to the footer
const today = new Date();
const year = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML= `<span>&#169 ${year} Tom N<\span>`
footer.appendChild(copyright);

// populated the skills list
const skillsList = [ 'Javascript', 'C++', 'powerpoint'];
const skillsSection = document.getElementById('skills');
const skillsUList = skillsSection.querySelector('ul');

for (let skill of skillsList) {
    let skillLists = document.createElement('li');
    skillLists.innerHTML = skill;
    skillsUList.appendChild(skillLists);  
}

//Handle events for message form 
let messageForms = document.getElementById("messageForm")
console.log(messageForms);
let messageForm = messageForms[0];

let messageSection = document.getElementById("message_section");
messageSection.hidden = true; 

let messageList = messageSection.getElementsByTagName("ul");
console.log(messageList);
messageSection.hidden=true;

messageForms.addEventListener("submit",(event)=>{
    
    event.preventDefault();
    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;
    // console.log(name);
    // console.log(email);
    // console.log(message);

    //Creating new message list item
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span>${message}</span>`;

    // removeButton
    const deleteButton = createDeleteButton();
    newMessage.appendChild(deleteButton);


    
    messageSection.hidden = false;

    //append 
    messageList[0].appendChild(newMessage);
        
    event.target.reset();

});
function createDeleteButton() {
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("type", "button");
    deleteButton.addEventListener("click", function() {
        const entry = deleteButton.parentNode;
        entry.remove();

    });
    return deleteButton;
    
};