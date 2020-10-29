import React from "react";
import { useSelector } from "react-redux";

// TASK
// Display the number of tries, i.e 'You've tried x times'

const Tries = () => {
  const tally = useSelector(state => state.tally);
  return (
  <p>{`You've had ${tally.tries} Tries`}</p>
  )
}

export default Tries;
