const health = document.querySelector('#health');
const level = document.querySelector('#level');




// health.addEventListener("click", function(){

//     console.log("health");
//     health.
// })
// level.addEventListener("click", function(){

//     console.log("level");
// })


const cardStats = {

    class: 'Swamp Master',

    sections: [ {label:'Health', value: 10}, {label: 'level', value: 0}

    ]

};


function sectionTemplate(section) {
    return `
    <tr>

      <td>${section.label}:</td>
      <td>${section.value}</td>
      
      </tr>
      `;


}


function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}
    

renderSections(cardStats.sections);


 health.addEventListener("click", function() {

    console.log("you got attacked");
      cardStats.sections[0].value -= 1; 
      if (cardStats.sections[0].value < 0) {

        cardStats.sections[0].value = 10;
        alert("🎃 You Died!");
      }
      renderSections(cardStats.sections);
    });
    
 level.addEventListener("click", function() {

     console.log("you got leveled up");
      cardStats.sections[0].value += 1; 
      renderSections(cardStats.sections);
    });
    
    
    

    

        


    
    
       

    




