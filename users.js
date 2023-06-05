const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => displayUser(data))
}
loadUsers()
const displayUser = (data) => {
    const users = data.results;
    const userDiv = document.getElementById('html-user')
    for (const user of users) {
        const div = document.createElement('div')
        div.classList.add('user')
        div.innerHTML = ` <img src="${user.picture.large}" alt="">
         <p>Name : <span>${user?.name?.title} ${user.name.first} ${user.name.last}</span></p>
          <p> Email : <span>${user?.email}</p>
          <p> Location : <span> ${user?.location?.street?.number} , ${user?.location?.street?.name} </span></p>
       `

        userDiv.appendChild(div)
        // prepend
    }
}