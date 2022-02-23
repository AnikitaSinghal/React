import { useState } from "react";
import Page from "./Page";
import TopNav from "./TopNav";

function MainContent() {
  const [username, setUsername] = useState("Anikita");
  return (
    <>
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <TopNav username={username} />
        <Page username={username} setUsername={setUsername} />
      </div>
    </>
  );
}
export default MainContent;
