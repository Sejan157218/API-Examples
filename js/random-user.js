const randomUser = () => {
    fetch('https://randomuser.me/api/?results=9')
        .then(res => res.json())
        .then(data => userR(data))
}
randomUser();
const userR = users =>{
    const userArray = users.results;
    for(const user of userArray){
        const div = document.getElementById('div-random');
        const p = document.createElement('p');
        p.innerText = `
        name : ${user.name.title} ${user.name.first} ${user.name.last}

        email : ${user.email}
        `
        p.style.border = '2px solid blue';
        p.style.margin = '2px';
        div.appendChild(p);  
    }
}