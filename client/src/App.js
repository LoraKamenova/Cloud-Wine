import './App.css';


import {Route, Switch} from "react-router-dom"

import Start from "./components/Start/Start";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Dictionary from "./components/Dictionary/Dictionary";
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
import Aside from "./components/Aside/Aside";
import Tasting from "./components/Tasting/Tasting";
import Fermentation from "./components/Fermentation/Fermentation";
import Must from "./components/Must/Must";
import Yeast from "./components/Yeast/Yeast";
import Cork from "./components/Cork/Cork";
import Blending from "./components/Blending/Blending";

function App() {
    return (
        <div className="app">
            <main className="page-wrapper">
                <Aside/>
                <Switch>
                    <Route path="/" exact component={Start}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/dictionary" exact component={Dictionary}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/vineyard" exact component={Vineyard}/>
                    <Route path="/grape" exact component={Grape}/>
                    <Route path="/wine" exact component={Wine}/>
                    <Route path="/barrel" exact component={Barrel}/>
                    <Route path="/bottle" exact component={Bottle}/>
                    <Route path="/destination" exact component={Destination}/>
                    <Route path="/journal" exact component={Journal}/>
                    <Route path="/all-destinations" exact component={AllDestinations}/>
                    <Route path="/add-destination" exact component={AddDestination}/>
                    <Route path="/destination-details" exact component={DestinationDetails}/>
                    <Route path="/all-journals" exact component={AllJournals}/>
                    <Route path="/add-journal" exact component={AddJournal}/>
                    <Route path="/journal-details" exact component={JournalDetails}/>
                    <Route path="/tasting" exact component={Tasting}/>
                    <Route path="/fermentation" exact component={Fermentation}/>
                    <Route path="/must" exact component={Must}/>
                    <Route path="/yeast" exact component={Yeast}/>
                    <Route path="/cork" exact component={Cork}/>
                    <Route path="/blending" exact component={Blending}/>
                </Switch>
            </main>
        </div>
    );
}

export default App;
