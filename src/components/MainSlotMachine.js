import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToWins, addToTries, resetTally } from "../actions/tallyActions";
import Tries from "./Tries";
import Wins from "./Wins";
import lemon from "../images/lemon.png";
import seven from "../images/seven.png";
import cherry from "../images/cherry.png";

const Parent = styled.div`
  margin: 0px;
  box-sizing: 0px;
  height: 100%;
  width: 100%;
  background: #524f4f;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-around;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const SubDivOne = styled.div`
  height: 20%;
  width: 85%;
  margin: 20px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: purple;
  color: white;
  border-radius:10px;
  border: solid gold 3px;
  box-shadow:0 4px 7px rgba(0, 0, 0, 0.2), 0 4px 7px rgba(0, 0, 0, 0.27);
  @media screen and (min-width: 500px) { 
    height:30%; 
  };
  @media screen and (min-width: 768px) { 
    height: 15em;
    width: 40em;
  };
`;

const SubDivTwo = styled.div`
  height: 20%;
  width: 90%;
  margin: 20px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: purple;
  border-radius: 10px;
  border: solid gold 3px;
  box-shadow:0 4px 7px rgba(0, 0, 0, 0.2), 0 4px 7px rgba(0, 0, 0, 0.27);
  @media screen and (min-width: 500px) { 
    height :40%;
  };
  @media screen and (min-width: 768px) { 
    height: 15em;
    width: 40em;
  };
`;

const Header = styled.div`
  height: 60px;
  width: 100%;
  background: silver;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: black;
  border-radius:10px;
  border: solid gold 2px;
  box-shadow:0 4px 7px rgba(0, 0, 0, 0.2), 0 4px 7px rgba(0, 0, 0, 0.27);
`;

const Slots = styled.div`
  display: flex;
  // justify-content: space-between;
`;

const Slot = styled.img`
  height: 120px;
  width: 80px;
  border: solid gold 2px;
  border-radius: 10px;
  margin:5px;
  @media screen and (min-width: 500px) { 
    height: 170px;
    width: 120px;
  };
  @media screen and (min-width: 768px) { 
    height: 12em;
    width: 10em;
  };
`;

const Spin = styled.button`
  width: 200px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  background: gold;
  color: black;
  border-radius: 10px;
  border: solid gold 2px;
  outline: none;
  text-decoration: none;
  user-select: none;
  box-shadow:0 4px 7px rgba(0, 0, 0, 0.2), 0 4px 7px rgba(0, 0, 0, 0.27);
  :hover {
    cursor: pointer;
    color:white;
  }
`;

const Tally = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  font-size: 30px;
  border-radius: 10px;
`;

const MainSlotMachine = () => {
  // The dispatch function for dispatching actions when we
  // call our action creators.
  const dispatch = useDispatch();

  // Getting our main tally data from redux state.
  const tally = useSelector(state => state.tally);

  // A few random base colors. To worsen the odds of winning,
  // you can add more colors.
  const baseColors = [lemon, cherry, seven];

  // By default, the slot machine colors are all grey. You can change
  // this if you want.
  const [newColors, setColors] = useState([lemon, cherry, seven]);

  // TASK
  // Here is the main spin function which should be called
  // every time we press the Spin button. This function should:

  // 1. Add to our tally tries in the redux state. (i.e dispatch(addToTries()))

  // 2. Randomly select a color 3 times from our base colors, and
  // set them in our local state above, newColors.

  // 3. If all the colors are the same, we add to our tally wins.
  
  const spin = () => {
    (dispatch(addToTries()))
    let colourOne = baseColors[Math.floor(Math.random() * baseColors.length)];
    let colourTwo = baseColors[Math.floor(Math.random() * baseColors.length)];
    let colourThree = baseColors[Math.floor(Math.random() * baseColors.length)];
    if (colourOne === colourTwo && colourTwo === colourThree){
      (dispatch(addToWins()))
    }
    // console.log(tally)
    return setColors([colourOne, colourTwo, colourThree])
  }

  // TASK
  // In this lifecycle function, of the tally wins reaches 5,
  // have a window.confirm message come up telling the user to 'Stop Gambling!'.
  // on 5 wins the spin button should also become disabled.
  // On selecting 'ok', the tally wins and tries are reset.

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if(tally.wins > 5) {
      window.confirm('Stop Gambling!')
      dispatch(resetTally())
      setDisabled(false)
    } else {
     
    };
  },[tally.wins, dispatch]);

  // TASK
  // Within the Slots div, create 3 slots. (Create a styled component called 'Slot'
  // and render it out 3 times). Their background colors should be those stored
  // in the newColors array. (Use inline styling)
  // console.log(newColors)
  return (
    <Parent>
       <SubDivOne>
        <Header>Tally</Header>
        <Tally>
          <Tries/>
          <Wins/>
        </Tally>
      </SubDivOne>
      <SubDivTwo>
        <Slots>
          {/* <Slot style={{"backgroundImage": newColors[0]}}/>
          <Slot style={{"backgroundImage": newColors[1]}}/>
          <Slot style={{"backgroundImage": newColors[2]}}/> */}
          <Slot src={newColors[0]}/>
          <Slot src={newColors[1]}/>
          <Slot src={newColors[2]}/>
        </Slots>
      </SubDivTwo>
      <Spin onClick={spin} style={{"pointerEvents": disabled ? "none" : "initial"}}>Spin!</Spin>
    </Parent>
  );
};

export default MainSlotMachine;
