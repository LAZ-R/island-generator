import { APP_NAME, APP_VERSION } from "../../../app-properties.js";
import { playMusic } from "../../services/music.service.js";
import { POKEMONS_LIST } from "../../data/pokemons.data.js";
import { ICONS } from "../../data/svgIcons.data.js";
import { APP_BASE_PATH, APP_ORIGIN, toExternalPath } from "../../router.js";
import { getSvgIcon } from "../../services/icons.service.js";
import { updateMenuDom } from "../../services/menu.service.js";
import { getUser } from "../../services/storage.service.js";
import { showToast } from "../../services/toast.service.js";
import { isLaptopOrUp, isPhone, isTablet } from "../../utils/breakpoints.js";
import { getRandomIntegerBetween } from "../../utils/math.utils.js";

// VARIABLES //////////////////////////////////////////////////////////////////////////////////////
const HEADER_ICON_CONTAINER = document.getElementById('headerIconContainer');
const HEADER_TITLE = document.getElementById('headerTitle');
const MAIN = document.getElementById('main');
const FOOTER = document.getElementById('footer');

let MAIN_WIDTH = MAIN.getBoundingClientRect().width;

const X_SIZE = 64;//Math.round(MAIN_WIDTH / 6);
const Y_SIZE = 86;//Math.round(MAIN_WIDTH / 4.5);

let islandCount = 12;

let centerSpread = Math.round(X_SIZE / 10 * 2.5);
let centerSpreadProbability = 16;

let surroundingsSpread = Math.round(X_SIZE / 15);
let surroundingsSpreadProbability = 8;

let beachSpread = Math.round(X_SIZE / 30);
let beachSpreadProbability = 8;

let water1Spread = Math.round(X_SIZE / 30);
let water1SpreadProbability = 16;

let water2Spread = Math.round(X_SIZE / 10);
let water2SpreadProbability = 16;

// FUNCTIONS //////////////////////////////////////////////////////////////////////////////////////

export function render() {

  //let user = getUser();
  // Set HEADER layout
  if (isPhone || isTablet) {
    HEADER_TITLE.innerHTML = '';
  }
  if (isLaptopOrUp) {
    HEADER_TITLE.innerHTML = APP_NAME;
  }

  // Set MAIN layout
  MAIN.innerHTML = `<div id="mainMapContainer" class="main-map-container"></div>`;


  updateMenuDom('homepage');
  setupGrid();

  let mapHeight = document.getElementById('mainMapContainer').getBoundingClientRect().height;
  //console.log(mapHeight);
  MAIN.style.setProperty('--height--main', `${mapHeight}px`);
  // Set FOOTER layout
  FOOTER.style.setProperty('--height--footer', `calc(100svh - ${mapHeight}px)`);
  FOOTER.innerHTML = `
  <div class="line-2">
    <span>Central points</span>
    <div class="block">
      <span>Count</span>
      <div class="block-line">
        <button onclick="onMinusClick('island', 'count')">-</button>
        <span id="islandCount">${islandCount}</span>
        <button onclick="onPlusClick('island', 'count')">+</button>
      </div>
    </div>
  </div>

  <div class="lines-container">

    <div class="line">
      <span>Forest</span>
      <div class="block">
        <span>Spread</span>
        <div class="block-line spread">
          <button onclick="onMinusClick('center', 'spread')">-</button>
          <span id="centerSpread">${centerSpread}</span>
          <button onclick="onPlusClick('center', 'spread')">+</button>
        </div>
      </div>
      <div class="block">
        <span>Proba</span>
        <div class="block-line">
          <button onclick="onMinusClick('center', 'proba')">-</button>
          <span id="centerSpreadProbability">${centerSpreadProbability}%</span>
          <button onclick="onPlusClick('center', 'proba')">+</button>
        </div>
      </div>
    </div>
    <div class="line">
      <span>Grass</span>
      <div class="block">
        <span>Spread</span>
        <div class="block-line spread">
          <button onclick="onMinusClick('surroundings', 'spread')">-</button>
          <span id="surroundingsSpread">${surroundingsSpread}</span>
          <button onclick="onPlusClick('surroundings', 'spread')">+</button>
        </div>
      </div>
      <div class="block">
        <span>Proba</span>
        <div class="block-line">
          <button onclick="onMinusClick('surroundings', 'proba')">-</button>
          <span id="surroundingsSpreadProbability">${surroundingsSpreadProbability}%</span>
          <button onclick="onPlusClick('surroundings', 'proba')">+</button>
        </div>
      </div>
    </div>
    <div class="line">
      <span>Beach</span>
      <div class="block">
        <span>Spread</span>
        <div class="block-line spread">
          <button onclick="onMinusClick('beach', 'spread')">-</button>
          <span id="beachSpread">${beachSpread}</span>
          <button onclick="onPlusClick('beach', 'spread')">+</button>
        </div>
      </div>
      <div class="block">
        <span>Proba</span>
        <div class="block-line">
          <button onclick="onMinusClick('beach', 'proba')">-</button>
          <span id="beachSpreadProbability">${beachSpreadProbability}%</span>
          <button onclick="onPlusClick('beach', 'proba')">+</button>
        </div>
      </div>
    </div>
    <div class="line">
      <span>Water 1</span>
      <div class="block">
        <span>Spread</span>
        <div class="block-line spread">
          <button onclick="onMinusClick('water1', 'spread')">-</button>
          <span id="water1Spread">${water1Spread}</span>
          <button onclick="onPlusClick('water1', 'spread')">+</button>
        </div>
      </div>
      <div class="block">
        <span>Proba</span>
        <div class="block-line">
          <button onclick="onMinusClick('water1', 'proba')">-</button>
          <span id="water1SpreadProbability">${water1SpreadProbability}%</span>
          <button onclick="onPlusClick('water1', 'proba')">+</button>
        </div>
      </div>
    </div>
    <div class="line">
      <span>Water 2</span>
      <div class="block">
        <span>Spread</span>
        <div class="block-line spread">
          <button onclick="onMinusClick('water2', 'spread')">-</button>
          <span id="water2Spread">${water2Spread}</span>
          <button onclick="onPlusClick('water2', 'spread')">+</button>
        </div>
      </div>
      <div class="block">
        <span>Proba</span>
        <div class="block-line">
          <button onclick="onMinusClick('water2', 'proba')">-</button>
          <span id="water2SpreadProbability">${water2SpreadProbability}%</span>
          <button onclick="onPlusClick('water2', 'proba')">+</button>
        </div>
      </div>
    </div>
  </div>
  
  <button class="lzr-button lzr-solid lzr-primary" onclick="onGenerateClick()">Generate</button>
  `;
  
}

