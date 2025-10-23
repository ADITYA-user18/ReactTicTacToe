import { useState } from 'react'


const board = Array(9).fill(null)
function App() {
  const [Board, setBoard] = useState(board)
  const [Turn, setTurn] = useState('X')
  const [Winner, setWinner] = useState(null)

  function Clicker(val){
    const newBoard = [...Board]
    newBoard[val] = Turn
    setBoard(newBoard)

    const win = CheckWinner(newBoard)

    if(win){
      setWinner(win)
    }
    else{
      setTurn(Turn =='X'?'O':'X')
    }
  }

  function CheckWinner(Board){
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for( let [a,b,c] of patterns){
      if(Board[a] && Board[a] === Board[b] && Board[a]===Board[c]){
        return Board[a]
      }
      
    }
    
  }



  return (
    <>
    <div className="game flex justify-center flex-col text-center gap-5 p-8">
      <div className="heading">
        <h1>Player {Turn}'s Turn</h1>
        <h1>player {Winner} won</h1>
        <button className='border-2 border-amber-300 p-3 bg-amber-100'>
          Reset Game
        </button>
      </div>
    

    <div className="boardAnna grid grid-cols-3 gap-0 m-auto">
  {Board.map((val, index) => (
    <button

    onClick={()=>Clicker(index)}
      key={index}
      className="buttonanna border border-black h-20 w-20 flex items-center justify-center text-xl font-bold hover:bg-amber-200 cursor-pointer"
    >
      {val}
    </button>
  ))}
</div>



    </div>
    </>
  )
}

export default App
