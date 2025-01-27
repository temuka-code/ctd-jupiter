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