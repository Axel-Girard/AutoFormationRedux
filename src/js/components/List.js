import React from "react"
import { connect } from "react-redux"
import { deleteArticle } from "../actions/index"

const mapStateToProps = state => {
    return { articles: state.articles }
}

const mapDispatchToProps = dispatch => {
    return { deleteArticle: article => dispatch(deleteArticle(article)) }
}

const ConnectedList = ({ articles, deleteArticle }) => (
    <ul>
        {articles.map(el => (
            <li key={el.id}><button onClick={ () => deleteArticle(el) }>x</button>{el.title}</li>
        ))}
    </ul>
)

const List = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedList)

export default List
