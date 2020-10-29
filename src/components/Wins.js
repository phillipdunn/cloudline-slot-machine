import React from "react";
import { useSelector } from "react-redux";

// TASK
// Display the number of wins, i.e 'You've won x times'

const Wins = () => {
  const tally = useSelector(state => state.tally);
  return (
    <p style={{'margin-left': '5px',"fontSize": "30px"}}>{`Wins: ${tally.wins}`}</p>
  )
}

export default Wins;
