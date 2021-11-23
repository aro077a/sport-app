import React, { useState } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.scss';
import Position from './Position';
import Player from './Player';

function FirstQuarter({ players }) {
  const [playerPositions, setPlayerPositions] = useState({
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
  });
  const [uniqueIds, setUniqueIds] = useState({});

  const isIdsUnique = Object.values(uniqueIds).some((id) => id.count > 1);

  const selectedPlayerData = (number, id, prevId) => {
    if ((Object.keys(uniqueIds).includes(prevId) && prevId) || !id) {
      setUniqueIds((state) => ({
        ...state,
        [prevId]: {
          count: uniqueIds[prevId].count - 1,
        },
      }));
      if (!id) return;
    }

    setUniqueIds((state) => ({
      ...state,
      [id]: {
        count: uniqueIds?.[id]?.count ? uniqueIds[id].count + 1 : 1,
      },
    }));

    setPlayerPositions({
      ...playerPositions,
      [number]: players.find((p) => p.id === id),
    });
  };
  console.log(uniqueIds);
  return (
    <div className='composeTeam p-4'>
      <form>
        <div className='selectPlayer'>
          <div>
            <Player
              uniqueIds={uniqueIds}
              data={players}
              handleChange={(id, prevId) => selectedPlayerData(0, id, prevId)}
            />
            <Player
              uniqueIds={uniqueIds}
              data={players}
              handleChange={(id, prevId) => selectedPlayerData(1, id, prevId)}
            />
            <Player
              uniqueIds={uniqueIds}
              data={players}
              handleChange={(id, prevId) => selectedPlayerData(2, id, prevId)}
            />
            <Player
              uniqueIds={uniqueIds}
              data={players}
              handleChange={(id, prevId) => selectedPlayerData(3, id, prevId)}
            />
            <Player
              uniqueIds={uniqueIds}
              data={players}
              handleChange={(id, prevId) => selectedPlayerData(4, id, prevId)}
            />
          </div>
          <div>
            <Position data={playerPositions[0]} />
            <Position data={playerPositions[1]} />
            <Position data={playerPositions[2]} />
            <Position data={playerPositions[3]} />
            <Position data={playerPositions[4]} />
          </div>
        </div>
        {isIdsUnique && (
          <div className='errorMessage'>* Player Can be selected only once</div>
        )}
        <input type='submit' value='Save' className='submit mt-4' />
      </form>
    </div>
  );
}

const mapState = (state) => ({
  players: state.addPlayer.players,
});

export default connect(mapState, null)(FirstQuarter);
