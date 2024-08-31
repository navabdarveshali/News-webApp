import React, { PureComponent } from 'react'

export default class NewsComonent extends PureComponent {
  render() {
    let{title, description,imageUrl,url} = this.props;
    return (
      
        
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl ? imageUrl : "https://as1.ftcdn.net/v2/jpg/07/56/55/36/1000_F_756553632_OVMiiEomgzVZCumVMC7Mwt5X3Btipa4X.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} target='_blank' className="btn btn-dark">read more</a>
        </div>
        </div>
   
    )
  }
}
