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

const X_SIZE = 128;//Math.round(MAIN_WIDTH / 6);
const Y_SIZE = 128;//86//Math.round(MAIN_WIDTH / 4.5);

const PRESETS = [
  // DEFAULT
  {
    id: 'default',
    name: 'Default',
    islandCount: 12,
    centerSpread: 32,
    centerSpreadProbability: 16,
    surroundingsSpread: 4 * 2,
    surroundingsSpreadProbability: 8,
    beachSpread: 2 * 2,
    beachSpreadProbability: 8,
    water1Spread: 2 * 2,
    water1SpreadProbability: 16,
    water2Spread: 6 * 2,
    water2SpreadProbability: 16,
  },
  // archipel réaliste
  {
    id: 'realistic',
    name: 'Realistic',
    islandCount: 6,
    centerSpread: 26 * 2,
    centerSpreadProbability: 19,
    surroundingsSpread: 6 * 2,
    surroundingsSpreadProbability: 12,
    beachSpread: 1 * 2,
    beachSpreadProbability: 28,
    water1Spread: 5 * 2,
    water1SpreadProbability: 20,
    water2Spread: 10 * 2,
    water2SpreadProbability: 11,
  },
  // tropical islands
  {
    id: 'tropical',
    name: 'Tropical islands',
    islandCount: 14,
    centerSpread: 14 * 2,
    centerSpreadProbability: 17,
    surroundingsSpread: 3 * 2,
    surroundingsSpreadProbability: 10,
    beachSpread: 2 * 2,
    beachSpreadProbability: 40,
    water1Spread: 6 * 2,
    water1SpreadProbability: 25,
    water2Spread: 10 * 2,
    water2SpreadProbability: 18,
  },
  // volcanic islands
  {
    id: 'volcanic',
    name: 'Volcanic islands',
    islandCount: 4,
    centerSpread: 30 * 2,
    centerSpreadProbability: 20,
    surroundingsSpread: 4 * 2,
    surroundingsSpreadProbability: 10,
    beachSpread: 1 * 2,
    beachSpreadProbability: 25,
    water1Spread: 3 * 2,
    water1SpreadProbability: 20,
    water2Spread: 10 * 2,
    water2SpreadProbability: 14,
  },
  // fjord islands
  {
    id: 'fjord',
    name: 'Fjords',
    islandCount: 6,
    centerSpread: 26 * 2,
    centerSpreadProbability: 14,
    surroundingsSpread: 7 * 2,
    surroundingsSpreadProbability: 10,
    beachSpread: 1 * 2,
    beachSpreadProbability: 20,
    water1Spread: 6 * 2,
    water1SpreadProbability: 30,
    water2Spread: 12 * 2,
    water2SpreadProbability: 15,
  },
  {
    id: 'continent',
    name: 'Continent',
    islandCount: 3,
    centerSpread: 36 * 2,
    centerSpreadProbability: 22,
    surroundingsSpread: 6 * 2,
    surroundingsSpreadProbability: 12,
    beachSpread: 1 * 2,
    beachSpreadProbability: 16,
    water1Spread: 2 * 2,
    water1SpreadProbability: 6,
    water2Spread: 8 * 2,
    water2SpreadProbability: 12,
  },
  {
    id: 'coral-hell',
    name: 'Coral hell',
    islandCount: 16,
    centerSpread: 8 * 2,
    centerSpreadProbability: 2,
    surroundingsSpread: 6 * 2,
    surroundingsSpreadProbability: 3,
    beachSpread: 4 * 2,
    beachSpreadProbability: 8,
    water1Spread: 4 * 2,
    water1SpreadProbability: 8,
    water2Spread: 12 * 2,
    water2SpreadProbability: 8,
  },
  {
    id: 'mangrove',
    name: 'Mangrove delta',
    islandCount: 24,
    centerSpread: 2 * 2,
    centerSpreadProbability: 2,
    surroundingsSpread: 12 * 2,
    surroundingsSpreadProbability: 12,
    beachSpread: 4 * 2,
    beachSpreadProbability: 10,
    water1Spread: 6 * 2,
    water1SpreadProbability: 6,
    water2Spread: 12 * 2,
    water2SpreadProbability: 14,
  },
];

