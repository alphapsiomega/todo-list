import React, {useState} from 'react';
import {getToken} from "../../config/Token";

function CheckJwt(props) {
  const [jwt, setJwt] = useState(getToken);
  return (
    <>
      <button className="button is-primary is-outlined field"
              onClick={() => {
                setJwt(getToken())
              }}
      >
        Check JWT
      </button>
      <div className="jwt-display">
        {jwt && jwt.split('.').map((text, index) => {
          return <div key={index}>{text}</div>
        })}
      </div>
    </>
  );
}

export default CheckJwt;
