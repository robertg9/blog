import React, { Component } from 'react';
export default class extends Component {

    constructor(props, articleInfo) {
        super(props);
        this.articleInfo = articleInfo;
    }

    getArticleInfo() {
        return this.articleInfo;
    }

}