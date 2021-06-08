/*Imports*/
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/*Image Imports*/
import home from './images/home.svg';
import store from './images/store.svg';
import search from './images/search.svg';
import learn from './images/learn.svg';

/*CSS Imports*/
import './css/styles.scss';

/*REACT START*/


const Recoverys= () => {
const { user: currentUser } = useSelector((state) => state.auth);
    return (
       <div id="Page" className="App">
            
            
            
            <div id="Nav-bar" className="nav">
                <header className="App-header">
                        <a href="https://ivry.tk/"><b style={{float: "left", fontSize: "30px", color: "#fb5804"}}>⠀IVRY</b></a>
                </header>
            </div>   
            
            
            
            <div id="Content">         
                <body className="App-body">
                      <br/>
                      <br/>
                      <br/>
                      <h1 style={{color: "#fb5804", position: "fixed", left: "20px", top: "35px"}}>Store / Recoverys</h1>

                      <h3 style={{color: "#fff"}}>Welcome {currentUser.username}</h3>
                      
                      <div class="list-shop"><h4>Starter Recovery</h4> <p>Stock: Varies</p><p>Price: $5 - $30</p> <button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}} data-sellix-product="5f63fa2d9728c" type="submit">Purchase</button></div>
                      <div class="list-shop"><h4>Basic Recovery</h4> <p>Stock: Varies</p><p>Price: $5 - $30</p> <button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}} data-sellix-product="5f63fb45a9771" type="submit">Purchase</button></div>
                      <div class="list-shop"><h4>Pro Recovery</h4> <p>Stock: Varies</p><p>Price: $5 - $30</p> <button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}} data-sellix-product="5f63fc353553c" type="submit">Purchase</button></div>
                      <div class="list-shop"><h4>Crazy Recovery</h4> <p>Stock: Varies</p><p>Price: $5 - $30</p> <button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}} data-sellix-product="5f63fc365e6b5" type="submit">Purchase</button></div>
                      <div class="list-shop"><h4>Insane Recovery</h4> <p>Stock: Varies</p><p>Price: $5 - $30</p> <button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}} data-sellix-product="5f63fc3a22742" type="submit">Purchase</button></div>
                      <div class="list-shop"><h4>Premodded Account</h4> <p>Stock: Varies</p><p>Price: $5 - $30</p> <button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}} data-sellix-product="5f63fd02368cc" type="submit">Purchase</button></div>
                      
                      <div class="list-shop2"><h4>Starter Recovery</h4> <p>Stock: Varies</p><p>Price: $10 - $50</p> <button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}}>Unavailable</button></div> 
                      <div class="list-shop2"><h4>Basic Recovery</h4> <p>Stock: Varies</p><p>Price: $10 - $50</p> <button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}}>Unavailable</button></div> 
                      <div class="list-shop2"><h4>Pro Recovery</h4> <p>Stock: Varies</p><p>Price: $10 - $50</p> <button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}}>Unavailable</button></div> 
                      <div class="list-shop2"><h4>Crazy Recovery</h4> <p>Stock: Varies</p><p>Price: $10 - $50</p> <button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}}>Unavailable</button></div> 
                      <div class="list-shop2"><h4>Insane Recovery</h4> <p>Stock: Varies</p><p>Price: $10 - $50</p> <button style={{color: "white", background: "#000", border: "2px #fff solid", borderRadius: "5px"}}>Unavailable</button></div> 
                </body>
            </div>
            
            
            
            <div id="Footer">
                <footer className="App-footer">
                      <a href="/home"><img width="30px" height="40px" alt="home" src={home}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/learn"><img width="30px" height="40px" alt="search" src={learn}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/store"><img width="30px" height="40px" alt="store" src={store}/></a>⠀⠀⠀⠀⠀⠀
                      <a href="/search"><img width="30px" height="40px" alt="search" src={search}/></a>
                </footer>
            </div>
        </div>
        
    );
};

export default Recoverys;