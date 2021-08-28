import Sidebar from "./Sidebar.js";
import Editor from "./Editor.js";
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar/>
        <Editor noteName="testaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
      </React.Fragment>
    )
  }
}