let CURRENT_PRESET = {};

let CURRENT_ZOOM = 1;
let CENTER_X = 0.5;
let CENTER_Y = 0.5;

let CURRENT_QUARTER = null;
let FAILED_QUARTERS = 0;

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
  MAIN.innerHTML = `
  <div class="top-container">
    <div class="main-container">
      <div id="mapContainer" class="map-container"></div>
      <div id="mapMask" class="map-mask hidden"></div>
      <div class="interactive-panel crt">
        <div id="top_left_panel" onclick="scanQuarter('top', 'left')" class="quarter-panel top-left"></div>
        <div id="top_right_panel" onclick="scanQuarter('top', 'right')" class="quarter-panel top-right"></div>
        <div id="bottom_left_panel" onclick="scanQuarter('bottom', 'left')" class="quarter-panel bottom-left"></div>
        <div id="bottom_right_panel" onclick="scanQuarter('bottom', 'right')" class="quarter-panel bottom-right"></div>
      </div>
      <div id="screenContainer" class="screen-container"></div>
    </div>
  </div>

  <div class="page-container">

    <div class="top-info-area lzr-margin-bottom">Scanotron 3000&copy
    </div>

    <div class="controls-container lzr-margin-bottom">
      <div class="directional-cross-container">
        <button id="top_left_button" onclick="onQuarterSelect('top', 'left')" class="lzr-button lzr-solid quarter-button">NORTH<br>WEST</button>
        <button id="top_right_button" onclick="onQuarterSelect('top', 'right')" class="lzr-button lzr-solid quarter-button">NORTH<br>EAST</button>
        <button id="bottom_left_button" onclick="onQuarterSelect('bottom', 'left')" class="lzr-button lzr-solid quarter-button">SOUTH<br>WEST</button>
        <button id="bottom_right_button" onclick="onQuarterSelect('bottom', 'right')" class="lzr-button lzr-solid quarter-button">SOUTH<br>EAST</button>
      </div>
      <div class="action-buttons-container">
        <button id="scan_button" onclick="onScanClick()" class="lzr-button">SCAN</button>
      </div>
    </div>

    <div class="bottom-area">
      <div class="credits">
        <p>on verra bien quoi mettre<br>d'autre comme infos</p>
      </div>
      <div class="speaker">
        <div class="speaker-line small"></div>
        <div class="speaker-line medium"></div>
        <div class="speaker-line large"></div>
        <div class="speaker-line medium"></div>
        <div class="speaker-line small"></div>
      </div>
    </div>
  </div>

    

    <div class="lzr-drawer lzr-flat"">
      <div class="tile-header">
        <div>
          <span class="header-title">Config</span>
        </div>
        <div class="tile-caret">
        ${getSvgIcon('chevron-right', 'm', null)}
        </div>
        <input type="checkbox">
      </div>
      <div class="expandable-wrapper">
        <div class="expandable-inner">
          <div class="inner-body">

            <div class="top-info-area lzr-margin-bottom">
              ${getPresetSelectDom()}
              <button class="lzr-button lzr-solid lzr-success" onclick="onGenerateClick()">Generate mission</button>
            </div>
            
            <div class="line-2">
              <div class="block">
                <span>Count</span>
                <div class="block-line">
                  <button onclick="onMinusClick('island', 'count')">-</button>
                  <span id="islandCount">${CURRENT_PRESET.islandCount}</span>
                  <button onclick="onPlusClick('island', 'count')">+</button>
                </div>
              </div>
            </div>

            <div class="lines-container">

              <div class="line">
                <span>Core</span>
                <div class="block">
                  <span>Spread</span>
                  <div class="block-line spread">
                    <button onclick="onMinusClick('center', 'spread')">-</button>
                    <span id="centerSpread">${CURRENT_PRESET.centerSpread}</span>
                    <button onclick="onPlusClick('center', 'spread')">+</button>
                  </div>
                </div>
                <div class="block">
                  <span>Proba</span>
                  <div class="block-line">
                    <button onclick="onMinusClick('center', 'proba')">-</button>
                    <span id="centerSpreadProbability">${CURRENT_PRESET.centerSpreadProbability}%</span>
                    <button onclick="onPlusClick('center', 'proba')">+</button>
                  </div>
                </div>
              </div>
              <div class="line">
                <span>Land</span>
                <div class="block">
                  <span>Spread</span>
                  <div class="block-line spread">
                    <button onclick="onMinusClick('surroundings', 'spread')">-</button>
                    <span id="surroundingsSpread">${CURRENT_PRESET.surroundingsSpread}</span>
                    <button onclick="onPlusClick('surroundings', 'spread')">+</button>
                  </div>
                </div>
                <div class="block">
                  <span>Proba</span>
                  <div class="block-line">
                    <button onclick="onMinusClick('surroundings', 'proba')">-</button>
                    <span id="surroundingsSpreadProbability">${CURRENT_PRESET.surroundingsSpreadProbability}%</span>
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
                    <span id="beachSpread">${CURRENT_PRESET.beachSpread}</span>
                    <button onclick="onPlusClick('beach', 'spread')">+</button>
                  </div>
                </div>
                <div class="block">
                  <span>Proba</span>
                  <div class="block-line">
                    <button onclick="onMinusClick('beach', 'proba')">-</button>
                    <span id="beachSpreadProbability">${CURRENT_PRESET.beachSpreadProbability}%</span>
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
                    <span id="water1Spread">${CURRENT_PRESET.water1Spread}</span>
                    <button onclick="onPlusClick('water1', 'spread')">+</button>
                  </div>
                </div>
                <div class="block">
                  <span>Proba</span>
                  <div class="block-line">
                    <button onclick="onMinusClick('water1', 'proba')">-</button>
                    <span id="water1SpreadProbability">${CURRENT_PRESET.water1SpreadProbability}%</span>
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
                    <span id="water2Spread">${CURRENT_PRESET.water2Spread}</span>
                    <button onclick="onPlusClick('water2', 'spread')">+</button>
                  </div>
                </div>
                <div class="block">
                  <span>Proba</span>
                  <div class="block-line">
                    <button onclick="onMinusClick('water2', 'proba')">-</button>
                    <span id="water2SpreadProbability">${CURRENT_PRESET.water2SpreadProbability}%</span>
                    <button onclick="onPlusClick('water2', 'proba')">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;


  updateMenuDom('homepage');
  //setupGrid();
  CURRENT_PRESET = {...PRESETS[0]};
  updateValues();

  setTimeout(() => {
    onGenerateClick();
  }, 300);

}

function getQuarterCells(vertical, horizontal) {
  // 1) Taille de la zone actuellement visible dans la grille
  // Exemple sur une grille 128 :
  // zoom 1 => 128 cellules visibles
  // zoom 2 => 64 cellules visibles
  // zoom 4 => 32 cellules visibles
  const visibleWidthInCells = X_SIZE / CURRENT_ZOOM;
  const visibleHeightInCells = Y_SIZE / CURRENT_ZOOM;

  // 2) Bornes de la zone visible actuelle, en coordonnées relatives [0..1]
  const visibleLeftRel = CENTER_X - (1 / CURRENT_ZOOM) / 2;
  const visibleTopRel = CENTER_Y - (1 / CURRENT_ZOOM) / 2;

  // 3) Conversion en indices de cellules (1-based, inclusifs)
  // Exemple au départ :
  // left = 0, top = 0 => x: 1..128, y: 1..128
  const visibleStartX = Math.round(visibleLeftRel * X_SIZE) + 1;
  const visibleStartY = Math.round(visibleTopRel * Y_SIZE) + 1;

  const visibleEndX = visibleStartX + visibleWidthInCells - 1;
  const visibleEndY = visibleStartY + visibleHeightInCells - 1;

  // 4) Découpage symétrique de la zone visible en 2 moitiés
  const halfWidth = visibleWidthInCells / 2;
  const halfHeight = visibleHeightInCells / 2;

  // X
  let quarterStartX;
  let quarterEndX;

  if (horizontal === 'left') {
    quarterStartX = visibleStartX;
    quarterEndX = visibleStartX + halfWidth - 1;
  } else {
    quarterStartX = visibleStartX + halfWidth;
    quarterEndX = visibleEndX;
  }

  // Y
  let quarterStartY;
  let quarterEndY;

  if (vertical === 'top') {
    quarterStartY = visibleStartY;
    quarterEndY = visibleStartY + halfHeight - 1;
  } else {
    quarterStartY = visibleStartY + halfHeight;
    quarterEndY = visibleEndY;
  }

  // 5) Construction du tableau de toutes les cellules du quarter
  // Format : "x-y"
  const cells = [];

  for (let y = quarterStartY; y <= quarterEndY; y++) {
    for (let x = quarterStartX; x <= quarterEndX; x++) {
      cells.push(`${x}-${y}`);
    }
  }

  return cells;
}

function applyMapTransform() {
  const mapElement = document.getElementById('mapContainer');
  const translateX = (0.5 - CENTER_X * CURRENT_ZOOM) * 100;
  const translateY = (0.5 - CENTER_Y * CURRENT_ZOOM) * 100;

  mapElement.style.transform =
    `translate(${translateX}%, ${translateY}%) scale(${CURRENT_ZOOM})`;
}

function onQuarterSelect(vertical, horizontal) {
  //console.log(vertical, horizontal);
  if (CURRENT_QUARTER == `${vertical}_${horizontal}`) {
    CURRENT_QUARTER = null;
  } else {
    CURRENT_QUARTER = `${vertical}_${horizontal}`;
  }

  let quarters = document.getElementsByClassName('quarter-panel');
  for (let quarter of quarters) {
    if (CURRENT_QUARTER == null) {
      quarter.classList.remove('blacked');
    } else {
      quarter.classList.toggle('blacked', quarter.id != `${CURRENT_QUARTER}_panel`);
    }
  }

  let buttons = document.getElementsByClassName('quarter-button');
  for (let button of buttons) {
    button.classList.toggle('lzr-solid',button.id != `${CURRENT_QUARTER}_button`);
  }
    
  document.getElementById('scan_button').classList.toggle('lzr-primary', CURRENT_QUARTER != null);
  document.getElementById('scan_button').classList.toggle('lzr-solid', CURRENT_QUARTER != null);
}
window.onQuarterSelect = onQuarterSelect;

function resetSelection() {
  CURRENT_QUARTER = null;
  let buttons = document.getElementsByClassName('quarter-button');
  for (let button of buttons) {
    button.classList.toggle('lzr-solid',button.id != `${CURRENT_QUARTER}_button`);
  }
    
  document.getElementById('scan_button').classList.toggle('lzr-primary', CURRENT_QUARTER != null);
  document.getElementById('scan_button').classList.toggle('lzr-solid', CURRENT_QUARTER != null);
}

function onScanClick() {
  if (CURRENT_QUARTER == null) return;

  let quarters = document.getElementsByClassName('quarter-panel');
  for (let quarter of quarters) {
    if (!quarter.classList.contains('blacked')) {
      let vertical = quarter.id.split('_')[0];
      let horizontal = quarter.id.split('_')[1];
      scanQuarter(vertical, horizontal);
    };
  }
}
window.onScanClick = onScanClick;

function scanQuarter(vertical, horizontal) {
  if (CURRENT_ZOOM >= 128) return;

  // Scaning animation
  let quarterElement = document.getElementById(`${vertical}_${horizontal}_panel`);
  quarterElement.classList.add('scan');

  setTimeout(() => {
    quarterElement.classList.remove('scan');
    // Check condition =========================================================
    const quarterCells = getQuarterCells(vertical, horizontal);
    //console.log('nb cellules:', quarterCells.length);
  
    const hiddenPointCellElement = document.getElementsByClassName('hidden-point')[0];
    const hiddenPointId = hiddenPointCellElement.id;
  
    if (quarterCells.indexOf(hiddenPointId) != -1) {
      quarterElement.classList.add('win');

      setTimeout(() => {
        let quarters = document.getElementsByClassName('quarter-panel');
        for (let quarter of quarters) {
          quarter.classList.remove('blacked');
          quarter.classList.remove('failed');
          quarter.classList.remove('win');
        }

        if (CURRENT_ZOOM < 64) {
          // MAP TRANSFORM
        
          const step = 1 / (4 * CURRENT_ZOOM);
        
          if (horizontal === 'left') {
            CENTER_X -= step;
          } else {
            CENTER_X += step;
          }
        
          if (vertical === 'top') {
            CENTER_Y -= step;
          } else {
            CENTER_Y += step;
          }
        
          CURRENT_ZOOM *= 2;
        
          applyMapTransform();
          FAILED_QUARTERS = 0;
        
          //console.log(`current zoom: ${CURRENT_ZOOM}`);
        } else {
          onGenerateClick();
        }
        
      }, 600);
  
    } else {
      let quarters = document.getElementsByClassName('quarter-panel');
      for (let quarter of quarters) {
        quarter.classList.remove('blacked');
      }

      quarterElement.classList.add('failed');
      FAILED_QUARTERS += 1;
      if (FAILED_QUARTERS == 3) {
        setTimeout(() => {
          document.getElementById('mapMask').classList.add('hidden');
          setTimeout(() => {
            onGenerateClick();
          }, 1000);
        }, 500);
      }
      /* setTimeout(() => {
        quarterElement.classList.replace('fail', 'failed');
      }, 600); */
      // ...
    }

    resetSelection();
    
  }, 2200);




}
window.scanQuarter = scanQuarter;

function getPresetSelectDom() {
  let str = `
    <select id="select" class="lzr-select lzr-solid" onchange="onSelectChange(event)">
      <button id=custombutton>
        <selectedcontent></selectedcontent>
      </button>
  `;
  for (let preset of PRESETS) {
    str += `<option value="${preset.id}">${preset.name}</option>`;
  }
  str += '</select>';
  return str;
}

function onSelectChange(event) {
  console.log(event.target.value);
  let preset = PRESETS.find((e) => e.id == event.target.value);
  CURRENT_PRESET = {...preset};
  updateValues();
  document.getElementsByClassName('lzr')[0].style = `
    --map-theme: '${preset.id}';
  ';`;
  onGenerateClick();
}
window.onSelectChange = onSelectChange;

