export default class Editor extends React.Component {
  render() {
    return (
      <div id="editor">
        <p className="main"
          contentEditable="true"
          placeholder="Start Writing...">Test</p>
      </div>
    )
  }
}