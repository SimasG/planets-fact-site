const tabs = document.querySelectorAll('.main__tab');
const mainContainer = document.querySelector('.main__container');
const contents = document.querySelectorAll('.main__hero');

const menuBtnMobile = document.querySelectorAll('.header__menu-item');

const planetName = document.querySelector('.main__text-heading');
const planetImage = document.querySelector('.planet-img');
const planetDescription = document.querySelector('.main__text-paragraph');

const rotation = document.querySelector('.main__item-info-1')
const revolution = document.querySelector('.main__item-info-2')
const radius = document.querySelector('.main__item-info-3')
const temperature = document.querySelector('.main__item-info-4')

const overview = document.querySelector('.overview');
const structure = document.querySelector('.structure');
const surface = document.querySelector('.surface');
const overviewMobile = document.querySelector('.overview-mobile');
const structureMobile = document.querySelector('.structure-mobile');
const surfaceMobile = document.querySelector('.surface-mobile');


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
let currentStateMobile = 'overview-mobile';


planetHandler = (inputPlanet) => {
    currentPlanet = inputPlanet;
    currentState = 'overview';
    currentStateMobile = 'overview-mobile'
    fetchData();
    changeBtn();
}

overviewHandler = () => {
    currentState = 'overview';
    currentStateMobile = 'overview-mobile'
    fetchData();
    changeBtn();
}

structureHandler = () => {
    currentState = 'structure';
    currentStateMobile = 'structure-mobile'
    fetchData();
    changeBtn();
}

surfaceHandler = () => {
    currentState = 'surface';
    currentStateMobile = 'surface-mobile'
    fetchData();
    changeBtn();
}

changeBtn = () => {
    if (currentState == 'overview' || currentStateMobile == 'overview-mobile') {
        overview.style.backgroundColor = `#${btnColors[currentPlanet]}`;
        structure.style.backgroundColor = 'transparent';
        surface.style.backgroundColor = 'transparent';

        overviewMobile.style.setProperty("--test-color", `#${btnColors[currentPlanet]}`);
        structureMobile.style.setProperty("--test-color", `#${btnColors[currentPlanet]}`);
        surfaceMobile.style.setProperty("--test-color", `#${btnColors[currentPlanet]}`);
        
    }   else if (currentState == 'structure') {
        overview.style.backgroundColor = 'transparent';
        structure.style.backgroundColor = `#${btnColors[currentPlanet]}`;
        surface.style.backgroundColor = 'transparent';

    } else {
        overview.style.backgroundColor = 'transparent';
        structure.style.backgroundColor = 'transparent';
        surface.style.backgroundColor = `#${btnColors[currentPlanet]}`;
    }
}

// hoverEffect = (this) => {
//     this.style.backgroundColor = '#d8d8d8';
// }

// noHoverEffect = (this) => {
//     this.style.backgroundColor = 'transparent';
// }


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

fetchData();
changeBtn();

