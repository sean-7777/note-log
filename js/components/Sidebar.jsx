export default class Sidebar extends React.Component {
  render() {
    const items = JSON.parse(localStorage.getItem("data"));
    return (
      <div id="sidebar">
        <ul className="container">
          {items.map((elem) => 
            <li className="elem" key={elem.name}>{elem.name}</li>
          )}
        </ul>
      </div>
    )
  }
}