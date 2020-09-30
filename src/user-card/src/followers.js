import React from 'react'

const Followers = props => {
 

console.log(props.fData)
    return(
        <div >
            <div>
              <h2>My Followers</h2> 
            </div>
            <div >
            {props.fData.map(follow =>{
                return(
                <h2 className = 'card'>{follow.login}</h2>
                )
            })}
            </div>
        </div>
    )

    
}
export default Followers