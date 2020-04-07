var board =
[
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
];
var team = 1;
document.addEventListener("DOMContentLoaded",() => {


  document.querySelector("#button1").addEventListener("click", (e) => {
    var row = 6;
    while(board[row][0] == 1 || board[row][0] == -1)
    {
      row--;
      if(row == -1){break;}
    }
    if(row != -1)
    {
      board[row][0] = team;
      fillInBoard(row,0,team);
      checkGameOver();
      if(team == 1)
      {
        team = -1;
      }
      else if(team == -1)
      {
        team = 1;
      }
    }
    console.log(board);
  });
  document.querySelector("#button2").addEventListener("click", (e) => {
    var row = 6;
    while(board[row][1] == 1 || board[row][1] == -1)
    {
      row--;
      if(row == -1){break;}
    }
    if(row != -1)
    {
      board[row][1] = team;
      fillInBoard(row,1,team);
      checkGameOver();
      if(team == 1) { team = -1;  }
      else if(team == -1) { team = 1; }
    }
    console.log(board);
  });
  document.querySelector("#button3").addEventListener("click", (e) => {
    var row = 6;
    while(board[row][2] == 1 || board[row][2] == -1)
    {
      row--;
      if(row == -1){break;}
    }
    if(row != -1)
    {
      board[row][2] = team;
      fillInBoard(row,2,team);
      checkGameOver();
      if(team == 1) { team = -1;  }
      else if(team == -1) { team = 1; }
    }
    console.log(board);
  });
  document.querySelector("#button4").addEventListener("click", (e) => {
    var row = 6;
    while(board[row][3] == 1 || board[row][3] == -1)
    {
      row--;
      if(row == -1){break;}
    }
    if(row != -1)
    {
      board[row][3] = team;
      fillInBoard(row,3,team);
      checkGameOver();
      if(team == 1) { team = -1;  }
      else if(team == -1) { team = 1; }
    }

  });
  document.querySelector("#button5").addEventListener("click", (e) => {
    var row = 6;
    while(board[row][4] == 1 || board[row][4] == -1)
    {
      row--;
      if(row == -1){break;}
    }
    if(row != -1)
    {
      board[row][4] = team;
      fillInBoard(row,4,team);
      checkGameOver();
      if(team == 1) { team = -1;  }
      else if(team == -1) { team = 1; }
    }
    console.log(board);
  });
  document.querySelector("#button6").addEventListener("click", (e) => {
    var row = 6;
    while(board[row][5] == 1 || board[row][5] == -1)
    {
      row--;
      if(row == -1){break;}
    }
    if(row != -1)
    {
      board[row][5] = team;
      fillInBoard(row,5,team);
      checkGameOver();
      if(team == 1) { team = -1;  }
      else if(team == -1) { team = 1; }
    }
    console.log(board);
  });
  document.querySelector("#button7").addEventListener("click", (e) => {
    var row = 6;
    while(board[row][6] == 1 || board[row][6] == -1)
    {
      row--;
      if(row == -1){break;}
    }
    if(row != -1)
    {
      board[row][6] = team;
      fillInBoard(row, 6, team);
      checkGameOver();
      if(team == 1) { team = -1;  }
      else if(team == -1) { team = 1; }
    }
    console.log(board);
  });

});

function fillInBoard(row, column, team)
{
  var boardNumber = (7 * row) + column + 1;
  var divID = "grid" + boardNumber.toString();
  if(team == 1)
  { document.getElementById(divID).style.backgroundColor = "yellow";}
  else if(team == -1)
  { document.getElementById(divID).style.backgroundColor = "red";}
}

function checkGameOver()
{



}
