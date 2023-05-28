/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import './Home.css'
import NavBar from './nav/NavBar'
import Banner from './banner/Banner'
import Row from './Row/Row'
import requests from '../axios/Requests'


function Home() {
    return (
        <div className='home'>
            <NavBar />
            <Banner />

            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title='Trending Now' fetchUrl={
                requests.fetchTrending
            } />
            <Row title='Top Rated' fetchUrl={
                requests.fetchTopRated
            } />
            <Row title='Action Movies' fetchUrl={
                requests.fetchActionMovies
            } />
            <Row title='Comedy Movies' fetchUrl={
                requests.fetchComedyMovies
            } />
            <Row title='Horror Movies' fetchUrl={
                requests.fetchHorrorMovies
            } />
            <Row title='Romance Movies' fetchUrl={
                requests.fetchRomanceMovies
            } />
            <Row title='Documentaries' fetchUrl={
                requests.fetchDocumentaries
            } />



        </div>
    )
}

export default Home
