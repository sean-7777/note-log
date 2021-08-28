export default class Sidebar extends React.Component {
  handleEvent(event) {
    switch(event.type) {
      case "click":
        console.log(event.target.getAttribute("data-name"))
        break;
    }
  }

  render() {
    const items = JSON.parse(localStorage.getItem("data"));
    return (
      <div id="sidebar">
        <ul className="container">
          {Object.keys(items).map(item => {
           return <li
              className="elem"
              key={item}
              onClick={this.handleEvent}
              data-name={item}>
                {item}
             </li>
          })}
        </ul>
      </div>
    )
  }
}