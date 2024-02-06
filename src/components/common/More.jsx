/* eslint-disable react/prop-types */
import { useRef } from "react"

export const More = (props) => {
    const url = useRef(props.url);

    return (
        <div className="row">
            <div className="col-12 right-align">
                <a href={url.current} target="_blank" rel="noreferrer">More...</a>
            </div>
        </div>

    )
}