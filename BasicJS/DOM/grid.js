function createGrid(width,height) {
    
    let gridHTML = '<div style="display:flex; flex-wrap: wrap;">';
    for(let x = 0; x < width * height; x++) {
        gridHTML += `
            <div style="
                border: 1px solid black;
                width: ${100 / width}%;
                padding-bottom: ${100 / width}%;
            "></div>
        `
    }
    gridHTML += '</main>';

    document.body.innerHTML = gridHTML;
};



function colorGrid(width) {
    const cells = document.querySelectorAll('div');

    for(let i = 0; i < cells.length; i++) {
        let row = Math.floor(i / width);
        let indexInRow = i % width;
        let rowPositionPercent = indexInRow * 100 / width;
        rowPositionPercent = rowPositionPercent ? rowPositionPercent : 100;
        

        let color = `rgba(255, 255, ${Math.floor((255 / 100) * rowPositionPercent)})`;

        cells[i].style.backgroundColor = color;
    }
}