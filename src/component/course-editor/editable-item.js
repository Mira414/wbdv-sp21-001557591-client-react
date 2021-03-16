import React from "react"
import {useState} from "react"
import {Link, useParams} from "react-router-dom";

const EditableItem =(
    {
        to="/to/somewhere",
        item={title:"defaultTitle"},
        deleteItem,
        updateItem}
    )=>{

    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] =useState(item)

    return <div className="nav-link">
        {!editing &&
        <>
            <Link
                to={to}
                className="">
                {item.title}
            </Link>
            <i onClick={()=>setEditing(true)}
               className="fas fa-edit wm-editor float-right"></i>
        </>}

        {editing &&
        <>
            <input value={cachedItem.title}
                   onChange={event => setCachedItem(
                       {...item, title: event.target.value}
                       )
                   }/>
            <i onClick={()=>{
                setEditing(false)
                updateItem(cachedItem)
                }
            }
               className="fas fa-check"></i>
            <i onClick={()=>deleteItem(item)}
               className="fas fa-times"></i>
        </>}
    </div>
}

export default EditableItem