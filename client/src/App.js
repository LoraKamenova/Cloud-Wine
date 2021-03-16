import './App.css';


import {Route, Switch} from "react-router-dom"

import Start from "./components/Start/Start";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Vineyard from "./components/Vineyard/Vineyard";
import Grape from "./components/Grape/Grape";
import Wine from "./components/Wine/Wine";
import Bottle from "./components/Bottle/Bottle";
import Barrel from "./components/Barrel/Barrel";
import Destination from "./components/Destination/Destination";
import Journal from "./components/Journal/Journal";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AddJournal from "./components/AddJournal/AddJournal";
import AddDestination from "./components/AddDestination/AddDestination";
import AllJournals from "./components/AllJournals/AllJournals";
import JournalDetails from "./components/JournalDetails/JournalDetails";
import AllDestinations from "./components/AllDestinations/AllDestinations";
import DestinationDetails from "./components/DestinationDetails/DestinationDetails";

function App() {
    return (
        <div className="app">

            <Switch>
                <Route path="/" exact component={Start}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/vineyard" exact component={Vineyard}/>
                <Route path="/grape" exact component={Grape}/>
                <Route path="/wine" exact component={Wine}/>
                <Route path="/bottle" exact component={Bottle}/>
                <Route path="/barrel" exact component={Barrel}/>
                <Route path="/destination" exact component={Destination}/>
                <Route path="/journal" exact component={Journal}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/add-journal" exact component={AddJournal}/>
                <Route path="/add-destination" exact component={AddDestination}/>
                <Route path="/all-journals" exact component={AllJournals}/>
                <Route path="/journal-details" exact component={JournalDetails}/>
                <Route path="/all-destinations" exact component={AllDestinations}/>
                <Route path="/destination-details" exact component={DestinationDetails}/>
            </Switch>

        </div>
    );
}

export default App;
