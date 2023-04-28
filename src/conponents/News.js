import React, { Component } from 'react'

import axios from 'axios'

import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        this.state = {
            articles:[],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=business&apiKey=67517fa9634d450ba1afe288c699fc1c&page=1`;
        console.log("hello");
        axios.get(url).then((response)=>{
           this.setState({articles:response.data.articles})
        }).catch((e)=>{
            console.log(e);
        })
        
        // this.setState({articles:parsedData.articles});
    }
    previouspage= async()=>{
        console.log("previous");
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=67517fa9634d450ba1afe288c699fc1c&${this.state.page-1}`;
        console.log("hello");
        axios.get(url).then((response)=>{
           this.setState({articles:response.data.articles})
           this.setState({
            page:this.state.page-1,})
        }).catch((e)=>{
            console.log(e);
        })
           
    }
    nextpage= async ()=>{
        console.log("next");
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=67517fa9634d450ba1afe288c699fc1c&${this.state.page+1}`;
        console.log("hello");
        axios.get(url).then((response)=>{
           this.setState({articles:response.data.articles})
           this.setState({
            page:this.state.page+1,
           
        })
        }).catch((e)=>{
            console.log(e);
        })
        
    }
    render() {
        console.log("hello");
        return (
            
        <div className='container my-3 ' >
            <h1 className="text-center">New Daily</h1>
            
            <div className="row">
                {this.state.articles.map((element)=>{
                    
                    return <div className="col-md-3" key={element.url}>
                                <NewsItem  title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,30):""}
                                 imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
                            </div>
                })}
        </div>
        <div className="container">
        <div class="d-flex">
        <div class="p-2"><button type="button" class="btn btn-dark" onClick={this.previouspage}>Previous</button></div>
        
        <div class="ml-auto p-2"> <button type="button" class="btn btn-dark" onClick={this.nextpage}>Next</button>
        </div>
        </div>
         
        </div>
        </div>
        )
    }
}
export default News
