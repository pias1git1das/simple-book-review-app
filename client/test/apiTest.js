import React, { useState } from "react"; 
import  axios  from 'axios';
import { Link } from 'react-router-dom';


function addBookTest(title)
{
    const initialState = { title: '', content: '', tag: '' }
    const [book, setBook] = useState(initialState) 

    book.title=title;
    book.content='testContent';
    book.tag='Horror';

    try {
        const response = await post('/api/books', book);   
      } catch(error) {
        console.log('error', error);
      }
}
function bookListTest()
{
    try {
        var needed=30;
        for(var a=1;a<needed;a++)
            addBookTest('Book'+a);

        const response = await axios.get("/api/searchbook/Book1");
        var count = Object.keys(response).length;
        
        console.log("needed:"+needed);
        console.log("got:"+count);
        if(count!=needed)
            console.log("test failed");

    } catch(error) {
        console.log('error', error);
    }
}
function searchBookTest() 
{
    try {
        var needed=5;
        for(var a=1;a<needed;a++)
            addBookTest("Book1");

        const response = await axios.get("/api/searchbook/Book1");
        var count = Object.keys(response).length;
        
        console.log("needed:"+needed);
        console.log("got:"+count);
        if(count!=needed)
            console.log("test failed");

    } catch(error) {
        console.log('error', error);
    }
}

function addReviewTest()
{
    const initialState = { review: '', bookId: props.match.params._id, name:' '}
    const [reviewObject, setReview] = useState(initialState) 
  
    reviewObject.name='test'; /// get the name from global context
    try
    {
        reviewObject.review='testreview';
        reviewObject.bookId='1';
        reviewObject.name='test';
        await post('/api/books/addReview', reviewObject); 
    } 
    catch(error) {
        console.log('error', error);
    }
    
}
function reviewTest() 
{
    try {
        var needed=5;
        for(var a=1;a<needed;a++)
            addBookTest();

        const response = await axios.get("/api/users/reviews");
        var count = Object.keys(response).length;
        
        console.log("needed:"+needed);
        console.log("got:"+count);
        if(count!=needed)
            console.log("test failed");

    } catch(error) {
        console.log('error', error);
    }
}