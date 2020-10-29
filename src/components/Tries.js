import React from "react";
import { useSelector } from "react-redux";

// TASK
// Display the number of tries, i.e 'You've tried x times'

const Tries = () => {
  const tally = useSelector(state => state.tally);
  return (
  <p style={{"fontSize": "30px"}}>{`Tries: ${tally.tries}`}</p>
  )
}

export default Tries;
