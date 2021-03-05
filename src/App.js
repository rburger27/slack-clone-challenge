import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components"
import Chat from "./components/Chat";
import Login from "./components/Login"
import Header from './components/ChatHeader'

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header/>
        <Switch>
          <Route path="/room">
            <Chat></Chat>
          </Route>
          <Route path="/"><Login></Login></Route>
        </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div ``