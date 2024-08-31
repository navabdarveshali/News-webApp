import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import NewsComonent from '../components/NewsComonent'

export default class News extends PureComponent {
    static defaultProbs = {
        category : 'general'
    }
    static propTypes ={
        category :PropTypes.string
    }
constructor(){
    super();
    this.state ={
        articles: [],
        loading: false,
        page:1
    }
    
}

async componentDidMount(){
    let url =`https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=1f975108d9b14d0395a36e735bb13631`
    // let url = `https://newsapi.org/v2/top-headlines?everything&category=${this.props.category}&apiKey=c21174c7f409431f90f9a61accbb0c63`;
    let data = await fetch(url);
    let parsedData =  await data.json()
    console.log(parsedData);
    
    this.setState({
        articles: parsedData.articles, // Assuming 'articles' is the correct key
        totalResults : parsedData.totalResults,
        loading: false
      });
    
}
handlePrevClick= async ()=>{
if (this.state.page + 1> Math.ceil(this.state.page/totalResults)) {
    
}
let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=1f975108d9b14d0395a36e735bb13631&page=${this.state.page - 1}`;
let data = await fetch(url);
let parsedData =  await data.json()
this.setState({
   page: this.state.page - 1,
   articles: parsedData.articles
})
}
handleNextClick= async ()=>{
 let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=1f975108d9b14d0395a36e735bb13631&page=${this.state.page + 1}`;
 let data = await fetch(url);
 let parsedData =  await data.json()
 this.setState({
    page: this.state.page + 1,
    articles: parsedData.articles
 })
 
}
  render() {
    return (
      <div className='container my-4'>
        <h1>monkey news app</h1>
        <div className='row'>
            {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsComonent title={element.title} description ={element.description} imageUrl ={element.urlToImage} url={element.url}/>
                    </div>
                    
                })}                               
            
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled ={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            
       
      </div>
    )
  }
}
