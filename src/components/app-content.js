'use strict'

import React from 'react';
import Search from './search';
import UserInfo from './user-info';
import Header from './header';
import Actions from './actions';
import Repos from './repos';

const AppContent = ({ userInfo, repos, starred, handleSearch, getRepos, getStarred, searchError }) => (
    <div className="app">

        <Header />

        <div className="content">

            <Search handleSearch={handleSearch} />

            {searchError.length == 0 && <div>

                {!!userInfo && <UserInfo userInfo={userInfo} />}

                {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

                <div className="actions-info">

                    {!!repos.length && <Repos className="repos" title="Repositórios:" repos={repos} />}

                    {!!starred.length && <Repos className="starred" title="Favoritos:" repos={starred} />}

                </div>

            </div>}

            {searchError.length != 0 && <div>

                <h1 className="error-code">Erro: {searchError.status}</h1>
                <h2 className="error-message">{searchError.message}</h2>

            </div>}

        </div>
    </div>
)

AppContent.propTypes = {
    userInfo: React.PropTypes.object,
    repos: React.PropTypes.array.isRequired,
    starred: React.PropTypes.array.isRequired
};

export default AppContent;

