export default class Editor extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "editor"
    }, /*#__PURE__*/React.createElement("p", {
      className: "main",
      contentEditable: "true",
      placeholder: "Start Writing..."
    }, "Test"));
  }

}