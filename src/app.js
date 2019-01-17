'use strict'

import React, { Component } from 'react';

class App extends Component {

    render() {
        return (
            <div className="app">

                <div className="header">
                    <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
                </div>

                <div className="content">

                    <div className="search">
                        <input type="search" placeholder="Digite o nome do usuário..." />
                    </div>

                    <div className="user-info">
                        <img src="https://avatars1.githubusercontent.com/u/22194857?v=4" />

                        <h1>
                            <a href="#">Willian Ferreira</a>
                        </h1>

                        <ul className="repos-info">
                            <li>Repositórios: 2</li>
                            <li>Seguidores: 0</li>
                            <li>Seguindo: 1</li>
                        </ul>

                    </div>

                    <div className="actions">
                        <button>Ver repositórios</button>
                        <button>Ver favoritos</button>
                    </div>

                    <div className="actions-info">

                        <div>
                            <h2>Repositórios:</h2>
                            <ul className="repos">
                                <li><a href="#">Repo name</a></li>
                                <li><a href="#">Repo name</a></li>
                                <li><a href="#">Repo name</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2>Favoritos:</h2>
                            <ul className="starred">
                                <li><a href="#">Starred name</a></li>
                                <li><a href="#">Starred name</a></li>
                                <li><a href="#">Starred name</a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        )
    }

}

export default App;