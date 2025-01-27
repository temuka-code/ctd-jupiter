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
let messageForms = document.getElementsByName("leave_message")
console.log(messageForms);
let messageForm = messageForms[0];

let messageSection = document.getElementById("message-section");
messageSection.hidden = true;

const messageList = messageSection.querySelector("ul");
console.log(messageList);
messageSection.hidden=true;

messageForm.addEventListener("submit",  (event)=> {
    
    event.preventDefault();
    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;
    // console.log(userName);
    // console.log(email);
    // console.log(usersMessage);

    //Create new message list item
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span>${message}</span>`;

    //Create and append the removeButton
    let removeButton = createRemoveButton();
    newMessage.appendChild(removeButton);


    //show the message section if it was hidden
    messageSection.hidden = false;

    //Append the newMessage to the list
    messageList[0].appendChild(newMessage);

    //reset the form
    event.target.reset();

});