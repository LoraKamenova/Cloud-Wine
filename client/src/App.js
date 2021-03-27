import './App.css';

import {Route, Switch} from "react-router-dom"

import Start from "./components/StartPage/Start";
import Home from "./components/HomePage/Home";
import Terroir from "./components/Dictionary/DictionaryEntries/Terroir/Terroir";
import DictionaryPage from "./components/Dictionary/DictionaryPage/DictionaryPage";
import Vineyard from "./components/Dictionary/DictionaryEntries/Vineyard/Vineyard";
import Grape from "./components/Dictionary/DictionaryEntries/Grape/Grape";
import Wine from "./components/Dictionary/DictionaryEntries/Wine/Wine";
import Bottle from "./components/Dictionary/DictionaryEntries/Bottle/Bottle";
import Barrel from "./components/Dictionary/DictionaryEntries/Barrel/Barrel";
import Destination from "./components/Destination/Page/Destination";
import Journal from "./components/Journal/Page/Journal";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import CreateJournal from "./components/Journal/Create/CreateJournal";
import CreateDestination from "./components/Destination/Create/CreateDestination";
import AllJournals from "./components/Journal/All/AllJournals";
import JournalDetails from "./components/Journal/Details/JournalDetails";
import AllDestinations from "./components/Destination/All/AllDestinations";
import DestinationDetails from "./components/Destination/Details/DestinationDetails";
import Aside from "./components/Navigation/Aside/Aside";
import Tasting from "./components/Dictionary/DictionaryEntries/Tasting/Tasting";
import Fermentation from "./components/Dictionary/DictionaryEntries/Fermentation/Fermentation";
import Must from "./components/Dictionary/DictionaryEntries/Must/Must";
import Yeast from "./components/Dictionary/DictionaryEntries/Yeast/Yeast";
import Cork from "./components/Dictionary/DictionaryEntries/Cork/Cork";
import Blending from "./components/Dictionary/DictionaryEntries/Blending/Blending";
import AllWines from "./components/Wine/All/AllWines";
import TopWines from "./components/Wine/Top/TopWines";
import WineDetails from "./components/Wine/Details/WineDetails";
import CreateWine from "./components/Wine/Create/CreateWine";
import EditDestination from "./components/Destination/Edit/EditDestination";
import DeleteDestination from "./components/Destination/Delete/DeleteDestination";
import EditWine from "./components/Wine/Edit/EditWine";
import DeleteWine from "./components/Wine/Delete/DeleteWine";
import EditJournal from "./components/Journal/Edit/EditJournal";
import DeleteJournal from "./components/Journal/Delete/DeleteJournal";
import Profile from "./components/Profile/Profile";

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
                    <Route path="/dictionary/terroir" exact component={Terroir}/>
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
                    <Route path="/destination/all" exact component={AllDestinations}/>
                    <Route path="/destination/details/:destinationId" component={DestinationDetails}/>
                    <Route path="/destination/create" exact component={CreateDestination}/>
                    <Route path="/destination/edit/:destinationId" exact component={EditDestination}/>
                    <Route path="/destination/delete/:destinationId" exact component={DeleteDestination}/>

                    <Route path="/wine/all" exact component={AllWines}/>
                    <Route path="/wine/top" exact component={TopWines}/>
                    <Route path="/wine/details/:wineId" component={WineDetails}/>
                    <Route path="/wine/create" exact component={CreateWine}/>
                    <Route path="/wine/edit/:wineId" exact component={EditWine}/>
                    <Route path="/wine/delete/:wineId" exact component={DeleteWine}/>

                    <Route path="/journal" exact component={Journal}/>
                    <Route path="/journal/all" exact component={AllJournals}/>
                    <Route path="/journal/details/:journalId" component={JournalDetails}/>
                    <Route path="/journal/create" exact component={CreateJournal}/>
                    <Route path="/journal/edit/:journalId" exact component={EditJournal}/>
                    <Route path="/journal/delete/:journalId" exact component={DeleteJournal}/>

                    <Route path="/profile" exact component={Profile}/>
                </Switch>
            </main>
        </div>
    );
}

export default App;
