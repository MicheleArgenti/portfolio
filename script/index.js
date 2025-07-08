//sdocument.getElementById('year').textContent = new Date().getFullYear();

async function getProjectData() {
    const response = await fetch('./data/projects.json');
    const data = await response.json();
    console.log(data);
    displayProjects(data);
}

const displayProjects = (data) => {
    let main = document.getElementById('project-grid');
    data.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('project-card');
        div.innerHTML = `
            <h3>${element.title}</h3>
            <p>${element.description}</p>
            <div class="project-link-container">
                <img src="${element.logo}" alt="${element.title}">
                <a href="${element.url}" class="project-link">View Project →</a>
            </div>
        `;
        main.appendChild(div);
    });
}

getProjectData();