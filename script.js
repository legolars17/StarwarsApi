const searchField = document.querySelector('.search-field')
const searchButton = document.querySelector('.search-button')
const output = document.querySelector('.info')
const searchType =document.querySelector('.search-type')

searchButton.addEventListener('click', () => {
    const type = searchType.value
    if (type === 'people') {
        getCharacter()
    }   else if (type === 'planets') {
        getPlanets()
    } 
})

async function getCharacter() {
    const baseUrl = 'https://swapi.dev/api/people/'
    const query = `?search=${searchField.value}`
    const settings = {
        method: 'GET',
        contentType: 'application/json',
    }

    const response = await fetch(baseUrl + query, settings)
    const data = await response.json()

    console.log(data)

    let outputText = ''
    for (let i = 0; i < data.results.length; i++) {
        const character = data.results[i]
        const name = character.name
        const height = character.height
        const mass = character.mass
        const eyes = character.eye_color
        const hair = character.hair_color
        const birthYear = character.birth_year
        outputText += `Namn: ${name}\n Längd: ${height} cm\n Vikt: ${mass} kg\n Ögonfärg: ${eyes}\n Hårfärg: ${hair}\n Födelseår: ${birthYear}\n\n`
        console.log(name)
    }

    output.innerText = outputText
}

async function getPlanets() {
    const baseUrl = 'https://swapi.dev/api/planets/'
    const query = `?search=${searchField.value}`
    const settings = {
        method: 'GET',
        contentType: 'application/json',
    }

    const response = await fetch(baseUrl + query, settings)
    const data = await response.json()

    console.log(data)

    let outputText = ''
    for (let i = 0; i < data.results.length; i++) {
        const planet = data.results[i]
        const name = planet.name
        const population = planet.population
        const diameter = planet.diameter
        const terrain = planet.terrain
        outputText += `Namn: ${name}\n Folkmängd: ${population}\n Diameter: ${diameter} km\n Terräng: ${terrain}\n\n`
        console.log(name)
    }

    output.innerText = outputText
}