function updateValues() {
  document.getElementById('centerSpread').innerHTML = CURRENT_PRESET.centerSpread;
  document.getElementById('surroundingsSpread').innerHTML = CURRENT_PRESET.surroundingsSpread; 
  document.getElementById('beachSpread').innerHTML = CURRENT_PRESET.beachSpread; 
  document.getElementById('water1Spread').innerHTML = CURRENT_PRESET.water1Spread; 
  document.getElementById('water2Spread').innerHTML = CURRENT_PRESET.water2Spread; 

  document.getElementById('centerSpreadProbability').innerHTML = `${CURRENT_PRESET.centerSpreadProbability}%`; 
  document.getElementById('surroundingsSpreadProbability').innerHTML = `${CURRENT_PRESET.surroundingsSpreadProbability}%`; 
  document.getElementById('beachSpreadProbability').innerHTML = `${CURRENT_PRESET.beachSpreadProbability}%`; 
  document.getElementById('water1SpreadProbability').innerHTML = `${CURRENT_PRESET.water1SpreadProbability}%`; 
  document.getElementById('water2SpreadProbability').innerHTML = `${CURRENT_PRESET.water2SpreadProbability}%`; 

  document.getElementById('islandCount').innerHTML = CURRENT_PRESET.islandCount;
}

