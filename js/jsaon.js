
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => display(data))
}
loadData()
function display(data){
    const container = document.getElementById('container');
    for(const comment of data){
        // console.log(comment);
        const div = document.createElement('div');
        div.innerHTML = `
        <div onclick="Details('${comment.id}')"> 
        <h3>${comment.name}</h3>
        <p> ${comment.email}</p>
        </div>
        `;
        container.appendChild(div)
    }
}
const Details = deta =>{
    console.log(deta)
    fetch(`https://jsonplaceholder.typicode.com/comments?id=${deta}`)
    .then(res => res.json())
    .then(data => load(data))
}
const load =  useId =>{
    console.log(useId)
    const mainbox = document.getElementById('mainbox');
    const div = document.createElement('div');
    mainbox.textContent = '';
    div.innerHTML = `
    <h3>${useId[0].name}</h3>
    <p> ${useId[0].email}</p>
    `;
    mainbox.appendChild(div)
}