function onMinusClick(categ, type) {
  switch (type) {
    case 'spread':
      switch (categ) {
        case 'center': if (centerSpread > 1) centerSpread -= 1; document.getElementById('centerSpread').innerHTML = centerSpread; break;
        case 'surroundings': if (surroundingsSpread > 1) surroundingsSpread -= 1; document.getElementById('surroundingsSpread').innerHTML = surroundingsSpread; break;
        case 'beach': if (beachSpread > 1) beachSpread -= 1; document.getElementById('beachSpread').innerHTML = beachSpread; break;
        case 'water1': if (water1Spread > 1) water1Spread -= 1; document.getElementById('water1Spread').innerHTML = water1Spread; break;
        case 'water2': if (water2Spread > 1) water2Spread -= 1; document.getElementById('water2Spread').innerHTML = water2Spread; break;
        default: break;
      }
      break;
    case 'proba':
      switch (categ) {
        case 'center': if (centerSpreadProbability > 1) centerSpreadProbability -= 1; document.getElementById('centerSpreadProbability').innerHTML = `${centerSpreadProbability}%`; break;
        case 'surroundings': if (surroundingsSpreadProbability > 1) surroundingsSpreadProbability -= 1; document.getElementById('surroundingsSpreadProbability').innerHTML = `${surroundingsSpreadProbability}%`; break;
        case 'beach': if (beachSpreadProbability > 1) beachSpreadProbability -= 1; document.getElementById('beachSpreadProbability').innerHTML = `${beachSpreadProbability}%`; break;
        case 'water1': if (water1SpreadProbability > 1) water1SpreadProbability -= 1; document.getElementById('water1SpreadProbability').innerHTML = `${water1SpreadProbability}%`; break;
        case 'water2': if (water2SpreadProbability > 1) water2SpreadProbability -= 1; document.getElementById('water2SpreadProbability').innerHTML = `${water2SpreadProbability}%`; break;
        default: break;
      }
      break;
    case 'count':
      if (islandCount > 1) islandCount -= 1; document.getElementById('islandCount').innerHTML = islandCount;
      break;
    default:
      break;
  }
}
window.onMinusClick = onMinusClick;

