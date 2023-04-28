import React, { Component } from 'react'

import axios from 'axios'

import NewsItem from './NewsItem'

export class News extends Component {
    articles={
        "status": "ok",
        "totalResults": 1323,
        "articles": [
        {
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Will Shanklin",
        "title": "YouTube Premium on iOS will soon work with SharePlay",
        "description": "Google announced a feature drop today for YouTube Premium users. Perhaps the most anticipated addition is iOS SharePlay support, which follows the release of Google’s equivalent feature in Meet video calls.The company says iOS SharePlay support will arrive “i…",
        "url": "https://www.engadget.com/youtube-premium-on-ios-will-soon-work-with-shareplay-143057377.html",
        "urlToImage": "https://s.yimg.com/uu/api/res/1.2/R8fsf_5F0vSjkjp8wriCSQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-10/a24cc980-341d-11ec-be6b-e6043821bdff.cf.jpg",
        "publishedAt": "2023-04-10T14:30:57Z",
        "content": "Google announced a feature drop today for YouTube Premium users. Perhaps the most anticipated addition is iOS SharePlay support, which follows the release of Googles equivalent feature in Meet video … [+1898 chars]"
        },
        
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "andrew.myrick@futurenet.com (Andrew Myrick)",
        "title": "Samsung Galaxy S23 vs. iPhone 14: Which compact flagship is better?",
        "description": "When deciding between the Galaxy S23 and iPhone 14, a lot of the same arguments can be made from last year. But Samsung made some great strides while Apple decided to play it safe.",
        "url": "https://www.androidcentral.com/phones/samsung-galaxy-s23-vs-iphone-14",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/oDskcYzUTFisAW7VsKZ6PQ-1200-80.jpg",
        "publishedAt": "2023-04-10T18:38:23Z",
        "content": "When it comes to finding the best smartphone, the two primary options in the U.S. come from either Samsung or Apple. The flagship experience has really dwindled down in recent years, with only OnePlu… [+7857 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "tips@androidcentral.com (Vishnu Sarangapurkar)",
        "title": "Foldable Galaxy tablet rumored to launch later this year alongside the Tab S9",
        "description": "Samsung has seen huge commercial success when it comes to its foldable smartphones. The outcome is making the tech giant step into a new segment with a folding mechanism.",
        "url": "https://www.androidcentral.com/tablets/galaxy-z-tab-reportedly-launching-later-this-year",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/hMyT3v5xYPpvZ7CJdhMV8b-1200-80.jpg",
        "publishedAt": "2023-04-10T17:54:15Z",
        "content": "<ul><li>Samsung could be launching a new foldable device later this year alongside the Z Fold/Flip 5.</li><li>It will be the first foldable tablet from Samsung.</li><li>The company has previously sho… [+2320 chars]"
        },
       
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Mitchel Broussard",
        "title": "Deals: Apple's New 2023 MacBook Pro Notebooks Discounted on Amazon, Starting at $1,849.99 ($149 Off)",
        "description": "Amazon is kicking off the week with a fresh discount on Apple's 14-inch MacBook Pro (10-Core M2 Pro, 512GB), on sale for $1,849.99, down from $1,999.00. You can get this notebook in both Space Gray and Silver on Amazon, with delivery dates estimated around Ap…",
        "url": "https://www.macrumors.com/2023/04/10/deals-apples-new-2023-macbook-pro/",
        "urlToImage": "https://images.macrumors.com/t/_KsVTJXVWpAN9CrUxwBKqe4qf6M=/2500x/article-new/2023/01/new-macbook-pro-pink.jpg",
        "publishedAt": "2023-04-10T14:37:15Z",
        "content": "Amazon is kicking off the week with a fresh discount on Apple's 14-inch MacBook Pro (10-Core M2 Pro, 512GB), on sale for $1,849.99, down from $1,999.00. You can get this notebook in both Space Gray a… [+1154 chars]"
        },
        
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "Zac Hall",
        "title": "In memory of the 27-inch iMac Pro with or without Mini-LED, no wait, Mini-LED display with 120Hz ProMotion",
        "description": "Oh, Apple 27″ Mini-LED ProMotion display, the world has lost you far too soon.\nYou started life as an oddly timed rumor last year following the long-overdue release of the Apple Studio Display. They said you would launch soon after the $1600 display with feat…",
        "url": "https://9to5mac.com/2023/04/10/apple-display-with-or-without-a-display/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2017/08/img_6355.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-04-10T17:15:36Z",
        "content": "Oh, Apple 27″ Mini-LED ProMotion display, the world has lost you far too soon.\r\nYou started life as an oddly timed rumor last year following the long-overdue release of the Apple Studio Display. They… [+3181 chars]"
        }
    ]
}
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
