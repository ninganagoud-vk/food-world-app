import React from 'react';
import './style.css'

const Header = ({ onSubmit, onChange, query }) => {
    return (
        <header className="food-header">
            <h1>WelCome To Food World App</h1>
            <form className="search-form" onSubmit={onSubmit}>
                <input placeholder="Search Here... Pizza, Chicken, Donuts, Dosa Etc.. " value={query} autoComplete="off" onChange={onChange} />
                <input type="submit" value="search" />
            </form>
        </header>
    )
}

export default Header
