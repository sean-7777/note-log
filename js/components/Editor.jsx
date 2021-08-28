export default class Editor extends React.Component {
  constructor(props) {
    super(props);

    const name = this.props.noteName;
    this.state = {
      editorContent: name ? JSON.parse(
        localStorage.getItem("data")
      )[name] : ""
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    switch(event.type) {
      case "input":
        this.setState({editorContent: event.target.value});
        break;
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      editorContent: name ? JSON.parse(
        localStorage.getItem("data")
      )[name] : ""
    };
  }

  componentDidMount() {
    this.autoSaveTimer = setInterval(() => {
      
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.autoSaveTimer);
  }

  render() {
    return (
      <div id="editor">
        <textarea className="main"
          contentEditable="true"
          suppressContentEditableWarning={true}
          onInput={this.handleEvent}
          value={this.state.editorContent}
          placeholder="Start Writing..." />
      </div>
    )
  }
}