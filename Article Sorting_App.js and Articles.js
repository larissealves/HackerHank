import "h8k-components";
import Articles from "./components/Articles";
import { useState } from 'react';
import "./App.css";

function App({ articles }) {

  const sortByVotes = (article) => {
    return [...article].sort((a, b) => 
      b.upvotes - a.upvotes)
  } 

  const [articleList, setArticleList] = useState(
    () => sortByVotes(articles)
  );

  const handleMostUpvoted = () => {
    // Logic for most upvoted articles
    setArticleList(sortByVotes(articles));
    //console.log("ordenada: ==> ", orderedByMostVoted)
  };

  const handleMostRecent = () => {
    // Logic for most recent articles
    const orderedByDate = [...articles].sort((a, b) => 
      new Date(b.date) - new Date(a.date))
    setArticleList(orderedByDate);
    //console.log("Ordenado por data ==> ", orderedByDate)
    return orderedByDate;
  };

  return (
    <>
      <h8k-navbar header="Sorting Articles"></h8k-navbar>
      <div className="App">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={handleMostUpvoted}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>
        <Articles articles={articleList} />
      </div>
    </>
  );
}

export default App;

============================================================================

  import React from "react";

function Articles({ articles = [] }) {
  const listArticles = articles;

  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {listArticles.map((item, index) => (
            <tr data-testid="article" key={index} >
              <td data-testid="article-title">{item.title}</td>
              <td data-testid="article-upvotes">{item.upvotes}</td>
              <td data-testid="article-date">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;

