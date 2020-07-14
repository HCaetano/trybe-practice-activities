let cost = 100;
let price = 200;
let quantity = 1000;
let tax = 0.2;

if (cost < 0 || price < 0 || quantity < 0 || tax < 0) {
    process.exit(1);
} else {
    console.log(`profit: ${(price - (cost + cost * tax)) * quantity}`)
}