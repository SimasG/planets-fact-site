const venus = document.getElementById('planet-venus');

const tabs = document.querySelectorAll('.main__tab');
const mainContainer = document.querySelector('.main__container');
const contents = document.querySelectorAll('.main__hero');

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

let data;

async function fetchJson() {
    if (typeof data === 'undefined') {
        const dirtyJson = await fetch('./data.json');
        console.log(dirtyJson);
        let parsedJson = await dirtyJson.json();
        console.log(parsedJson);
        data = parsedJson;
        console.log(data);

        testFunction();
    }
    else {
        testFunction();
    }
}

fetchJson();


function testFunction () {
    console.log('heyoooooooo');
    console.log(data[0]);
}

// var data2;

// function fetchData() {
//     if(typeof data2 === "undefined") {
//         fetch('data.json')
//         .then(response => 
//             response.json())
//         .then(json => {
//             console.log(json);
//             data2 = json;
//             console.log(data2);
//             displayInfo();
//         });
//     }
//     else displayInfo();
// }

// fetchData();
// console.log(data2);



// venus.addEventListener('click', () => {
//     async function populate() {
//         const response = await fetch('./data.json');
//         const planetsJson = await response.json();

//         populateVenusOverview(planetsJson);

//         mainContainer.addEventListener('click', (e) => {
//             const id = e.target.dataset.id;
            
//             if (id === 'structure') {
//                 tabs.forEach(btn => {
//                     btn.classList.remove('active');
//                     e.target.classList.add('active');
//                 })
            
//                 contents.forEach(content => {
//                     content.classList.remove('active');
//                 })
            
//                 const element = document.getElementById(id);
//                 element.classList.add('active');
    
//                 populateVenusStructure(planetsJson);
//             }
//         }) 
//     }
//     populate();
// })



function populateVenusOverview(obj) {
    const planetImage = document.querySelector('.planet-img');

    planetImage.src = obj[1]['images']['planet'];

    const mainH1 = document.querySelector('.main__text-heading');
    const mainParagraph = document.querySelector('.main__text-paragraph');

    const sourceLink = document.querySelector('.main__text-source-link');

    mainH1.textContent = obj[1]['name'];
    mainParagraph.textContent = obj[1]['overview']['content'];
    sourceLink.href = obj[1]['overview']['source'];
    // OR sourceLink.setAttribute('href', obj[1]['overview']['source']);


    const informationCard1 = document.querySelector('.main__item-info-1')
    const informationCard2 = document.querySelector('.main__item-info-2')
    const informationCard3 = document.querySelector('.main__item-info-3')
    const informationCard4 = document.querySelector('.main__item-info-4')

    informationCard1.textContent = obj[1]['rotation']
    informationCard2.textContent = obj[1]['revolution']
    informationCard3.textContent = obj[1]['radius']
    informationCard4.textContent = obj[1]['temperature']
}

function populateVenusStructure(obj) {
    const planetImage = document.querySelector('.planet-img');
    planetImage.src = obj[1]['images']['internal'];


    const mainH1 = document.querySelector('.main__text-heading');
    const mainParagraph = document.querySelector('.main__text-paragraph');

    const sourceLink = document.querySelector('.main__text-source-link');

    mainH1.textContent = obj[1]['name'];
    mainParagraph.textContent = obj[1]['structure']['content'];
    sourceLink.href = obj[1]['structure']['source'];
    // OR sourceLink.setAttribute('href', obj[1]['overview']['source']);


    const informationCard1 = document.querySelector('.main__item-info-1')
    const informationCard2 = document.querySelector('.main__item-info-2')
    const informationCard3 = document.querySelector('.main__item-info-3')
    const informationCard4 = document.querySelector('.main__item-info-4')

    informationCard1.textContent = obj[1]['rotation']
    informationCard2.textContent = obj[1]['revolution']
    informationCard3.textContent = obj[1]['radius']
    informationCard4.textContent = obj[1]['temperature']
}



// mainContainer.addEventListener('click', (e) => {
//     const id = e.target.dataset.id;
    
//     if (id) {
//         tabs.forEach(btn => {
//             btn.classList.remove('active');
//             e.target.classList.add('active');
//         })
    
//         contents.forEach(content => {
//             content.classList.remove('active');
//         })
    
//         const element = document.getElementById(id);
//         element.classList.add('active');
//     }
    

// })    




const hamburger = document.querySelector('.header__toggle');
const navUl = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');
const mainTabs = document.querySelector('.main__tabs');
const hero = document.querySelector('.main__hero');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
    logo.classList.toggle('active');
    mainTabs.classList.toggle('active');
    hero.classList.toggle('active');

})


