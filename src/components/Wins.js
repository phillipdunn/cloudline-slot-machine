import React from "react";
import { useSelector } from "react-redux";

// TASK
// Display the number of wins, i.e 'You've won x times'

const Wins = () => {
  const tally = useSelector(state => state.tally);
  return (
    <p styles={{'margin-left': '5px'}}>{`With ${tally.wins} Wins`}</p>
  )
}

export default Wins;
