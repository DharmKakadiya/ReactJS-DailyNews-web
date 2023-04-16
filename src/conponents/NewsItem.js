import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsItem extends Component {
  
  render() {
   let  {title,description,imageurl,newsurl,author,date} = this.props;
    return (
    <>
      <div className="card" style={{width: "18rem"}}>
        <img src={imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p class="card-text"><small class="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
          <Link to={newsurl} target='_blank' className="btn btn-primary btn-sm">Read Monore</Link>
        </div>
       </div>
      </>
    )
  }
}

export default NewsItem
