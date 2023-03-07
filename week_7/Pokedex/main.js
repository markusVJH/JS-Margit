/* fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => response.json())
      .then(json => dataList(json.results))

const dataList = (data) => {

  document.querySelector('.pokeList').innerHTML = data.map(item => `<li>${item.name}</li>`).join('')

} */
fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=60')
      .then(response => response.json())
      .then(json => {

        const fetches = json.results.map(item => {
          return fetch(item.url).then(res => res.json())
        })


        Promise.all(fetches).then(res => { dataList(res);console.log(res);})
      })
        
        

     

{/* <img src="${item.sprites.front_default}"> */}

const dataList = (data) => {
  {
    document.querySelector('#pokeCards').innerHTML = data.map((item, i) => `<div class="pokeCard"><div class="pokeName">${item.name}</div><img src="${item.sprites.other.dream_world.front_default}"/></div>`).join('');
  };

 

}

 /* document.querySelector('#pokeCards').innerHTML = data.map(item, i => `<div class="pokeCard"><div class="pokeName">${item.name}</div><img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg/></div>`).join('') */