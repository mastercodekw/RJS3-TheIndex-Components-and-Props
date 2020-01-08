import React from "react";
import authors from "./data";
import AuthorCard from "./AuthorCard";

function AuthorList() {
  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">
        {authors.map(author => (
          <AuthorCard author={author} key={author.first_name} />
        ))}
      </div>
    </div>
  );
}

export default AuthorList;