function onMinusClick(categ, type) {
  switch (type) {
    case 'spread':
      switch (categ) {
        case 'center': if (CURRENT_PRESET.centerSpread > 1) CURRENT_PRESET.centerSpread -= 1; break;
        case 'surroundings': if (CURRENT_PRESET.surroundingsSpread > 1) CURRENT_PRESET.surroundingsSpread -= 1; break;
        case 'beach': if (CURRENT_PRESET.beachSpread > 1) CURRENT_PRESET.beachSpread -= 1; break;
        case 'water1': if (CURRENT_PRESET.water1Spread > 1) CURRENT_PRESET.water1Spread -= 1; break;
        case 'water2': if (CURRENT_PRESET.water2Spread > 1) CURRENT_PRESET.water2Spread -= 1; break;
        default: break;
      }
      break;
    case 'proba':
      switch (categ) {
        case 'center': if (CURRENT_PRESET.centerSpreadProbability > 1) CURRENT_PRESET.centerSpreadProbability -= 1; break;
        case 'surroundings': if (CURRENT_PRESET.surroundingsSpreadProbability > 1) CURRENT_PRESET.surroundingsSpreadProbability -= 1; break;
        case 'beach': if (CURRENT_PRESET.beachSpreadProbability > 1) CURRENT_PRESET.beachSpreadProbability -= 1; break;
        case 'water1': if (CURRENT_PRESET.water1SpreadProbability > 1) CURRENT_PRESET.water1SpreadProbability -= 1; break;
        case 'water2': if (CURRENT_PRESET.water2SpreadProbability > 1) CURRENT_PRESET.water2SpreadProbability -= 1; break;
        default: break;
      }
      break;
    case 'count':
      if (CURRENT_PRESET.islandCount > 1) CURRENT_PRESET.islandCount -= 1; 
      break;
    default:
      break;
  }

  updateValues();

}
window.onMinusClick = onMinusClick;

