import React  ,{useState} from 'react'
import Menu from './CardApi'


const Navbar = () =>{
    const [menudata , setMenu] = useState(Menu)

    const filterItem = (category) =>{
        const updateData = Menu.filter((curelem)=>{
    return curelem.category === category
        })
    
        setMenu(updateData);
    }
    
    const filterLunch = (catergory) =>{
    const updateData = Menu.filter((currelem) =>{
     return currelem.category === catergory
    
    })
    setMenu(updateData);
    }
    
     const filterDinner =(category) =>{
    const updateData = Menu.filter((currelem) =>{
        return currelem.category === category
    }) 
    
    setMenu(updateData);
    
     }

    return (
        <>
        

<nav className="navbar">
<div className='btn-group'>
    <button className="btn-group__item" onClick={() => filterItem("Breakfast")}>Breakfast</button>
    <button className="btn-group__item"  onClick={()=> filterLunch("lunch")} >Lunch</button>
    <button className="btn-group__item" onClick={() => filterDinner("Dinner")} >Dinner</button>
    <button className="btn-group__item" onClick={()=> setMenu(Menu)}>All</button>
</div>

</nav>



</>

    )
}
export default Navbar;