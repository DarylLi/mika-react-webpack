import React from 'react'

function PageEntry() {
  return (
    <div className="App" style={{"background":"#fbe2f0"}}>
      <header className="App-header" style={{display:'flex','padding':'10px 40px','justify-content':'center','flex-direction':'column'}}>
          <span>this is a base template used by cli project witch is wip</span>
		  <img src='http://all.franxxdaryl.site/dist/assets/wheels/wm9.png' style={{width:'100px'}} />
        <a
          className="App-link"
          href="http://franxxdaryl.site"
          target="_blank"
          rel="noopener noreferrer"
        >
          start project
        </a>
      </header>
    </div>
  );
}

export default PageEntry;
