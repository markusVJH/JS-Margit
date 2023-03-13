let limit = 0;
let offset = 0;

function fetchData(limit, offset) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  fetch(url)
        .then(response => response.json())
        .then(json => {
  
          const fetches = json.results.map(item => {
            return fetch(item.url).then(res => res.json())
          })
  
  
          Promise.all(fetches).then(res => { dataList(res);console.log(res);})
        })
  
  const dataList = (data) => {
    {
      document.querySelector('#pokeCards').innerHTML = data.map((item, i) => `<div class="pokeCard"><div class="pokeInfo">#${item.id} ${item.name}<div class="pokeType">${item.types.map(t => `<img id="type" src="https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${t.type.name}.svg" alt="${t.type.name}"/>`).join('')}</div></div><img src="${item.sprites.front_default}"/></div>`).join('');
    };
  }
}
const gen1 = document.querySelector('#gen1')
const gen2 = document.querySelector('#gen2')
const gen3 = document.querySelector('#gen3')
const gen4 = document.querySelector('#gen4')
const gen5 = document.querySelector('#gen5')
const gen6 = document.querySelector('#gen6')
const gen7 = document.querySelector('#gen7')
const gen8 = document.querySelector('#gen8')
const gen9 = document.querySelector('#gen9')
let genTitle = document.querySelector('#genTitle')
let introTitle = document.querySelector('#introTitle')
let search = document.querySelector('#search')
let dropdown = document.querySelector('.dropdown')


gen1.addEventListener('click', function() {
  genTitle.textContent = 'Generation 1'
  fetchData(151,0)
  introTitle.style.display = 'none'
  search.style.display = 'block'
  dropdown.style.display = 'inline-block'
});
gen2.addEventListener('click', function() {
  genTitle.textContent = 'Generation 2'
  fetchData(100,151)
  introTitle.style.display = 'none'
  search.style.display = 'flex'
  dropdown.style.display = 'inline-block'
});
gen3.addEventListener('click', function() {
  genTitle.textContent = 'Generation 3'
  fetchData(135,251)
  introTitle.style.display = 'none'
  search.style.display = 'flex'
  dropdown.style.display = 'inline-block'
});
gen4.addEventListener('click', function() {
  genTitle.textContent = 'Generation 4'
  fetchData(107,386)
  introTitle.style.display = 'none'
  dropdown.style.display = 'inline-block'
});
gen5.addEventListener('click', function() {
  genTitle.textContent = 'Generation 5'
  fetchData(156,493)
  introTitle.style.display = 'none'
  search.style.display = 'flex'
  dropdown.style.display = 'inline-block'
});
gen6.addEventListener('click', function() {
  genTitle.textContent = 'Generation 6'
  fetchData(72,649)
  introTitle.style.display = 'none'
  search.style.display = 'flex'
  dropdown.style.display = 'inline-block'
});
gen7.addEventListener('click', function() {
  genTitle.textContent = 'Generation 7'
  fetchData(88,721)
  introTitle.style.display = 'none'
  search.style.display = 'flex'
  dropdown.style.display = 'inline-block'
});
gen8.addEventListener('click', function() {
  genTitle.textContent = 'Generation 8'
  fetchData(96,809)
  introTitle.style.display = 'none'
  search.style.display = 'flex'
  dropdown.style.display = 'inline-block'
});
gen9.addEventListener('click', function() {
  genTitle.textContent = 'Generation 9'
  fetchData(110,905)
  introTitle.style.display = 'none'
  search.style.display = 'flex'
  dropdown.style.display = 'inline-block'
});



//searchpokemon
const searchPokemon = (e) => {
  searchValue = e.target.value;
  filterList =
  searchValue.length >= 0
  ? pokemonData.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchValue); //if includes type
  })
  : pokemonData;
  pokeCards(filterList);
};
