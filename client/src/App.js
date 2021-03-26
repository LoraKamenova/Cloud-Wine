import './App.css';


import {Route, Switch} from "react-router-dom"

import Start from "./components/StartPage/Start";
import Home from "./components/HomePage/Home";
import About from "./components/Dictionary/DictionaryEntries/About/About";
import DictionaryPage from "./components/Dictionary/DictionaryPage/DictionaryPage";
import Vineyard from "./components/Dictionary/DictionaryEntries/Vineyard/Vineyard";
import Grape from "./components/Dictionary/DictionaryEntries/Grape/Grape";
import Wine from "./components/Dictionary/DictionaryEntries/Wine/Wine";
import Bottle from "./components/Dictionary/DictionaryEntries/Bottle/Bottle";
import Barrel from "./components/Dictionary/DictionaryEntries/Barrel/Barrel";
import Destination from "./components/Destination/DestinationPage/Destination";
import Journal from "./components/Journal/JournalPage/Journal";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import AddJournal from "./components/Journal/AddJournal/AddJournal";
import AddDestination from "./components/Destination/AddDestination/AddDestination";
import AllJournals from "./components/Journal/AllJournals/AllJournals";
import JournalDetails from "./components/Journal/JournalDetails/JournalDetails";
import AllDestinations from "./components/Destination/AllDestinations/AllDestinations";
import DestinationDetails from "./components/Destination/DestinationDetails/DestinationDetails";
import Aside from "./components/Navigation/Aside/Aside";
import Tasting from "./components/Dictionary/DictionaryEntries/Tasting/Tasting";
import Fermentation from "./components/Dictionary/DictionaryEntries/Fermentation/Fermentation";
import Must from "./components/Dictionary/DictionaryEntries/Must/Must";
import Yeast from "./components/Dictionary/DictionaryEntries/Yeast/Yeast";
import Cork from "./components/Dictionary/DictionaryEntries/Cork/Cork";
import Blending from "./components/Dictionary/DictionaryEntries/Blending/Blending";
import WineList from "./components/Winelist/WinelistPage/WineList";
import TopWines from "./components/Winelist/TopWines/TopWines";
import WineListDetails from "./components/Winelist/WInelistDetails/WineListDetails";
import MyJournals from "./components/Journal/AllJournals/MyJournals";
import EditDestination from "./components/Destination/EditDestination/EditDestination";

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

                    <Route path="/dictionary" exact component={DictionaryPage}/>
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
                    <Route path="/destination/details/:destinationId" component={DestinationDetails}/>
                    <Route path="/add-destination" exact component={AddDestination}/>
                    <Route path="/destination/edit/:destinationId" exact component={EditDestination}/>

                    <Route path="/journal" exact component={Journal}/>
                    <Route path="/all-journals" exact component={AllJournals}/>
                    <Route path="/my-journals" exact component={MyJournals}/>
                    <Route path="/journal/details/:journalId" component={JournalDetails}/>
                    <Route path="/add-journal" exact component={AddJournal}/>

                    <Route path="/wineList" exact component={WineList}/>
                    <Route path="/topWines" exact component={TopWines}/>
                    <Route path="/wineList/details/:wineListId" component={WineListDetails}/>

                </Switch>
            </main>
        </div>
    );
}

export default App;
