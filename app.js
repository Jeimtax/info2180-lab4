
let search = document.querySelector('.btn');

search.addEventListener('click', async function (){
    let heroes = await fetch('http://localhost:8080/info2180-ajax-superheroes-master/superheroes.php');
    let resp = await heroes.text();
    alert(resp);
    
})