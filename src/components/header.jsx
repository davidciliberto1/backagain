import React, { useState } from "react";

function Header() {
  const [header, setHeader] = useState("");

  return <div className='header'><h1>{header}</h1>
  <input onChange={e => setHeader(e.target.value)} />
  </div>
}

export default Header;