function onPlusClick(categ, type) {
  switch (type) {
    case 'spread':
      switch (categ) {
        case 'center': CURRENT_PRESET.centerSpread += 1; break;
        case 'surroundings': CURRENT_PRESET.surroundingsSpread += 1; break;
        case 'beach': CURRENT_PRESET.beachSpread += 1; break;
        case 'water1': CURRENT_PRESET.water1Spread += 1; break;
        case 'water2': CURRENT_PRESET.water2Spread += 1; break;
        default: break;
      }
      break;
    case 'proba':
      switch (categ) {
        case 'center': if (CURRENT_PRESET.centerSpreadProbability < 99) CURRENT_PRESET.centerSpreadProbability += 1; break;
        case 'surroundings': if (CURRENT_PRESET.surroundingsSpreadProbability < 99) CURRENT_PRESET.surroundingsSpreadProbability += 1; break;
        case 'beach': if (CURRENT_PRESET.beachSpreadProbability < 99) CURRENT_PRESET.beachSpreadProbability += 1; break;
        case 'water1': if (CURRENT_PRESET.water1SpreadProbability < 99) CURRENT_PRESET.water1SpreadProbability += 1; break;
        case 'water2': if (CURRENT_PRESET.water2SpreadProbability < 99) CURRENT_PRESET.water2SpreadProbability += 1; break;
        default: break;
      }
      break;
    case 'count':
      CURRENT_PRESET.islandCount += 1;
      break;
    default:
      break;
  }

  updateValues();
}
window.onPlusClick = onPlusClick;

