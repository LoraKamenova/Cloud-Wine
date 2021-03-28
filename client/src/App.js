import './App.css';

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
import Error404 from "./components/Shared/Error/Error404";

import {Route, Switch, Redirect} from "react-router-dom"
import React, {useContext} from 'react'
import UserContext from './Context'

function App() {

    const context = useContext(UserContext)
    const loggedIn = context.user && context.user.loggedIn

    return (
        <div className="app">
            <main className="page-wrapper">
                <Aside/>
                <Switch>
                    <Route path="/" exact component={Start}/>

                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login}/>

                    <Route path="/home">{loggedIn ? (<Home/>) : (<Redirect to="/login"/>)}</Route>

                    <Route path="/home" exact>{loggedIn ? (<Home/>) : (<Redirect to="/login"/>)}</Route>

                    <Route path="/dictionary" exact>{loggedIn ? (<DictionaryPage/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/dictionary/terroir" exact>{loggedIn ? (<Terroir/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/dictionary/vineyard" exact>{loggedIn ? (<Vineyard/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/dictionary/grape" exact>{loggedIn ? (<Grape/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/dictionary/wine" exact>{loggedIn ? (<Wine/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/dictionary/barrel" exact>{loggedIn ? (<Barrel/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/dictionary/bottle" exact>{loggedIn ? (<Bottle/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/dictionary/tasting" exact>{loggedIn ? (<Tasting/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/dictionary/fermentation" exact>{loggedIn ? (<Fermentation/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/dictionary/must" exact>{loggedIn ? (<Must/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/dictionary/yeast" exact>{loggedIn ? (<Yeast/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/dictionary/cork" exact>{loggedIn ? (<Cork/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/dictionary/blending" exact>{loggedIn ? (<Blending/>) : (<Redirect to="/login"/>)}</Route>


                    <Route path="/destination" exact>{loggedIn ? (<Destination/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/destination/all" exact>{loggedIn ? (<AllDestinations/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/destination/details/:destinationId" exact render={(props) => {
                        return loggedIn ? (<DestinationDetails {...props} />) : (<Redirect to="/login"/>)}}/>

                    <Route path="/destination/create" exact>{loggedIn ? (<CreateDestination/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/destination/edit/:destinationId" exact render={(props) => {
                        return loggedIn ? (<EditDestination {...props} />) : (<Redirect to="/login"/>)}}/>

                    <Route path="/destination/delete/:destinationId" exact render={(props) => {
                        return loggedIn ? (<DeleteDestination {...props} />) : (<Redirect to="/login"/>)}}/>


                    <Route path="/wine/all" exact>{loggedIn ? (<AllWines/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/wine/top" exact>{loggedIn ? (<TopWines/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/wine/details/:wineId" exact render={(props) => {
                        return loggedIn ? (<WineDetails {...props} />) : (<Redirect to="/login"/>)}}/>

                    <Route path="/wine/create" exact>{loggedIn ? (<CreateWine/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/wine/edit/:wineId" exact render={(props) => {
                        return loggedIn ? (<EditWine {...props} />) : (<Redirect to="/login"/>)}}/>

                    <Route path="/wine/delete/:wineId" exact render={(props) => {
                        return loggedIn ? (<DeleteWine {...props} />) : (<Redirect to="/login"/>)}}/>


                    <Route path="/journal" exact>{loggedIn ? (<Journal/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/journal/all" exact>{loggedIn ? (<AllJournals/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/journal/details/:journalId" exact render={(props) => {
                        return loggedIn ? (<JournalDetails {...props} />) : (<Redirect to="/login"/>)}}/>

                    <Route path="/journal/create" exact>{loggedIn ? (<CreateJournal/>) : (<Redirect to="/login"/>)}</Route>
                    <Route path="/journal/edit/:journalId" exact render={(props) => {
                        return loggedIn ? (<EditJournal {...props} />) : (<Redirect to="/login"/>)}}/>

                    <Route path="/journal/delete/:journalId" exact render={(props) => {
                        return loggedIn ? (<DeleteJournal {...props} />) : (<Redirect to="/login"/>)}}/>


                    <Route path="/profile" exact>{loggedIn ? (<Profile/>) : (<Redirect to="/login"/>)}</Route>

                    <Route component={Error404}/>
                </Switch>
            </main>
        </div>
    );
}

export default App;
