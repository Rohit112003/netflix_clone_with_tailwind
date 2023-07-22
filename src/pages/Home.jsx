import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'


const Home = () => {
  return (
    <>
    <Main/>
    <Row rowid = "1" title = "UpComing" fetchUrl = {requests.requestUpcoming}/>
    <Row rowid = "2" title = "Popular" fetchUrl = {requests.requestPopular}/>
    <Row rowid = "3" title = "Trending" fetchUrl = {requests.requestTrending}/>
    <Row rowid = "4" title = "Top Rated" fetchUrl = {requests.requestTopRated}/>
    <Row rowid = "5" title = "Horror" fetchUrl = {requests.requestHorror}/>
    
    </>
  ) 
}

export default Home