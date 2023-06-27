

export function HandleFortuneCookie({content}) { 
    const {author,phrase} = content;

    return(    
       <div className="phrases_container">
        <p>{phrase}</p>
        <h5>{author}</h5>
       </div>
    )
}

