
const projects = [
  {
    name: "Personal Portfolio Website",
    image: "images/image-placeholder.png",
    alt: "image placeholder",
    description: "A responsive personal portfolio website built with HTML, CSS, and JavaScript.",
    date: "2024-05-12",
    repoUrl: "https://github.com/yourusername/portfolio-site"
  },
  {
    name: "Bash Rock–Paper–Scissors",
    image: "images/image-placeholder.png",
    alt: "image placeholder",
    description: "Rock–Paper–Scissors game written in Bash with user input validation.",
    date: "2024-10-02",
    repoUrl: "https://github.com/yourusername/bash-rps"
  },
  {
    name: "Password Generator",
    image: "images/image-placeholder.png",
    alt: "image placeholder",
    description: "A JavaScript password generator that creates secure, customizable passwords.",
    date: "2024-03-18",
    repoUrl: "https://github.com/yourusername/password-generator"
  },
  {
    name: "Weather Dashboard",
    image: "images/image-placeholder.png",
    alt: "image placeholder",
    description: "A weather dashboard that uses an API to show real-time conditions and forecasts.",
    date: "2024-06-22",
    repoUrl: "https://github.com/yourusername/weather-dashboard"
  },
  {
    name: "Event Management System",
    image: "images/image-placeholder.png",
    alt: "image placeholder",
    description: "A C# event management system using classes, inheritance, and polymorphism.",
    date: "2024-11-30",
    repoUrl: "https://github.com/yourusername/event-management-system"
  },
  {
    name: "Linux Backup Automation Tool",
    image: "images/image-placeholder.png",
    alt: "image placeholder",
    description: "A Linux file system automation tool that backs up directories on a set schedule.",
    date: "2024-09-14",
    repoUrl: "https://github.com/yourusername/linux-backup-tool"
  },
  {
    name: "Rio de Janeiro Travel Guide",
    image: "images/image-placeholder.png",
    alt: "image placeholder",
    description: "A Rio de Janeiro travel guide website built for families and older travelers.",
    date: "2024-11-09",
    repoUrl: "https://github.com/yourusername/rio-travel-guide"
  },
  {
    name: "Rafting Adventure Website",
    image: "images/image-placeholder.png",
    alt: "image placeholder",
    description: "Interactive white water rafting site designed with a family-friendly UI theme.",
    date: "2024-09-27",
    repoUrl: "https://github.com/yourusername/rafting-site"
  },
  {
    name: "Form Validation Tool",
    image: "images/image-placeholder.png",
    alt: "image placeholder",
    description: "A Node.js tool that validates user form input—including email and phone number.",
    date: "2024-12-11",
    repoUrl: "https://github.com/yourusername/form-validator"
  }
];



let projectContainer = document.querySelector('.project')

const main = document.querySelector('main');

const searchbutton = document.querySelector('.search-bar-button');

let queryable = [];


for (let p of projects){


	queryable.push([p.image, p.description,(p.date)]);
}


console.log(queryable);

// button.addEventListener('click', search);

for (let  p of projects){


	main.insertAdjacentHTML("beforeend",projectTemplate(p));


}

function projectTemplate(project) {


	return `<div class="project">
    
            <h2>${project.name}</h2>
            <div class="picture">

                <img src="${project.image}" alt= "${project.alt}">
        
            </div>
    
            
            
            <div class="project-info">
                

                <div class="split">




                    
                            
                          ${project.description};

						  ${project.date}


                          <a href="${project.repoUrl}" target="_blank">View Repository</a>

                </div>

                                
            </div>
                    

        </div>`    


}	

//Search function//

const searchbar = document.querySelector(".search-input");
searchbutton.addEventListener("click", (e) =>{

const query = searchbar.value.toLowerCase();

let toRender = [];

for (let i=0; i <queryable.length; i++){

	for (let item of queryable[i]){

		if (item.toLowerCase().includes(query) && !toRender.includes(projects[i]))
	
		{toRender.push(projects[i])}


	}



}

main.innerHTML = " ";


for (let p of toRender){

	main.insertAdjacentHTML("beforeend",projectTemplate(p));
}



});