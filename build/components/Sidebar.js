export default class Sidebar extends React.Component {
  render() {
    const items = JSON.parse(localStorage.getItem("data"));
    return /*#__PURE__*/React.createElement("div", {
      id: "sidebar"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "container"
    }, items.map(elem => /*#__PURE__*/React.createElement("li", {
      className: "elem",
      key: elem.name
    }, elem.name))));
  }

}