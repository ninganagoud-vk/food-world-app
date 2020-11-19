import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.css';
import Header from '../Header';
import Footer from '../footer';
import Main from '../main';
import {
    actionAddComment, actionSetlocalStorage,
    actionGetSearchedItems, actionReset
} from '../../store/actions/action'
import { comments } from '../localStorage'
import SpinLoader from '../loader';
import AlertMessage from '../alertMessage';

const Dashboard = ({ error, serachedItems,
    actionReset, actionGetSearchedItems, actionSetlocalStorage }) => {
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState([])
    const [isloading, setLoading] = useState(false)
    const [isEmptyQuery, setisEmptyQuery] = useState("")
    useEffect(() => {
        actionSetlocalStorage(comments)
        actionGetSearchedItems("pizza")

    }, [actionSetlocalStorage, actionGetSearchedItems])

    useEffect(() => {
        if (serachedItems && serachedItems.data && serachedItems.data.hits) {
            setRecipes(serachedItems.data.hits)
        }
        setLoading(false)
        setQuery("")
    }, [serachedItems, error])

    const getData = () => {
        if (query.trim() !== "") {
            setisEmptyQuery("")
            setLoading(true)
            actionGetSearchedItems(query)

            setTimeout(() => {
                actionReset()
            }, 2000)

        } else {
            setisEmptyQuery("Please Enter your Favorite item")
        }
    }

    const onChange = (e) => {
        setQuery(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        getData()
    }
    return (
        <div className="root-container">
            {(isEmptyQuery !== "") ? <AlertMessage alert={isEmptyQuery} /> : null}
            {isloading ?
                <SpinLoader text={"Fetching Your Favorite items."} /> :
                <>
                    <Header onSubmit={onSubmit} onChange={onChange} query={query} />
                    {!recipes.length ? <div className="main-loader">
                        <SpinLoader text={"Fetching items."} />
                    </div> : <Main recipes={recipes} />}
                    <Footer />
                </>
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        comments: state.comments,
        serachedItems: state.serachedItems,
        error: state.error
    };
};

const mapDispatchToProps = {
    actionAddComment,
    actionSetlocalStorage,
    actionGetSearchedItems,
    actionReset
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);