function onPlusClick(categ, type) {
  switch (type) {
    case 'spread':
      switch (categ) {
        case 'center': centerSpread += 1; document.getElementById('centerSpread').innerHTML = centerSpread; break;
        case 'surroundings': surroundingsSpread += 1; document.getElementById('surroundingsSpread').innerHTML = surroundingsSpread; break;
        case 'beach': beachSpread += 1; document.getElementById('beachSpread').innerHTML = beachSpread; break;
        case 'water1': water1Spread += 1; document.getElementById('water1Spread').innerHTML = water1Spread; break;
        case 'water2': water2Spread += 1; document.getElementById('water2Spread').innerHTML = water2Spread; break;
        default: break;
      }
      break;
    case 'proba':
      switch (categ) {
        case 'center': if (centerSpreadProbability < 99) centerSpreadProbability += 1; document.getElementById('centerSpreadProbability').innerHTML = `${centerSpreadProbability}%`; break;
        case 'surroundings': if (surroundingsSpreadProbability < 99) surroundingsSpreadProbability += 1; document.getElementById('surroundingsSpreadProbability').innerHTML = `${surroundingsSpreadProbability}%`; break;
        case 'beach': if (beachSpreadProbability < 99) beachSpreadProbability += 1; document.getElementById('beachSpreadProbability').innerHTML = `${beachSpreadProbability}%`; break;
        case 'water1': if (water1SpreadProbability < 99) water1SpreadProbability += 1; document.getElementById('water1SpreadProbability').innerHTML = `${water1SpreadProbability}%`; break;
        case 'water2': if (water2SpreadProbability < 99) water2SpreadProbability += 1; document.getElementById('water2SpreadProbability').innerHTML = `${water2SpreadProbability}%`; break;
        default: break;
      }
      break;
    case 'count':
      islandCount += 1; document.getElementById('islandCount').innerHTML = islandCount;
      break;
    default:
      break;
  }
}
window.onPlusClick = onPlusClick;

function setupGrid() {

  let x_coord = 0;
  let y_coord = 0;

  let containerElement = document.getElementById('mainMapContainer');
  containerElement.innerHTML = '';
  let str = '';

  // Ligne
  for (let index = 0; index < Y_SIZE; index++) {
    x_coord = 0;
    y_coord += 1;

    // Colonne
    for (let index = 0; index < X_SIZE; index++) {
    x_coord += 1;
      str += `<div id="${x_coord}-${y_coord}" class="grid-cell" style="--x-size: ${X_SIZE};">${x_coord}-${y_coord}</div>`;
    }
  }

  containerElement.innerHTML = str;
}

function getCellSurroundingCells(xCoord, yCoord) {
  // Contour du rnd initial

  // top left
  let topLeft = null;
  if (xCoord > 1 && yCoord > 1) topLeft = `${xCoord - 1}-${yCoord - 1}`;

  // top
  let top = null;
  if (yCoord > 1) top = `${xCoord}-${yCoord - 1}`;

  // top right
  let topRight = null;
  if (xCoord < X_SIZE && yCoord > 1) topRight = `${xCoord + 1}-${yCoord - 1}`;

  // Left
  let left = null;
  if (xCoord > 1) left = `${xCoord - 1}-${yCoord}`;

  // Right
  let right = null;
  if (xCoord < X_SIZE) right = `${xCoord + 1}-${yCoord}`;

  // bottom left
  let bottomLeft = null;
  if (xCoord > 1 && yCoord < Y_SIZE) bottomLeft = `${xCoord - 1}-${yCoord + 1}`;

  // bottom
  let bottom = null;
  if (yCoord < Y_SIZE) bottom = `${xCoord}-${yCoord + 1}`;

  // bottom right
  let bottomRight = null;
  if (xCoord < X_SIZE && yCoord < Y_SIZE) bottomRight = `${xCoord + 1}-${yCoord + 1}`;


  let surroundings = [
    topLeft, top, topRight,
    left, right,
    bottomLeft, bottom, bottomRight,
  ];

  return surroundings;
}

function getCellCrossCells(xCoord, yCoord) {

  // top
  let top = null;
  if (yCoord > 1) top = `${xCoord}-${yCoord - 1}`;

  // Left
  let left = null;
  if (xCoord > 1) left = `${xCoord - 1}-${yCoord}`;

  // Right
  let right = null;
  if (xCoord < X_SIZE) right = `${xCoord + 1}-${yCoord}`;

  // bottom
  let bottom = null;
  if (yCoord < Y_SIZE) bottom = `${xCoord}-${yCoord + 1}`;


  let surroundings = [
    top,
    left, right,
    bottom,
  ];

  return surroundings;
}

