import { APP_NAME, APP_VERSION } from "../../../app-properties.js";
import { playMusic } from "../../services/music.service.js";
import { ICONS } from "../../data/svgIcons.data.js";
import { APP_BASE_PATH, APP_ORIGIN, toExternalPath } from "../../router.js";
import { getSvgIcon } from "../../services/icons.service.js";
import { updateMenuDom } from "../../services/menu.service.js";
import { getUser } from "../../services/storage.service.js";
import { showToast } from "../../services/toast.service.js";
import { isLaptopOrUp, isPhone, isTablet } from "../../utils/breakpoints.js";
import { getRandomIntegerBetween } from "../../utils/math.utils.js";
import { CURRENT_PRESET, CURRENT_ZOOM, getQuarterBounds, initNewMap, isHiddenPointInBounds, setPreset, zoomToQuarter } from "../../services/island-map.service.js";
import { PRESETS } from "../../data/island-presets.data.js";

// VARIABLES //////////////////////////////////////////////////////////////////////////////////////
const HEADER_ICON_CONTAINER = document.getElementById('headerIconContainer');
const HEADER_TITLE = document.getElementById('headerTitle');
const MAIN = document.getElementById('main');
const FOOTER = document.getElementById('footer');

let CURRENT_SELECTED_QUARTER = null;
let FAILED_QUARTERS = 0;

// FUNCTIONS //////////////////////////////////////////////////////////////////////////////////////

