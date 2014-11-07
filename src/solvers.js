/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({n:n}); //fixme
  //debugger;
  var recurse = function(row) {
    if(row === n) {
      return solution;
    }
    for(var col = 0; col < n; col++) {
      solution.toggle(row, col);
      if(!solution.hasColConflictAt(col)){
        solution=recurse(row + 1);
        return solution;
      }
      solution.toggle(row, col);
    }
  }
  recurse(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n:n});
  var recurse = function(row) {
    if(row === n - 1) {
      solutionCount++;
      return;
    }
    for(var col = 0; col < n; col++) {
      board.toggle(row, col);
      if(!board.hasColConflictAt(col)){
        recurse(row + 1);
      }
      board.toggle(row, col);
    }
  }
  recurse(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n:n}); //fixme
  var found = false;
  var recurse = function(row) {
    if(row === n) {
      found = true;
      return solution;
    }
    for(var col = 0; col < n; col++) {
      //debugger;
      solution.toggle(row, col);
      if(!solution.hasColConflictAt(col) && !solution.hasMinorDiagonalConflictAt(row+col) && !solution.hasMajorDiagonalConflictAt(col-row)){
        recurse(row + 1);
      }
      if(!found) {
        solution.toggle(row, col);
      }
      else {
        break;
      }
    }
  }
  recurse(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n:n});
  var recurse = function(row) {
    //debugger;
    if(row === n) {
      solutionCount++;
      return;
    }
    for(var col = 0; col < n; col++) {
      board.toggle(row, col);
      if(!board.hasColConflictAt(col) && !board.hasMinorDiagonalConflictAt(row+col) && !board.hasMajorDiagonalConflictAt(col-row)){
        recurse(row + 1);
      }
      board.toggle(row, col);
    }
  }
  recurse(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
