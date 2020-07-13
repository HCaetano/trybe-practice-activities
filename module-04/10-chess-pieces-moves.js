let chessPieces = ['pawn', 'rook', 'bishop', 'knight', 'king', 'queen'];
let piece = 'eeBisHOP';
let isValid = false;

piece = piece.toLowerCase();

switch (piece) {
  case 'pawn':
    isValid = true;
    break;
  case 'rook':
    isValid = true;
    break;
  case 'bishop':
    isValid = true;
    break;
  case 'knight':
    isValid = true;
    break;
  case 'king':
    isValid = true;
    break;
  case 'queen':
    isValid = true;
    break;
  default:
    console.log('The typed piece name is invalid');
}

if (isValid) {
  switch (piece) {
    case 'pawn':
      console.log(`${piece}: one block forward`);
      break;
    case 'rook':
      console.log(`${piece}: straight lines`);
      break;
    case 'bishop':
      console.log(`${piece}: diagonal lines`);
      break;
    case 'knight':
      console.log(`${piece}: L-shaped moves`);
      break;
    case 'king':
      console.log(`${piece}: one block in any direction`);
      break;
    case 'queen':
      console.log(`${piece}: straight or diagonal lines`);
      break;
  }
}