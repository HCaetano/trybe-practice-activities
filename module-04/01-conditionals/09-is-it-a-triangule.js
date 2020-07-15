let side1 = 200;
let side2 = 20;
let side3 = 30;

if (side1 < 0 || side2 < 0 || side3 < 0) {
    console.log('One or more sides are invalid values');
} else {
    console.log(`Is it a triangle? ${side1 + side2 + side3 <= 180 ? true : false}`);
}