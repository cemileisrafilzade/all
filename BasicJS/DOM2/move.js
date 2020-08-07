let div = document.body.firstElementChild;
let styles = getComputedStyle(div);
let leftShift = parseInt(styles.marginLeft);

div.style.marginLeft = `${leftShift + 20}px`;