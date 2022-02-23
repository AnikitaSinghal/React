import { useState } from "react";

function Profile(props) {
  const [upadatedUsername, setUpdatedUsername] = useState("");
  return (
    <div style={{ marginTop: 30 }}>
      <input
        type="text"
        placeholder="username"
        value={upadatedUsername}
        onChange={(e) => {
          setUpdatedUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.setUsername(upadatedUsername);
        }}
      >
        Update UserName
      </button>
    </div>
  );
}
export default Profile;
