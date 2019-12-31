import { ADD_ARTICLE, DATA_LOADED, DELETE_ARTICLE, API_ERRORED } from "../constants/action-types"

const initialState = {
    articles: [],
    remoteArticles: []
}

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE){
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        })
    }

    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        })
    }

    if (action.type === DELETE_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.filter(article => article.id !== action.payload.id)
        })
    }

    if (action.type === API_ERRORED) {
        console.error(action.payload)
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat({id: "error", title: "API Error"})
        })
    }

    return state;
}

export default rootReducer;
