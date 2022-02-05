const tabs = document.querySelectorAll('.main__tab');
const mainContainer = document.querySelector('.main__container');
const contents = document.querySelectorAll('.main__hero');

const planetName = document.querySelector('.main__text-heading');
const planetImage = document.querySelector('.planet-img');
const planetDescription = document.querySelector('.main__text-paragraph');
const rotation = document.querySelector('.main__item-info-1')
const revolution = document.querySelector('.main__item-info-2')
const radius = document.querySelector('.main__item-info-3')
const temperature = document.querySelector('.main__item-info-4')

const overview = document.querySelector('.overview');
const structure = document.querySelector('.structure');
const geology = document.querySelector('.surface');

const sourceLink = document.querySelector('.main__text-source-link');
const vw = document.documentElement.clientWidth;

const hamburger = document.querySelector('.header__toggle');
const navUl = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');
const mainTabs = document.querySelector('.main__tabs');
const hero = document.querySelector('.main__hero');

const btnColors = {
    0: "419EBB",
    1: "EDA249",
    2: "6D2ED5",
    3: "D14C32",
    4: "D83A34",
    5: "CD5120",
    6: "1EC1A2",
    7: "2D68F0"
}

const planets = {
    0: "mercury",
    1: "venus",
    2: "earth",
    3: "mars",
    4: "jupiter",
    5: "saturn",
    6: "uranus",
    7: "neptune"
}

const planetSize = {
    0: {large: "290px",medium: "184px",small: "111px"},
    1: {large: "400px",medium: "253px",small: "154px"},
    2: {large: "450px",medium: "285px",small: "173px"},
    3: {large: "336px",medium: "213px",small: "129px"},
    4: {large: "582px",medium: "369px",small: "224px"},
    5: {large: "666px",medium: "422px",small: "256px"},
    6: {large: "458px",medium: "290px",small: "176px"},
    7: {large: "450px",medium: "285px",small: "173px"},
}

const geologySize = {
    large: "163px 199px",
    medium: "80px 93.25px",
    small: "50px 58.28px"
}

let currentPlanet = 0;
let currentState = 'overview';

fetchData();
changeBtn();

let data;

async function fetchData() {
    if (typeof data === 'undefined') {
        const dirtyJson = await fetch('./data.json');
        let parsedJson = await dirtyJson.json();
        data = parsedJson;

        displayInfo();
    }
    else {
        displayInfo();
    }
}

planetHandler = (inputPlanet) => {
    currentPlanet = inputPlanet;
    currentState = 'overview';
    fetchData();
    changeBtn();
}

overviewHandler = () => {
    currentState = 'overview';
    fetchData();
    changeBtn();
}

structureHandler = () => {
    currentState = 'overview';
    fetchData();
    changeBtn();
}

surfaceHandler = () => {
    currentState = 'overview';
    fetchData();
    changeBtn();
}

changeBtn = () => {
    
}




displayInfo = () => {
    const planetImage = document.querySelector('.planet-img');

    planetImage.src = obj[currentPlanet]['images']['planet'];

    const planetName = document.querySelector('.main__text-heading');
    const mainParagraph = document.querySelector('.main__text-paragraph');

    const sourceLink = document.querySelector('.main__text-source-link');

    planetName.textContent = obj[currentPlanet]['name'];
    mainParagraph.textContent = obj[currentPlanet]['overview']['content'];
    sourceLink.href = obj[currentPlanet]['overview']['source'];
    // OR sourceLink.setAttribute('href', obj[1]['overview']['source']);


    const informationCard1 = document.querySelector('.main__item-info-1')
    const informationCard2 = document.querySelector('.main__item-info-2')
    const informationCard3 = document.querySelector('.main__item-info-3')
    const informationCard4 = document.querySelector('.main__item-info-4')

    informationCard1.textContent = obj[currentPlanet]['rotation']
    informationCard2.textContent = obj[currentPlanet]['revolution']
    informationCard3.textContent = obj[currentPlanet]['radius']
    informationCard4.textContent = obj[currentPlanet]['temperature']
}





// function populateVenusOverview(obj) {
//     const planetImage = document.querySelector('.planet-img');

//     planetImage.src = obj[1]['images']['planet'];

//     const mainH1 = document.querySelector('.main__text-heading');
//     const mainParagraph = document.querySelector('.main__text-paragraph');

//     const sourceLink = document.querySelector('.main__text-source-link');

//     mainH1.textContent = obj[1]['name'];
//     mainParagraph.textContent = obj[1]['overview']['content'];
//     sourceLink.href = obj[1]['overview']['source'];
//     // OR sourceLink.setAttribute('href', obj[1]['overview']['source']);


//     const informationCard1 = document.querySelector('.main__item-info-1')
//     const informationCard2 = document.querySelector('.main__item-info-2')
//     const informationCard3 = document.querySelector('.main__item-info-3')
//     const informationCard4 = document.querySelector('.main__item-info-4')

//     informationCard1.textContent = obj[1]['rotation']
//     informationCard2.textContent = obj[1]['revolution']
//     informationCard3.textContent = obj[1]['radius']
//     informationCard4.textContent = obj[1]['temperature']
// }

// function populateVenusStructure(obj) {
//     const planetImage = document.querySelector('.planet-img');
//     planetImage.src = obj[1]['images']['internal'];


//     const mainH1 = document.querySelector('.main__text-heading');
//     const mainParagraph = document.querySelector('.main__text-paragraph');

//     const sourceLink = document.querySelector('.main__text-source-link');

//     mainH1.textContent = obj[1]['name'];
//     mainParagraph.textContent = obj[1]['structure']['content'];
//     sourceLink.href = obj[1]['structure']['source'];
//     // OR sourceLink.setAttribute('href', obj[1]['overview']['source']);


//     const informationCard1 = document.querySelector('.main__item-info-1')
//     const informationCard2 = document.querySelector('.main__item-info-2')
//     const informationCard3 = document.querySelector('.main__item-info-3')
//     const informationCard4 = document.querySelector('.main__item-info-4')

//     informationCard1.textContent = obj[1]['rotation']
//     informationCard2.textContent = obj[1]['revolution']
//     informationCard3.textContent = obj[1]['radius']
//     informationCard4.textContent = obj[1]['temperature']
// }



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
    logo.classList.toggle('active');
    mainTabs.classList.toggle('active');
    hero.classList.toggle('active');

})



mainContainer.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    
    if (id) {
        tabs.forEach(btn => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
    
        contents.forEach(content => {
            content.classList.remove('active');
        })
    
        const element = document.getElementById(id);
        element.classList.add('active');
    }
}) 