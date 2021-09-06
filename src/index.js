module.exports = function solveSudoku(matrix) {
  if(Array.isArray(matrix)){
    const boardSize = matrix.length;
    const squareSize = Math.sqrt(boardSize);
    const digits = [1, 9, 8, 3, 4, 2, 5, 6, 7,8,9];
    const findEmpty = (matrix)=>{
    for(let row = 0; row < boardSize; row++){
      for(let column =0; column < boardSize; column++){
        if(matrix[row][column] === 0){
          return [row, column];
        }
      }
    
    }
    
    return null;
    }
    const validate = (num, pos, matrix)=>{
      const [r,c] = pos;
      for(let i=0; i<boardSize;i++){
        if(matrix[i][c] === num && i !==r) return false;
    
      }
    
      for(let i=0; i<boardSize;i++){
        if(matrix[r][i] === num && i !==c) return false;
    
      }
    const boxRow = Math.floor(r / squareSize) * squareSize;
    const boxCol = Math.floor(c / squareSize) * squareSize;
    for(let i = boxRow; i < boxRow + squareSize; i++){
      for(let j = boxCol; j < boxCol + squareSize;j++){
        if(matrix[i][j] === num && i !==r && j !==c) return false;
      }
    }
    return true;
    }
    
    const solve =()=>{
      const currPosition = findEmpty(matrix);
      if(currPosition === null){
        return true;
      }
    for(let i = 0; i< digits.length;i++){
      let currentNumber = digits[i];
      const isValid = validate(currentNumber, currPosition, matrix); 
      if(isValid){
        const [x ,y] = currPosition;
        matrix[x][y] = currentNumber;
        if(solve()){
          return true;
        }
        matrix[x][y] = 0;
      }
    }
    return false;
    }
      solve();
    return matrix;
          }
          return [];
}
