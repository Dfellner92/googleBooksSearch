import React from 'react'
// import './style.css'

function savedBookWrapper(props) {
        const {_id, authors, title, description, link, image } = props

        return (
                <div>{title}</div>
        //     <div key={_id} className="book-wrapper">
        //         <div>
        //             <h1>{title} Written By : {authors.join(", ")}</h1>
        //             <h3>Synopsis : {description}</h3>
        //         </div>
        //         <div>

        //             <h2><img alt={title + " image"} src={image}></img></h2>
        //             <h2><a className="link" href={link} rel="noopener noreferrer" target="_blank">Link to Book</a></h2>
            
        //         </div>
        //     </div>

         )

    }

export default savedBookWrapper;