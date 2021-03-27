import './Profile.css'

import {Link} from "react-router-dom";
import * as journalService from "../../services/journalService";
import * as userService from "../../services/userService";

import React, {useContext, useState, useEffect} from 'react';
import UserContext from "../../Context";

const Profile = () => {
    const context = useContext(UserContext);
    const userId = context.user.id;

    const [journals, setJournals] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        journalService.getMy(userId)
            .then(res => setJournals(res));

        userService.getOne(userId)
            .then(res => setUser(res));

    }, []);


    if (user.avatarUrl === '') {
        user.avatarUrl = 'https://static.thenounproject.com/png/705020-200.png'
    }

    const zeroPad = (num, places) => String(num).padStart(places, '0');
    const journalArray = (zeroPad(journals.length, 3)).toString().split('');

    let badge = '';

    if (journals.length > 10) {
        badge = 'Професионалист'
    } else if (journals.length > 5) {
        badge = 'Напреднал'
    } else {
        badge = 'Начинаещ'
    }

    let noJournals;
    if (journals.length === 0) {
        noJournals = <div className="no-journals-info">Нямате пътеписи...</div>;
    }

    return (
        <section className="profile-section">
            <div className="profile-content-wrapper">
                <h1 className="profile-heading">Моят профил</h1>
                <div className="profile-user-info-container">

                    <div className="data-wrapper">
                        <div className="data-wrapper-section">
                            <p className="data-wrapper-subtitle">Потребител:</p>
                            <p className="data-wrapper-paragraph">{user.username}</p>
                        </div>
                        <div className="data-wrapper-section">
                            <div className="data-wrapper-subtitle tooltip">Значка:
                                <span
                                    className="tooltip-text">Определя се от броя на публикуваните пътеписи</span>
                            </div>
                            <p className="data-wrapper-paragraph">{badge}</p>
                        </div>
                    </div>

                    <div className="avatar-image-wrapper">
                        <div className="avatar-image-container">
                            <img className="avatar-image" src={user.avatarUrl} alt="avatar"></img>
                        </div>
                    </div>

                    <div className="journal-counter-wrapper">
                        <div className="journal-counter-heading">Пътеписи</div>
                        <div className="journal-counter-digit-container">
                            {journalArray.map((x, index) =>
                                <div key={index} className="journal-counter-digit">{x}</div>
                            )}
                        </div>
                    </div>

                </div>
                <div className="user-journals-wrapper">
                    <div className="user-journals-header">
                        <h2 className="user-journals-heading">Моите пътеписи</h2>
                    </div>
                    <div className="user-journals-container">
                        <ul className="user-journals-list">
                            {noJournals}
                            {journals.map(x =>
                                <Link key={x.id} {...x} to={`/journal/details/${x._id}`}>
                                    <div className="user-journal-li-wrapper">
                                        <li className="user-journal-list-item">
                                            <span className="user-journal-list-item-text">{x.title}</span>
                                        </li>
                                    </div>
                                </Link>
                            )}

                        </ul>
                        <div className="add-journal-profile-button-wrapper">
                            <Link className="button new-item-button" to="/journal/create">Нов пътепис<i
                                className="fas fa-check"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