displayInfo = () => {
    planetName.textContent = data[currentPlanet]['name'];
    // OR sourceLink.setAttribute('href', obj[1]['overview']['source']);

    rotation.textContent = data[currentPlanet]['rotation']
    revolution.textContent = data[currentPlanet]['revolution']
    radius.textContent = data[currentPlanet]['radius']
    temperature.textContent = data[currentPlanet]['temperature']

    if (currentState == 'overview') {
        planetImage.style.background = `url('./assets/planet-${planets[currentPlanet]}.svg')`;
        planetImage.style.backgroundRepeat = "no-repeat";
        planetImage.style.backgroundPosition = "center";
        planetDescription.textContent = data[currentPlanet]['overview']['content'];
        sourceLink.href = data[currentPlanet]['overview']['source'];
        
        if (vw > 1300) {
            planetImage.style.backgroundSize = `${planetSize[currentPlanet].large}`, `${planetSize[currentPlanet].large}`;
            planetImage.style.height = `${planetSize[currentPlanet].large}`;
            planetImage.style.width = `${planetSize[currentPlanet].large}`;
        }   else if (vw <= 1300 && vw > 768) {
            planetImage.style.backgroundSize = `${planetSize[currentPlanet].medium}`, `${planetSize[currentPlanet].medium}`;
            planetImage.style.height = `${planetSize[currentPlanet].medium}`;
            planetImage.style.width = `${planetSize[currentPlanet].medium}`;
        } else {
            planetImage.style.backgroundSize = `${planetSize[currentPlanet].small}`, `${planetSize[currentPlanet].small}`;
            planetImage.style.height = `${planetSize[currentPlanet].small}`;
            planetImage.style.width = `${planetSize[currentPlanet].small}`;
            planetImage.style.margin = '0 auto';  
        }

    } else if (currentState == 'structure') {
        planetImage.style.background = `url('./assets/planet-${planets[currentPlanet]}-internal.svg')`;
        planetImage.style.backgroundRepeat = "no-repeat";
        planetImage.style.backgroundPosition = "center";
        planetDescription.textContent = data[currentPlanet]['structure']['content'];
        sourceLink.href = data[currentPlanet]['structure']['source'];

        if (vw > 1300) {
            planetImage.style.backgroundSize = `${planetSize[currentPlanet].large}`, `${planetSize[currentPlanet].large}`;
            planetImage.style.height = `${planetSize[currentPlanet].large}`;
            planetImage.style.width = `${planetSize[currentPlanet].large}`;
        }   else if (vw <= 1300 && vw > 768) {
            planetImage.style.backgroundSize = `${planetSize[currentPlanet].medium}`, `${planetSize[currentPlanet].medium}`;
            planetImage.style.height = `${planetSize[currentPlanet].medium}`;
            planetImage.style.width = `${planetSize[currentPlanet].medium}`;
        } else {
            planetImage.style.backgroundSize = `${planetSize[currentPlanet].small}`, `${planetSize[currentPlanet].small}`;
            planetImage.style.height = `${planetSize[currentPlanet].small}`;
            planetImage.style.width = `${planetSize[currentPlanet].small}`;
            planetImage.style.margin = '0 auto';  
        }        
    } else {
        planetImage.style.background = `url('./assets/geology-${planets[currentPlanet]}.png'), url('./assets/planet-${planets[currentPlanet]}.svg')`;
        planetImage.style.backgroundRepeat = "no-repeat, no-repeat";
        planetImage.style.backgroundPosition = "50% 100%, center";
        planetDescription.textContent = data[currentPlanet]['geology']['content'];
        sourceLink.href = data[currentPlanet]['geology']['source'];

        if (vw > 1300) {
            planetImage.style.backgroundSize = `${geologySize.large}, ${planetSize[currentPlanet].large} ${planetSize[currentPlanet].large}`;
            planetImage.style.height = `${planetSize[currentPlanet].large}`;
            planetImage.style.width = `${planetSize[currentPlanet].large}`;
        }   else if (vw <= 1300 && vw > 768) {
            planetImage.style.backgroundSize = `${geologySize.medium}, ${planetSize[currentPlanet].medium} ${planetSize[currentPlanet].medium}`;
            planetImage.style.height = `${planetSize[currentPlanet].medium}`;
            planetImage.style.width = `${planetSize[currentPlanet].medium}`;
        } else {
            planetImage.style.backgroundSize = `${geologySize.small}, ${planetSize[currentPlanet].small} ${planetSize[currentPlanet].small}`;
            planetImage.style.height = `${planetSize[currentPlanet].small}`;
            planetImage.style.width = `${planetSize[currentPlanet].small}`;
            planetImage.style.margin = '0 auto';   
        }
    }
}

// hoverHandler = (x) => {
//     x.style.backgroundColor = '#d8d8d8';
// }

for (let i = 0 ; i < menuBtnMobile.length; i++) {
    menuBtnMobile[i].addEventListener('click', () => {
        hamburger.classList.remove('active');
        navUl.classList.remove('active');
        logo.classList.remove('active');
        mainTabs.classList.remove('active');
        hero.classList.add('active');
    }); 
 }

hamburger.addEventListener('click', () => {
    logo.classList.toggle('active');
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
    mainTabs.classList.toggle('active');
    hero.classList.toggle('active');
})