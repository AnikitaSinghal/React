function TopNav(props) {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
      {props.username}
    </div>
  );
}
export default TopNav;
