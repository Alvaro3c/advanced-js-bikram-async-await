//DESARROLLA AQUI TUS SOLUCIONES

//1
async function getRandomPokemon() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    let data = await response.json();
    let random = Math.floor(Math.random() * data.results.length);
    let SecondResponse = await fetch(data.results[random].url);
    let data2 = await SecondResponse.json();
    return data2;
}

//conseguir un array de pokemons
//sacar un numero aleatorio para ponerselo en el indice
//2
async function getImageAndName() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/charmander')
    let data = await response.json();
    return { name: data.name, img: data.sprites.front_default }
};

//3
async function printImageAndName() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/charmander')
    let data = await response.json();
    return `<section>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h1>${data.name}</h1>
            </section>`;
};
console.log(printImageAndName());
//4
async function getRandomDogImage() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let data = await response.json();
    return data.message;
}

//5
async function getRandomPokemonImage() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    let data = await response.json();
    let random = Math.floor(Math.random() * data.results.length);
    let SecondResponse = await fetch(data.results[random].url);
    let data2 = await SecondResponse.json();
    return data2.sprites.front_default;
}

//6
async function printPugVsPikachu() {
    let responseDog = await fetch("https://dog.ceo/api/breed/pug/images/random");
    let data = await responseDog.json();
    let dogPhoto = data.message;

    let responsePokemon = await fetch('https://pokeapi.co/api/v2/pokemon/charmander')
    let dataPokemon = await responsePokemon.json()
    let pokePhoto = dataPokemon.sprites.front_default

    let main = document.querySelector('main')
    let imgDog = document.createElement('img')
    imgDog.src = dogPhoto
    main.appendChild(imgDog)

    let p = document.createElement('p')
    p.innerHTML = 'VS'
    main.appendChild(p)

    let imgPoke = document.createElement('img')
    imgPoke.src = pokePhoto
    main.appendChild(imgPoke)
};
printPugVsPikachu()
//7
async function getRandomCharacter() {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    let random = Math.floor(Math.random() * data.info.count);
    let response2 = await fetch(`https://rickandmortyapi.com/api/character/${random}`);
    let data2 = await response2.json();
    return data2;
}

///rickandmortyapi.com/api/characters
//8
async function getRandomCharacterInfo() {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    let random = Math.floor(Math.random() * data.info.count);
    let response2 = await fetch(`https://rickandmortyapi.com/api/character/${random}`);
    let data2 = await response2.json();

    console.log(data2);
    let responseEpisode = await fetch('https://rickandmortyapi.com/api/episode/10');
    let dataEpisode = await responseEpisode.json();

    return { img: data2.image, name: data2.name, episodes: data2.episode, firstEpisode: dataEpisode.name, dateEpisode: dataEpisode.air_date }
}

//conseguir el NOMBRE de los EPISODIOS en los que aparece dicho personaje

//9
function printCharacter() {
    const character = getRandomCharacterInfo();
    const { img, name, episodes, firstEpisode, dateEpisode } = character;
    const card = `<article>
                        <img src="${img}" alt="${name}">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </article>`
}