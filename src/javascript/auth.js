const users = [
    { username: 'aksal0tel', password: 'alex513' }
];

const loginPage = document.getElementById('loginPage');
const cmsPanel = document.getElementById('cmsPanel');
const loginForm = document.getElementById('loginForm');
const errorText = document.getElementById('error');
const logoutBtn = document.getElementById('logoutBtn');
const projectsList = document.getElementById('projects-list');
const addProjectBtn = document.getElementById('addProjectBtn');

function authenticateUser(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    return user ? true : false;
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (authenticateUser(username, password)) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.reload();
    } else {
        errorText.textContent = 'Неверный логин или пароль';
    }
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
});

function checkSession() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        loginPage.classList.add('hidden');
        cmsPanel.classList.remove('hidden');
        loadProjects();
    } else {
        loginPage.classList.remove('hidden');
        cmsPanel.classList.add('hidden');
    }
}

function loadProjects() {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    projectsList.innerHTML = '';
    
    storedProjects.forEach((project, index) => {
        const div = document.createElement('div');
        div.classList.add('project-item');
        div.innerHTML = `
            <div>
                <input type="text" value="${project.title}" onchange="editProjectTitle(${index}, this.value)" />
                <input type="text" value="${project.imgSrc}" onchange="editProjectImage(${index}, this.value)" />
            </div>
            <button onclick="deleteProject(${index})">Удалить</button>
        `;
        projectsList.appendChild(div);
    });
}

function editProjectTitle(index, newTitle) {
    let storedProjects = JSON.parse(localStorage.getItem('projects'));
    storedProjects[index].title = newTitle;
    localStorage.setItem('projects', JSON.stringify(storedProjects));
}

function editProjectImage(index, newImgSrc) {
    let storedProjects = JSON.parse(localStorage.getItem('projects'));
    storedProjects[index].imgSrc = newImgSrc;
    localStorage.setItem('projects', JSON.stringify(storedProjects));
}

addProjectBtn.addEventListener('click', () => {
    const newProject = {
        title: 'Новый проект',
        imgSrc: '/src/images/IMG.png'
    };
    
    let storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    storedProjects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(storedProjects));
    
    loadProjects();
});

function deleteProject(index) {
    let storedProjects = JSON.parse(localStorage.getItem('projects'));
    storedProjects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(storedProjects));
    loadProjects();
}

checkSession();