function setupGrid() {
  CURRENT_ZOOM = 1;
  CENTER_X = 0.5;
  CENTER_Y = 0.5;

  let x_coord = 0;
  let y_coord = 0;

  let containerElement = document.getElementById('mapContainer');
  containerElement.innerHTML = '';
  containerElement.style = '';
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

Island Count: ${CURRENT_PRESET.islandCount}
Center Spread: ${CURRENT_PRESET.centerSpread} - ${CURRENT_PRESET.centerSpreadProbability}%
Surroundings Spread: ${CURRENT_PRESET.surroundingsSpread} - ${CURRENT_PRESET.surroundingsSpreadProbability}%
Beach Spread: ${CURRENT_PRESET.beachSpread} - ${CURRENT_PRESET.beachSpreadProbability}%
Water1 Spread: ${CURRENT_PRESET.water1Spread} - ${CURRENT_PRESET.water1SpreadProbability}%
Water2 Spread: ${CURRENT_PRESET.water2Spread} - ${CURRENT_PRESET.water2SpreadProbability}%
`);
  // ISLANDS CENTAL POINTS ********************************************************************************************
  for (let index = 0; index < CURRENT_PRESET.islandCount; index++) {
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

  // SPREAD -------------------------------------------------------------------

  for (let index = 0; index < CURRENT_PRESET.centerSpread; index++) {
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
            if (rnd < CURRENT_PRESET.centerSpreadProbability) {
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

  for (let index = 0; index < CURRENT_PRESET.surroundingsSpread; index++) {
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
            if (rnd < CURRENT_PRESET.surroundingsSpreadProbability) {
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

  for (let index = 0; index < CURRENT_PRESET.beachSpread; index++) {    
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
            if (rnd < CURRENT_PRESET.beachSpreadProbability) {
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
    let elementWaters = getCellSurroundingCells(Number(elementXCoord), Number(elementYCoord));
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

  for (let index = 0; index < CURRENT_PRESET.water1Spread; index++) {
    let islandWater1Elements2 = Array.from(document.getElementsByClassName('water-1'));

    for (let islandWater1Element of islandWater1Elements2) {
      let elementXCoord = islandWater1Element.id.split('-')[0];
      let elementYCoord = islandWater1Element.id.split('-')[1];
      //console.log(`${elementXCoord}-${elementYCoord}`);
      let elementWaters = getCellSurroundingCells(Number(elementXCoord), Number(elementYCoord));
      for (let elementWater of elementWaters) {
        if (elementWater != null) {
          let element = document.getElementById(elementWater);
          if (!element.classList.contains('island-center') 
            && !element.classList.contains('surrounding') 
            && !element.classList.contains('beach') 
            && !element.classList.contains('water-1')) {
            let rnd = getRandomIntegerBetween(0, 100);
            if (rnd < CURRENT_PRESET.water1SpreadProbability) {
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

  for (let index = 0; index < CURRENT_PRESET.water2Spread; index++) {
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
            if (rnd < CURRENT_PRESET.water2SpreadProbability) {
              element.classList.add('water-2');
            }
          }
        }
      }
    }
  }

  setHiddenPoint();
}

function setHiddenPoint() {
  let eligibleCells = [];
  let coreCells = Array.from(document.getElementsByClassName('island-center'));
  for (let coreCell of coreCells) { eligibleCells.push(coreCell.id); }
  let landCells = Array.from(document.getElementsByClassName('surroundings'));
  for (let landCell of landCells) { eligibleCells.push(landCell.id); }
  let beachCells = Array.from(document.getElementsByClassName('beach'));
  for (let beachCell of beachCells) { eligibleCells.push(beachCell.id); }

  //console.log(eligibleCells.length);

  let randomCell = eligibleCells[getRandomIntegerBetween(0, eligibleCells.length - 1)];

  document.getElementById(randomCell).classList.add('hidden-point');
}

function onGenerateClick() {
  FAILED_QUARTERS = 0;
  setupGrid();
  let quarters = document.getElementsByClassName('quarter-panel');
  for (let quarter of quarters) {
    quarter.classList.remove('failed');
    quarter.classList.remove('win');
  }
  generateMap();
  document.getElementById('mapMask').classList.remove('hidden');
}
window.onGenerateClick = onGenerateClick;