import React from 'react';
import {useParams} from "react-router";
import ArticleUrlComponentMap from "../../articles/ArticleUrlComponentMap";

const Article = () => {
    const {articleId} = useParams();
    const articleConfig = ArticleUrlComponentMap.getArticleById(articleId);
    return articleConfig.getComponent();
};

export default Article;