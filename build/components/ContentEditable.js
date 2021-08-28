// https://stackoverflow.com/a/27255103
export default class ContentEditable extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      onInput: this.emitChange,
      onBlur: this.emitChange,
      contentEditable: true,
      dangerouslySetInnerHTML: {
        __html: this.props.html
      }
    });
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.html !== this.getDOMNode().innerHTML;
  }

  componentDidUpdate() {
    if (this.props.html !== this.getDOMNode().innerHTML) {
      this.getDOMNode().innerHTML = this.props.html;
    }
  }

  emitChange() {
    var html = ReactDOM.findDOMNode(this).innerHTML;
    console.log(this);

    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange({
        target: {
          value: html
        }
      });
    }

    this.lastHtml = html;
  }

}
;