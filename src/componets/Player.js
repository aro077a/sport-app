import React, { useState } from 'react';

const Player = ({ data, handleChange, uniqueIds }) => {
  const [selectId, setSelectId] = useState('');

  const borderStyle =
    Object.keys(uniqueIds).includes(selectId) &&
    uniqueIds?.[selectId]?.count > 1
      ? '#ff0000'
      : '#495ef2';
  return (
    <div>
      <select
        style={{ borderBottom: `2px solid ${borderStyle}` }}
        onChange={(e) => {
          handleChange(e.target.value, selectId);
          setSelectId(e.target.value);
        }}
      >
        <option value=''>Player</option>
        {data.map((v, i) => (
          <option key={i} value={v.id}>
            {v.fullName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Player;
