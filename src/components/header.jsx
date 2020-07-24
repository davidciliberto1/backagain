import React, { useState } from "react";

function Header() {
  const [header, setHeader] = useState("");

  return <h1>{header}
  <input onChange={e => setHeader(e.target.value)} />
  </h1>
}

export default Header;