function generateMap() {
  console.log(`
X_SIZE: ${X_SIZE}
Y_SIZE: ${Y_SIZE}

Island Count: ${islandCount}
Center Spread: ${centerSpread} - ${centerSpreadProbability}%
Surroundings Spread: ${surroundingsSpread} - ${surroundingsSpreadProbability}%
Beach Spread: ${beachSpread} - ${beachSpreadProbability}%
Water1 Spread: ${water1Spread} - ${water1SpreadProbability}%
Water2 Spread: ${water2Spread} - ${water2SpreadProbability}%
`);
  // ISLANDS CENTAL POINTS ********************************************************************************************
  for (let index = 0; index < islandCount; index++) {
    // Centre de l'île 0
    let rndX = getRandomIntegerBetween(Math.round(X_SIZE * .15), Math.round(X_SIZE * .85));
    let rndY = getRandomIntegerBetween(Math.round(Y_SIZE * .15), Math.round(Y_SIZE * .85));
  
    let rndCellId = `${rndX}-${rndY}`;
    let rndCellElement = document.getElementById(rndCellId);
  
    rndCellElement.classList.add('island-center');
    rndCellElement.classList.add('central-point');
  }

  // ISLAND CENTRAL BASE **********************************************************************************************

  // Island center batch 1
  let islandCentralElements0 = Array.from(document.getElementsByClassName('island-center'));
  for (let islandCentralElement of islandCentralElements0) {
    let elementXCoord = islandCentralElement.id.split('-')[0];
    let elementYCoord = islandCentralElement.id.split('-')[1];
    //console.log(`${elementXCoord}-${elementYCoord}`);
    let elementSurroundings = getCellSurroundingCells(Number(elementXCoord), Number(elementYCoord));
    for (let elementSurrounding of elementSurroundings) {
      if (elementSurrounding != null) {
        let element = document.getElementById(elementSurrounding);
        if (!element.classList.contains('island-center')) {
          let rnd = getRandomIntegerBetween(0, 100);
          if (rnd < 50) {
            element.classList.add('island-center');
          }
        }
      }
    }
  }

  // Island center batch 2

  // Récupération de tous les "island-center" actuels
  let islandCentralElements1 = Array.from(document.getElementsByClassName('island-center'));

  for (let islandCentralElement of islandCentralElements1) {
    let elementXCoord = islandCentralElement.id.split('-')[0];
    let elementYCoord = islandCentralElement.id.split('-')[1];
    //console.log(`${elementXCoord}-${elementYCoord}`);
    let elementSurroundings = getCellSurroundingCells(Number(elementXCoord), Number(elementYCoord));
    for (let elementSurrounding of elementSurroundings) {
      if (elementSurrounding != null) {
        let element = document.getElementById(elementSurrounding);
        if (!element.classList.contains('island-center')) {
          let rnd = getRandomIntegerBetween(0, 100);
          if (rnd < 50) {
            //element.classList.add('surrounding');
            element.classList.add('island-center');
          }
        }
      }
    }
  }

  // Island center batch 3

  // Récupération de tous les "island-center" actuels
  let islandCentralElements2 = Array.from(document.getElementsByClassName('island-center'));

  for (let islandCentralElement of islandCentralElements2) {
    let elementXCoord = islandCentralElement.id.split('-')[0];
    let elementYCoord = islandCentralElement.id.split('-')[1];
    //console.log(`${elementXCoord}-${elementYCoord}`);
    let elementSurroundings = getCellCrossCells(Number(elementXCoord), Number(elementYCoord));
    for (let elementSurrounding of elementSurroundings) {
      if (elementSurrounding != null) {
        let element = document.getElementById(elementSurrounding);
        if (!element.classList.contains('island-center')) {
          let rnd = getRandomIntegerBetween(0, 100);
          if (rnd < 50) {
            //element.classList.add('surrounding');
            element.classList.add('island-center');
          }
        }
      }
    }
  }

  // SPREAD -------------------------------------------------------------------

  for (let index = 0; index < centerSpread; index++) {
    let islandCentralElements3 = Array.from(document.getElementsByClassName('island-center'));

    for (let islandCentralElement of islandCentralElements3) {
      let elementXCoord = islandCentralElement.id.split('-')[0];
      let elementYCoord = islandCentralElement.id.split('-')[1];
      //console.log(`${elementXCoord}-${elementYCoord}`);
      let elementSurroundings = getCellCrossCells(Number(elementXCoord), Number(elementYCoord));
      for (let elementSurrounding of elementSurroundings) {
        if (elementSurrounding != null) {
          let element = document.getElementById(elementSurrounding);
          if (!element.classList.contains('island-center')) {
            let rnd = getRandomIntegerBetween(0, 100);
            if (rnd < centerSpreadProbability) {
              //element.classList.add('surrounding');
              element.classList.add('island-center');
              element.classList.add('spreaded');
            }
          }
        }
      }
    }
  }

  // ISLAND SURROUNDINGS **********************************************************************************************

  // Island Surroundings batch 1

  // Récupération de tous les "island-center" actuels
  let islandCentralElementsFinal = Array.from(document.getElementsByClassName('island-center'));

  for (let islandCentralElement of islandCentralElementsFinal) {
    let elementXCoord = islandCentralElement.id.split('-')[0];
    let elementYCoord = islandCentralElement.id.split('-')[1];
    //console.log(`${elementXCoord}-${elementYCoord}`);
    let elementSurroundings = getCellCrossCells(Number(elementXCoord), Number(elementYCoord));
    for (let elementSurrounding of elementSurroundings) {
      if (elementSurrounding != null) {
        let element = document.getElementById(elementSurrounding);
        if (!element.classList.contains('island-center') && !element.classList.contains('surrounding')) {
          element.classList.add('surrounding');
        }
      }
    }
  }

  // SPREAD -------------------------------------------------------------------

  for (let index = 0; index < surroundingsSpread; index++) {
    let islandSurroundingElements = Array.from(document.getElementsByClassName('surrounding'));

    for (let islandSurroundingElement of islandSurroundingElements) {
      let elementXCoord = islandSurroundingElement.id.split('-')[0];
      let elementYCoord = islandSurroundingElement.id.split('-')[1];
      //console.log(`${elementXCoord}-${elementYCoord}`);
      let elementSurroundings = getCellCrossCells(Number(elementXCoord), Number(elementYCoord));
      for (let elementSurrounding of elementSurroundings) {
        if (elementSurrounding != null) {
          let element = document.getElementById(elementSurrounding);
          if (!element.classList.contains('island-center') && !element.classList.contains('surrounding')) {
            let rnd = getRandomIntegerBetween(0, 100);
            if (rnd < surroundingsSpreadProbability) {
              element.classList.add('surrounding');
            }
          }
        }
      }
    }
  }

  // ISLAND BEACHES ***************************************************************************************************

  // Island Beach batch 1

  // Récupération de tous les "island-center" actuels
  let islandSurroundingElements = Array.from(document.getElementsByClassName('surrounding'));

  for (let islandSurroundingElement of islandSurroundingElements) {
    let elementXCoord = islandSurroundingElement.id.split('-')[0];
    let elementYCoord = islandSurroundingElement.id.split('-')[1];
    //console.log(`${elementXCoord}-${elementYCoord}`);
    let elementBeaches = getCellCrossCells(Number(elementXCoord), Number(elementYCoord));
    for (let elementBeach of elementBeaches) {
      if (elementBeach != null) {
        let element = document.getElementById(elementBeach);
        if (!element.classList.contains('island-center') && !element.classList.contains('surrounding') && !element.classList.contains('beach')) {
          let rnd = getRandomIntegerBetween(0, 100);
          element.classList.add('beach');
        }
      }
    }
  }

  // SPREAD -------------------------------------------------------------------

  for (let index = 0; index < beachSpread; index++) {    
    let islandBeachElements = Array.from(document.getElementsByClassName('beach'));
    for (let islandSurroundingElement of islandBeachElements) {
      let elementXCoord = islandSurroundingElement.id.split('-')[0];
      let elementYCoord = islandSurroundingElement.id.split('-')[1];
      //console.log(`${elementXCoord}-${elementYCoord}`);
      let elementBeaches = getCellSurroundingCells(Number(elementXCoord), Number(elementYCoord));
      for (let elementBeach of elementBeaches) {
        if (elementBeach != null) {
          let element = document.getElementById(elementBeach);
          if (!element.classList.contains('island-center') 
            && !element.classList.contains('surrounding') 
            && !element.classList.contains('beach')) {
            let rnd = getRandomIntegerBetween(0, 100);
            if (rnd < beachSpreadProbability) {
              element.classList.add('beach');
            }
          }
        }
      }
    }
  }

  // ISLAND WATER 1 ***************************************************************************************************

  // Island Water 1 batch 1

  let islandBeachElements2 = Array.from(document.getElementsByClassName('beach'));

  for (let islandBeachElement of islandBeachElements2) {
    let elementXCoord = islandBeachElement.id.split('-')[0];
    let elementYCoord = islandBeachElement.id.split('-')[1];
    //console.log(`${elementXCoord}-${elementYCoord}`);
    let elementWaters = getCellCrossCells(Number(elementXCoord), Number(elementYCoord));
    for (let elementWater of elementWaters) {
      if (elementWater != null) {
        let element = document.getElementById(elementWater);
        if (!element.classList.contains('island-center') 
          && !element.classList.contains('surrounding') 
          && !element.classList.contains('beach') 
          && !element.classList.contains('water-1')) {
          let rnd = getRandomIntegerBetween(0, 100);
          element.classList.add('water-1');
        }
      }
    }
  }

  // SPREAD -------------------------------------------------------------------

  for (let index = 0; index < water1Spread; index++) {
    let islandWater1Elements2 = Array.from(document.getElementsByClassName('water-1'));

    for (let islandWater1Element of islandWater1Elements2) {
      let elementXCoord = islandWater1Element.id.split('-')[0];
      let elementYCoord = islandWater1Element.id.split('-')[1];
      //console.log(`${elementXCoord}-${elementYCoord}`);
      let elementWaters = getCellCrossCells(Number(elementXCoord), Number(elementYCoord));
      for (let elementWater of elementWaters) {
        if (elementWater != null) {
          let element = document.getElementById(elementWater);
          if (!element.classList.contains('island-center') 
            && !element.classList.contains('surrounding') 
            && !element.classList.contains('beach') 
            && !element.classList.contains('water-1')) {
            let rnd = getRandomIntegerBetween(0, 100);
            if (rnd < water1SpreadProbability) {
              element.classList.add('water-1');
            }
          }
        }
      }
    }
  }

  // ISLAND WATER 2 ***************************************************************************************************

  // Island Water 2 batch 1

  let islandWater1Elements = Array.from(document.getElementsByClassName('water-1'));

  for (let islandWater1Element of islandWater1Elements) {
    let elementXCoord = islandWater1Element.id.split('-')[0];
    let elementYCoord = islandWater1Element.id.split('-')[1];
    //console.log(`${elementXCoord}-${elementYCoord}`);
    let elementWaters = getCellCrossCells(Number(elementXCoord), Number(elementYCoord));
    for (let elementWater of elementWaters) {
      if (elementWater != null) {
        let element = document.getElementById(elementWater);
        if (!element.classList.contains('island-center') 
          && !element.classList.contains('surrounding') 
          && !element.classList.contains('beach') 
          && !element.classList.contains('water-1')
          && !element.classList.contains('water-2')) {
          let rnd = getRandomIntegerBetween(0, 100);
          element.classList.add('water-2');
        }
      }
    }
  }

  // SPREAD -------------------------------------------------------------------

  for (let index = 0; index < water2Spread; index++) {
    let islandWater2Elements = Array.from(document.getElementsByClassName('water-2'));

    for (let islandWater2Element of islandWater2Elements) {
      let elementXCoord = islandWater2Element.id.split('-')[0];
      let elementYCoord = islandWater2Element.id.split('-')[1];
      //console.log(`${elementXCoord}-${elementYCoord}`);
      let elementWaters = getCellCrossCells(Number(elementXCoord), Number(elementYCoord));
      for (let elementWater of elementWaters) {
        if (elementWater != null) {
          let element = document.getElementById(elementWater);
          if (!element.classList.contains('island-center') 
            && !element.classList.contains('surrounding') 
            && !element.classList.contains('beach') 
            && !element.classList.contains('water-1')
            && !element.classList.contains('water-2')) {
            let rnd = getRandomIntegerBetween(0, 100);
            if (rnd < water2SpreadProbability) {
              element.classList.add('water-2');
            }
          }
        }
      }
    }
  }

}

function onGenerateClick() {
  setupGrid();
  generateMap();
}
window.onGenerateClick = onGenerateClick;