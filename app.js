
let search = document.getElementById('searchForm');
let field = document.getElementById('hero');
let result = document.getElementById('result')


search.addEventListener('submit', async function (e){
    e.preventDefault();

    let query = field.value.trim();

    query = query.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    let url = 'http://localhost:8080/info2180-ajax-superheroes-master/superheroes.php';

    if (query !== ""){
        url += "?query=" + encodeURIComponent(query);
    }

    let heroes = await fetch(url);
    let resp = await heroes.text();

    result.innerHTML = resp;
    


    
});