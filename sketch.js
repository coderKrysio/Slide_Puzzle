let source;

let pieces = [];
let cols = 4;
let rows = 4;
let w,h;
let board = [];
let tiles = [];

function preload() {
    source = loadImage("./image/animegirl_1.jpg");
}

function setup() {
    createCanvas(400, 400);
    w = width/cols;
    h = height / rows;
    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            let x = i * w;
            let y = j * h;
            let img = createImage(w, h);
            img.copy(source, x, y, w, h, 0, 0, w, h);
            let index = i + j * cols;
            board.push(index);
            let tile = new Tile(index, img);
            tiles.push(tile);
        }
    }

    tiles.pop();
    board.pop();
    board.push(-1);
    simpleShuffle(board);
}

function swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function simpleShuffle(arr) {
    for(let i = 0; i < 100; i++){
        let r1 = floor(random(0, arr.length));
        let r2 = floor(random(0, arr.length));
        swap(r1, r2, arr);
    }
}
  
function draw() {
    //image(source, 0, 0);

    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            let index = i + j * cols;
            let x = i * w;
            let y = j * h;
            let tileIndex = board[index];
            if(tileIndex >= 0) {
                let img = tiles[tileIndex].img;
                image(img, x, y, w, h);
            }
        }
    }

    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            let x = i * w;
            let y = j * h;
            strokeWeight(2);
            noFill();
            rect(x, y, w, h);
        }
    }
    noLoop();
}