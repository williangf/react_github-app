'use strict'

import React, { Component } from 'react';
import axios from 'axios';
import AppContent from './components/app-content';

class App extends Component {

    constructor() {
        super()
        this.state = {
            userInfo: null,
            repos: [],
            starred: [],
            searchError: []
        }
    }

    handleSearch(e) {
        axios.get(`https://api.github.com/users/${e.target.value}`)
            .then(res => {
                this.setState({
                    userInfo: {
                        username: res.data.name,
                        profileUrl: res.data.login,
                        photoUrl: res.data.avatar_url,
                        repos: res.data.public_repos,
                        followers: res.data.followers,
                        following: res.data.following
                    },
                    repos: [],
                    starred: [],
                    searchError: []
                });
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    this.setState({
                        userInfo: null,
                        repos: [],
                        starred: [],
                        searchError: {
                            status: error.response.status,
                            message: error.response.data.message
                        }
                    });
                }
            });
    }

    getRepos(type) {
        return (e) => {
            axios.get(`https://api.github.com/users/${this.state.userInfo.profileUrl}/${type}`)
                .then((result) => {
                    this.setState({
                        [type]: result.data.map((repo) => ({
                            name: repo.name,
                            link: repo.url
                        })),
                    });
                    type = type == 'repos' ? 'starred' : 'repos';
                    this.setState({
                        [type]: []
                    })
                }).catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                });
        }
    }

    render() {
        return <AppContent
            {...this.state}
            handleSearch={e => this.handleSearch(e)}
            getRepos={this.getRepos('repos')}
            getStarred={this.getRepos('starred')}
        />
    }

}

export default App;