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
                    <Route path="/dictionary/about" exact component={About}/>
                    <Route path="/dictionary/vineyard" exact component={Vineyard}/>
                    <Route path="/dictionary/grape" exact component={Grape}/>
                    <Route path="/dictionary/wine" exact component={Wine}/>
                    <Route path="/dictionary/barrel" exact component={Barrel}/>
                    <Route path="/dictionary/bottle" exact component={Bottle}/>
                    <Route path="/dictionary/tasting" exact component={Tasting}/>
                    <Route path="/dictionary/fermentation" exact component={Fermentation}/>
                    <Route path="/dictionary/must" exact component={Must}/>
                    <Route path="/dictionary/yeast" exact component={Yeast}/>
                    <Route path="/dictionary/cork" exact component={Cork}/>
                    <Route path="/dictionary/blending" exact component={Blending}/>

                    <Route path="/destination" exact component={Destination}/>
                    <Route path="/all-destinations" exact component={AllDestinations}/>
                    <Route path="/destination/details/:id" exact component={DestinationDetails}/>
                    <Route path="/add-destination" exact component={AddDestination}/>

                    <Route path="/journal" exact component={Journal}/>
                    <Route path="/all-journals" exact component={AllJournals}/>
                    <Route path="/journal-details" exact component={JournalDetails}/>
                    <Route path="/add-journal" exact component={AddJournal}/>

                </Switch>
            </main>
        </div>
    );
}

export default App;
