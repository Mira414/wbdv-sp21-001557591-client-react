import React from "react"
import {useState} from "react"

const EditableItem =(
    {item={title:"defaultTitle", id:123},
        deleteItem,
        updateItem}
    )=>{

    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] =useState(item)

    return <>
        {!editing &&
        <>
            <a className="list-group-item wm-group-item">
                {item.title}
            </a>
            <i onClick={()=>setEditing(true)} className="fas fa-edit float-right"></i>
        </>}

        {editing &&
        <>
            <input value={cachedItem.title}
                   onChange={event => setCachedItem(
                       {...cachedItem, title: event.target.value}
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
    </>
}

export default EditableItem