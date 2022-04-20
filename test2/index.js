const LAST_UPDATE_BLOCK_ID = 'lastUpdateBlock';
const LINK_TO_LAST_UPDATE_BLOCK_ID = 'lastUpdateBlockLink';
const COLOR_CHANGE_CLASS_NAME = 'highlight-text';
const TIMEOUT_TIME = 1600;

let lastUpdateLink = document.getElementById(LINK_TO_LAST_UPDATE_BLOCK_ID);
let lastUpdateBlock = document.getElementById(LAST_UPDATE_BLOCK_ID);

let timeout = null;

lastUpdateLink.addEventListener("mouseenter", function (event) {
    if (timeout !== null) {
        return;
    }

    lastUpdateBlock.classList.add(COLOR_CHANGE_CLASS_NAME);

    timeout = setTimeout(function () {
        lastUpdateBlock.classList.remove(COLOR_CHANGE_CLASS_NAME)
        timeout = null;
    }, TIMEOUT_TIME);
}, false);

lastUpdateLink.onclick = function (ev) {
    lastUpdateBlock.classList.add(COLOR_CHANGE_CLASS_NAME);

    timeout = setTimeout(function () {
        lastUpdateBlock.classList.remove(COLOR_CHANGE_CLASS_NAME)
        timeout = null;
    }, TIMEOUT_TIME);
}