export function render() {
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

    <div class="zoom-pill lzr-margin-bottom">
      <span id="zoom1"   class="zoom-label selected">x1</span>
      <span id="zoom2"   class="zoom-label">x2</span>
      <span id="zoom4"   class="zoom-label">x4</span>
      <span id="zoom8"   class="zoom-label">x8</span>
      <span id="zoom16"  class="zoom-label">x16</span>
      <span id="zoom32"  class="zoom-label">x32</span>
      <span id="zoom64"  class="zoom-label">x64</span>
      <span id="zoom128" class="zoom-label">x128</span>
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

      <div class="infos-area">
        <div id="quarterFailed1" class="quarter-failed-pill"></div>
        <div id="quarterFailed2" class="quarter-failed-pill"></div>
        <div id="quarterFailed3" class="quarter-failed-pill"></div>
      </div>

      <div class="empty-box">
      </div>
      
      <div class="speaker">
        <div class="speaker-line small"></div>
        <div class="speaker-line medium"></div>
        <div class="speaker-line large"></div>
        <div class="speaker-line medium"></div>
        <div class="speaker-line small"></div>
      </div>





      <div id="configBox" class="admin-area">
        <span onclick="onConfigClick()">Scanotron 3000 &copy</span>
        <div class="top-config-area">
          ${getPresetSelectDom()}
          <button class="lzr-button lzr-solid lzr-success" onclick="onGenerateClick()">Generate mission</button>
        </div>
        <div id="configPanel" class="config-panel" style="margin-top: auto;">
          ${getConfigDom()}
        </div>
      </div>
    </div>
  </div>
  `;

  updateMenuDom('homepage');
  updateValues();

  setTimeout(() => {
    onGenerateClick();
  }, 300);

}

function getConfigDom() {
  return `
    <div class="lzr-drawer lzr-flat">
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

            <!-- ============================ CORE ============================ -->
            <div class="config-block">
              <span class="block-title">Core</span>

              <div class="line">
                <span>Seeds count</span>
                <div class="counter-block">
                  <button onclick="onMinusClick('seed', 'count')">-</button>
                  <span id="seedsCount">${CURRENT_PRESET.seedsCount}</span>
                  <button onclick="onPlusClick('seed', 'count')">+</button>
                </div>
              </div>

              <div class="line">
                <span>Iterations</span>
                <div class="counter-block">
                  <button onclick="onMinusClick('core', 'iterations')">-</button>
                  <span id="coreIterations">${CURRENT_PRESET.coreIterations}</span>
                  <button onclick="onPlusClick('core', 'iterations')">+</button>
                </div>
              </div>

              <div class="line">
                <span>Proba min.</span>
                <div class="counter-block">
                  <button onclick="onMinusClick('core', 'probaMin')">-</button>
                  <span id="coreProbaMin">${CURRENT_PRESET.coreProbaMin}%</span>
                  <button onclick="onPlusClick('core', 'probaMin')">+</button>
                </div>
              </div>

              <div class="line">
                <span>Proba max.</span>
                <div class="counter-block">
                  <button onclick="onMinusClick('core', 'probaMax')">-</button>
                  <span id="coreProbaMax">${CURRENT_PRESET.coreProbaMax}%</span>
                  <button onclick="onPlusClick('core', 'probaMax')">+</button>
                </div>
              </div>
            </div>

            <hr>

            <div class="config-block">
              <span class="block-title">Main land</span>

              <div class="line">
                <span>Spread count</span>
                <div class="counter-block">
                  <button onclick="onMinusClick('center', 'spread')">-</button>
                  <span id="centerSpread">${CURRENT_PRESET.centerSpread}</span>
                  <button onclick="onPlusClick('center', 'spread')">+</button>
                </div>
              </div>

              <div class="line">
                <span>Spread probability</span>
                <div class="counter-block">
                  <button onclick="onMinusClick('center', 'proba')">-</button>
                  <span id="centerSpreadProbability">${CURRENT_PRESET.centerSpreadProbability}</span>
                  <button onclick="onPlusClick('center', 'proba')">+</button>
                </div>
              </div>
            </div>

            <hr>

            <div class="config-block">
              <span class="block-title">Coast</span>

              <div class="line">
                <span>Spread count</span>
                <div class="counter-block">
                  <button onclick="onMinusClick('surroundings', 'spread')">-</button>
                  <span id="surroundingsSpread">${CURRENT_PRESET.surroundingsSpread}</span>
                  <button onclick="onPlusClick('surroundings', 'spread')">+</button>
                </div>
              </div>

              <div class="line">
                <span>Spread probability</span>
                <div class="counter-block">
                  <button onclick="onMinusClick('surroundings', 'proba')">-</button>
                  <span id="surroundingsSpreadProbability">${CURRENT_PRESET.surroundingsSpreadProbability}</span>
                  <button onclick="onPlusClick('surroundings', 'proba')">+</button>
                </div>
              </div>
            </div>

            <hr>

            <div class="config-block">
              <span class="block-title">Beach</span>

              <div class="line">
                <span>Spread count</span>
                <div class="counter-block">
                  <button onclick="onMinusClick('beach', 'spread')">-</button>
                  <span id="beachSpread">${CURRENT_PRESET.beachSpread}</span>
                  <button onclick="onPlusClick('beach', 'spread')">+</button>
                </div>
              </div>

              <div class="line">
                <span>Spread probability</span>
                <div class="counter-block">
                  <button onclick="onMinusClick('beach', 'proba')">-</button>
                  <span id="beachSpreadProbability">${CURRENT_PRESET.beachSpreadProbability}</span>
                  <button onclick="onPlusClick('beach', 'proba')">+</button>
                </div>
              </div>
            </div>

            <hr>

            <div class="config-block">
              <span class="block-title">Water 1</span>

              <div class="line">
                <span>Spread count</span>
                <div class="counter-block">
                  <button onclick="onMinusClick('water1', 'spread')">-</button>
                  <span id="water1Spread">${CURRENT_PRESET.water1Spread}</span>
                  <button onclick="onPlusClick('water1', 'spread')">+</button>
                </div>
              </div>

              <div class="line">
                <span>Spread probability</span>
                <div class="counter-block">
                  <button onclick="onMinusClick('water1', 'proba')">-</button>
                  <span id="water1SpreadProbability">${CURRENT_PRESET.water1SpreadProbability}</span>
                  <button onclick="onPlusClick('water1', 'proba')">+</button>
                </div>
              </div>
            </div>

            <hr>

            <div class="config-block">
              <span class="block-title">Water 2</span>

              <div class="line">
                <span>Spread count</span>
                <div class="counter-block">
                  <button onclick="onMinusClick('water2', 'spread')">-</button>
                  <span id="water2Spread">${CURRENT_PRESET.water2Spread}</span>
                  <button onclick="onPlusClick('water2', 'spread')">+</button>
                </div>
              </div>

              <div class="line">
                <span>Spread probability</span>
                <div class="counter-block">
                  <button onclick="onMinusClick('water2', 'proba')">-</button>
                  <span id="water2SpreadProbability">${CURRENT_PRESET.water2SpreadProbability}</span>
                  <button onclick="onPlusClick('water2', 'proba')">+</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `;
}

function onConfigClick() {
  const configBox = document.getElementById('configBox');
  configBox.classList.toggle('expanded', !configBox.classList.contains('expanded'));
}
window.onConfigClick = onConfigClick;

function onQuarterSelect(vertical, horizontal) {
  //console.log(vertical, horizontal);
  if (CURRENT_SELECTED_QUARTER == `${vertical}_${horizontal}`) {
    CURRENT_SELECTED_QUARTER = null;
  } else {
    CURRENT_SELECTED_QUARTER = `${vertical}_${horizontal}`;
  }

  let quarters = document.getElementsByClassName('quarter-panel');
  for (let quarter of quarters) {
    if (CURRENT_SELECTED_QUARTER == null) {
      quarter.classList.remove('blacked');
    } else {
      quarter.classList.toggle('blacked', quarter.id != `${CURRENT_SELECTED_QUARTER}_panel`);
    }
  }

  let buttons = document.getElementsByClassName('quarter-button');
  for (let button of buttons) {
    button.classList.toggle('lzr-solid',button.id != `${CURRENT_SELECTED_QUARTER}_button`);
  }
    
  document.getElementById('scan_button').classList.toggle('lzr-primary', CURRENT_SELECTED_QUARTER != null);
  document.getElementById('scan_button').classList.toggle('lzr-solid', CURRENT_SELECTED_QUARTER != null);
}
window.onQuarterSelect = onQuarterSelect;


function resetQuarterSelection() {
  CURRENT_SELECTED_QUARTER = null;
  let buttons = document.getElementsByClassName('quarter-button');
  for (let button of buttons) {
    button.classList.toggle('lzr-solid',button.id != `${CURRENT_SELECTED_QUARTER}_button`);
  }
    
  document.getElementById('scan_button').classList.toggle('lzr-primary', CURRENT_SELECTED_QUARTER != null);
  document.getElementById('scan_button').classList.toggle('lzr-solid', CURRENT_SELECTED_QUARTER != null);
}

function onScanClick() {
  if (CURRENT_SELECTED_QUARTER == null) return;

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
  if (CURRENT_ZOOM > 128) return;

  // Scaning animation
  let quarterElement = document.getElementById(`${vertical}_${horizontal}_panel`);
  quarterElement.classList.add('scan');

  setTimeout(() => {
    quarterElement.classList.remove('scan');

    // Check condition =========================================================
    const quarterBounds = getQuarterBounds(vertical, horizontal);
    const hasHiddenPoint = isHiddenPointInBounds(quarterBounds);
  
    const hiddenPointCellElement = document.getElementsByClassName('hidden-point')[0];
    const hiddenPointId = hiddenPointCellElement.id;
  
    if (hasHiddenPoint) {
      quarterElement.classList.add('win');

      setTimeout(() => {
        let quarters = document.getElementsByClassName('quarter-panel');
        for (let quarter of quarters) {
          quarter.classList.remove('blacked');
          quarter.classList.remove('failed');
          quarter.classList.remove('win');
        }

        if (CURRENT_ZOOM < 64) {
          zoomToQuarter(vertical, horizontal);
          FAILED_QUARTERS = 0;
          let failedQuartersPills = document.getElementsByClassName('quarter-failed-pill');
          for (let failedQuartersPill of failedQuartersPills) {
            failedQuartersPill.classList.remove('lit');
          }
          //console.log(`current zoom: ${CURRENT_ZOOM}`);
          const zoomLevelsDom = document.getElementsByClassName('zoom-label');
          for (let zoomLevelDom of zoomLevelsDom) {
            zoomLevelDom.classList.toggle('selected', zoomLevelDom.id == `zoom${CURRENT_ZOOM}`);
          }
        } else {
          // FINAL WIN
          zoomToQuarter(vertical, horizontal);
          FAILED_QUARTERS = 0;
          let failedQuartersPills = document.getElementsByClassName('quarter-failed-pill');
          for (let failedQuartersPill of failedQuartersPills) {
            failedQuartersPill.classList.remove('lit');
          }
          //console.log(`current zoom: ${CURRENT_ZOOM}`);
          const zoomLevelsDom = document.getElementsByClassName('zoom-label');
          for (let zoomLevelDom of zoomLevelsDom) {
            zoomLevelDom.classList.toggle('selected', zoomLevelDom.id == `zoom${CURRENT_ZOOM}`);
          }
          setTimeout(() => {
            document.getElementById('mapMask').classList.add('hidden');
            setTimeout(() => {
              onGenerateClick();
            }, 1000);
          }, 2000);
        }
      }, 600);
  
    } else {
      let quarters = document.getElementsByClassName('quarter-panel');
      for (let quarter of quarters) {
        quarter.classList.remove('blacked');
      }

      quarterElement.classList.add('failed');
      FAILED_QUARTERS += 1;
      let failedQuartersPills = document.getElementsByClassName('quarter-failed-pill');
      for (let failedQuartersPill of failedQuartersPills) {
        if (failedQuartersPill.id == `quarterFailed${FAILED_QUARTERS}`) failedQuartersPill.classList.add('lit');
      }

      if (FAILED_QUARTERS == 3) {
        setTimeout(() => {
          document.getElementById('mapMask').classList.add('hidden');
          setTimeout(() => {
            onGenerateClick();
          }, 1000);
        }, 500);
      }
    }

    resetQuarterSelection();
    
  }, 2200);




}
window.scanQuarter = scanQuarter;



function onGenerateClick() {
  // RESET
  FAILED_QUARTERS = 0;
  let quarters = document.getElementsByClassName('quarter-panel');
  for (let quarter of quarters) {
    quarter.classList.remove('failed');
    quarter.classList.remove('win');
  }
  let failedQuartersPills = document.getElementsByClassName('quarter-failed-pill');
  for (let failedQuartersPill of failedQuartersPills) {
    failedQuartersPill.classList.remove('lit');
  }

  // GENERATE NEW
  initNewMap();
  const zoomLevelsDom = document.getElementsByClassName('zoom-label');
  for (let zoomLevelDom of zoomLevelsDom) {
    zoomLevelDom.classList.toggle('selected', zoomLevelDom.id == `zoom${CURRENT_ZOOM}`);
  }
  document.getElementById('mapMask').classList.remove('hidden');
}
window.onGenerateClick = onGenerateClick;






// FONCTIONS SPECIFIQUE CONFIGURATION

function getPresetSelectDom() {
  let str = `
    <select id="select" class="lzr-select lzr-outlined" onchange="onSelectChange(event)">
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
  //console.log(event.target.value);
  let preset = PRESETS.find((e) => e.id == event.target.value);
  setPreset(preset);
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

  document.getElementById('seedsCount').innerHTML = CURRENT_PRESET.seedsCount;
  document.getElementById('coreIterations').innerHTML = CURRENT_PRESET.coreIterations;
  document.getElementById('coreProbaMin').innerHTML = `${CURRENT_PRESET.coreProbaMin}%`;
  document.getElementById('coreProbaMax').innerHTML = `${CURRENT_PRESET.coreProbaMax}%`;
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
      if (CURRENT_PRESET.seedsCount > 1) CURRENT_PRESET.seedsCount -= 1; 
      break;
    case 'iterations':
      if (CURRENT_PRESET.coreIterations > 1) CURRENT_PRESET.coreIterations -= 1; 
      break;
    case 'probaMin':
      if (CURRENT_PRESET.coreProbaMin > 1) CURRENT_PRESET.coreProbaMin -= 1; 
      break;
    case 'probaMax':
      if (CURRENT_PRESET.coreProbaMax > 1) CURRENT_PRESET.coreProbaMax -= 1; 
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
      CURRENT_PRESET.seedsCount += 1;
      break;
    case 'iterations':
      if (CURRENT_PRESET.coreIterations > 1) CURRENT_PRESET.coreIterations += 1; 
      break;
    case 'probaMin':
      if (CURRENT_PRESET.coreProbaMin > 1) CURRENT_PRESET.coreProbaMin += 1; 
      break;
    case 'probaMax':
      if (CURRENT_PRESET.coreProbaMax > 1) CURRENT_PRESET.coreProbaMax += 1; 
      break;
    default:
      break;
  }

  updateValues();
}
window.onPlusClick = onPlusClick;

