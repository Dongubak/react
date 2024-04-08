import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch('http://localhost:8081/')
  }, [])

  return (
    <div>

    </div>
  )
}

export default App;