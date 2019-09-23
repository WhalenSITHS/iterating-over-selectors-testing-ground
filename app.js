
const testArr = [];
let namesArr = [];


function createNamesArray(){
    const names = document.querySelectorAll('.name');
    namesArr = Array.from(names);
    //console.log(namesArr);
}
createNamesArray();
function init() {
    //document.getElementById('pkmn-form').addEventListener('submit', function(e){
        //e.preventDefault();
        //const pkmnName = document.querySelector('#pokemon-name').value;
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
        .then(result => {
            return result.json();
        })
        .then(data => {
            //console.log(data);
            //const test = Array.from(data.results);
           // return test;
           //testArr.push(data.results);
           data.results.map(function(e) {
               testArr.push(e);
           });
            //console.log(testArr);
            function testBank(){
                /* testArr.forEach(function(element) {
                    for (i = 0; i < namesArr.length; i++){
                        namesArr[i].textContent = element.name;
                    }
                    //namesArr[0].textContent = element.name;
                    //console.log(element.name);
                }) */

                for (i = 0; i < namesArr.length; i++){
                    namesArr[i].textContent = testArr[i].name;
                }
            }
            testBank();
        })
    
}
init(); 

