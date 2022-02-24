function spinnerAdd(){
    const change = document.body;
    const spins = document.getElementById('spins')
if(change == ''){
    spins.style.display = 'block';
}else{
    change.style.backgroundColor = 'red';
}
};

spinnerAdd()
const loadSports = () =>{
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(res => res.json())
    .then(data => displaySports(data.sports))
}
loadSports()
const displaySports = sport =>{
    // console.log(sport)
    const container = document.getElementById('container');
    for(const addSport of sport){
        // console.log(addSport);
        const div = document.createElement('div');
        div.classList.add('containers')
        div.innerHTML = `
        <div  onclick="clicks('${addSport.idSport}')" class="col">
        <img src="${addSport.strSportThumb}">
              <div class="card h-100 ">    
                <div class="card-body">
                  <h5 class="card-title">${addSport.strSport}</h5>
                  <p class="card-text">${addSport.strSportDescription.slice(0, 200)}</p>
                </div>
              </div>
        </div>
        `;
        container.appendChild(div)
    }
}
// const clicks = useId =>{ 
//     console.log(useId)
//     fetch(`https://www.thesportsdb.com/api/v1/json/2/all_sports.php?`)
//     .then(res => res.json())
//     .then(data => display(data.sports))
// }
// const display = getData =>{
//     // console.log(getData)
//     const contain  = document.getElementById('contain')
//     for(const addId of getData){
//         console.log(addId)
//         const div = document.createElement('div');
//         div.innerHTML = `
//         <h5 class="card-title">${addId.strSport}</h5>
//                   <p class="card-text">${addId.strSportDescription.slice(0, 200)}</p>
//         `
//         contain.appendChild(div)
//     }
// }
const search =() => {
    const searchinput = document.getElementById('search-input');
   const inputValue =  searchinput.value;
    fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=${inputValue}`)
    .then(res => res.json())
    .then(data => console.log(data))
}
