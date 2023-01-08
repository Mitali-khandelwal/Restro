import React from 'react'


const Card = ({menudata}) =>{


return (
    <>
    <section className='main-card--cointainer'>
        {menudata.map((currelem)=>{
const {id , name , category, image , description } = currelem
return (
    <>
    <div className="card-container" key={currelem.id}>
        <div className="card">
            <div className="card-body">
                <span className="car-number card-circle subtle">{id}</span>
                <span className="card-author subtle">{name}</span>
                <h2 className='card-title'>{name}</h2>
                <span className="card-description subtle">{description}</span>
                <div className="card-read">Read</div>
                <img src={image} alt="" />
                <div className='card-price'>price</div>
                <span className="card-tag subtle">Order Now</span>
            </div>
        </div>
    </div>
    
    
    </>
)
        })}
    </section>
    </>
)
}
export default Card;