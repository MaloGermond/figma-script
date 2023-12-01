const frame = figma.createFrame();
frame.resize(3330, 1520);
frame.x = 118
frame.y = 118
frame.backgrounds = [{ type: 'SOLID', color: { r: 0.251, g: 0.251, b: 0.251} }] 
frame.name = "section"


const page = figma.createPage()
page.name = "↪  Design v0.1 (Sprint NN)"
page.appendChild(frame)

let cGap = 118
let column = 3330
let columnNb = 7

let rGap =  118
let row = 1520
let rowNb = 20

let guides = Array()

for (let i = 0 ; i <= (column+cGap)*columnNb; i+=(column+cGap)){
    guides.push({
        axis: 'X', offset: i
    })
    guides.push({
        axis: 'X', offset: i+cGap
    })
}

for (let i = 0 ; i <= (row+rGap)*rowNb; i+=(row+rGap)){
    guides.push({
        axis: 'Y', offset: i
    })
    guides.push({
        axis: 'Y', offset: i+rGap
    })
}


page.guides = guides;
