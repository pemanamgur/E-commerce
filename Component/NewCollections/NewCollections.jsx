import React    from "react";
import  './NewCollections.css';
import new_collections from '../Assets/newCollection';
import Item from "../Items/Item";
const NewCollections = ()=>{
    return (
        <div className='newcollections'>
          <h1>New Collections</h1>
            <hr/>
            <div className='collections'>
                {
                    new_collections.map((item,i)=>{
                        return(
                            <Item item={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price ={item.old_price} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default NewCollections;