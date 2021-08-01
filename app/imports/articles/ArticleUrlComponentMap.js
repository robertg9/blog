import React from 'react';
import Article, {TYPE_REACT} from "./Article";
import {EasyRedux} from "./react/EasyRedux";

export default class {

    static getMap() {
        return {
            'easy-redux': new Article(<EasyRedux/>, TYPE_REACT,'Easy way to implement redux in react app', new Date('2020-08-30 1:50:00')),
        };
    }

    /**
     * @param {string} id
     * @returns {Article}
     */
    static getArticleById(id) {
        return this.getMap()[id];
    }

}