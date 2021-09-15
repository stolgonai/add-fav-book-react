import React, { useState, createContext, useContext } from 'react';


const NamesContext = createContext();

function Test() {
  const [names, setNames] = useState(['Mike', 'John', 'Ketty']);

  return (
    <div className="test">
      <NamesContext.Provider value={{names, setNames}}>
        <Top />
        <Bottom copyright="News" />
      </NamesContext.Provider>
    </div>
  );
}

function Top({ count }) {
  const { names } = useContext(NamesContext);
  return (
    <div>
      ТОП
      <br/>
      {names.map(n => <b key={n}>{n[0]}</b>)}

      <hr/>
    </div>
  )
}

function Bottom({ copyright }) {
  return (
    <div>
      <span>{copyright}</span>
      <hr/>
      <List />
    </div>
  )
}

function List() {
  const [val, setVal] = useState('');
  const { names, setNames } = useContext(NamesContext);

  function addName() {
    setNames([...names, val]);
    console.log(names);
  }
  
  console.log(names);

  return (
    <div>
      <input type="text" onChange={(e) => setVal(e.target.value)}/>
      <button onClick={addName}>add</button>
      <section>
        {names.map(n => <div key={n}>{n}</div>)}
      </section>
    </div>
  )
}


export default Test;


// source code -> virtual dom -> dom

