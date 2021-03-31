import React,{useState} from "react";
import {connect} from "react-redux";

const ImageWidget=({edit, setSelectedWidget, wt})=>{

    const [editURL, setEditURL] = useState(wt.url)
    const [editWidth, setEditWidth] = useState(wt.width)
    const [editHeight, setEditHeight] = useState(wt.height)

    return <div className="container-fluid">
        {
            !edit &&
                <img src={wt.url} height={wt.height} width={wt.width}></img>
        }
        {
            edit &&
                <div className="row">
                    <label for="image-src" className="label">Image URL</label>
                    <input
                        id="image-src"
                        value={editURL}
                        onChange={event => {
                            setEditURL(event.target.value)
                            setSelectedWidget({
                                ...wt,
                                url: event.target.value
                            })
                        }
                        }
                        placeholder="Image URL"
                        className="form-control"/>

                    <label for="image-width" className="label">Image width</label>
                    <input
                        id="image-width"
                        value={wt.width}
                        onChange={event => {
                            setEditWidth(event.target.value)
                            setSelectedWidget({
                                ...wt,
                                width: event.target.value
                            })
                        }
                        }
                        className="form-control"/>

                    <label for="image-height" className="label">Image height</label>
                    <input
                        id="image-height"
                        value={wt.height}
                        onChange={event => {
                            setEditHeight(event.target.value)
                            setSelectedWidget({
                                ...wt,
                                height: event.target.value
                            })
                        }
                        }
                        className="form-control"/>
                </div>
        }

    </div>

}

const smpt=(state)=>{
    return {}
}

const dmpt = (dispatch) =>{
    return {
        setSelectedWidget: widget=>{dispatch(
            {type:"SET_SELECTED_WIDGET",
                widget}
                )
        }
    }
}

export default connect(smpt, dmpt)(ImageWidget)