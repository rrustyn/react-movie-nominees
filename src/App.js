import { useEffect, useState } from 'react';
import './App.css';
import Ballot from './Components/Ballot/Ballot';
import api from "./Api/Api";

function App() {
  const [selections, setSelections] = useState({});
  const [ballotData, setBallotData] = useState({
    data: null,
    infoLoaded: false
  });

  useEffect(
    function loadBallotData() {
      async function getBallotData() {
        try {
          api.getBallotData().then(data => {
            setBallotData({
              data: data,
              infoLoaded: true
            });
          });
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setBallotData({
            data: null,
            infoLoaded: true
          });
        }
      }
      getBallotData();
      console.log(ballotData);
    }, [ballotData.infoLoaded]
  );

  function handleSelection(category, id) {
    setSelections({
      ...selections,
      [category]: id
    });
  }

  return (
    <div className="App">
      {ballotData.infoLoaded
        ? <Ballot
          ballotData={ballotData.data}
          selections={selections}
          handleSelection={handleSelection}
        />
        : <p>  Loading... </p>
      }
    </div>
  );
}

export default App;
