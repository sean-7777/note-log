export default class Sidebar extends React.Component {
  handleEvent(event) {
    switch (event.type) {
      case "click":
        console.log(event.target.getAttribute("data-name"));
        break;
    }
  }

  render() {
    const items = JSON.parse(localStorage.getItem("data"));
    return /*#__PURE__*/React.createElement("div", {
      id: "sidebar"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "container"
    }, Object.keys(items).map(item => {
      return /*#__PURE__*/React.createElement("li", {
        className: "elem",
        key: item,
        onClick: this.handleEvent,
        "data-name": item
      }, item);
    })));
  }

}