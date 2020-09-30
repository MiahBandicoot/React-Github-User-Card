import React from 'react'

class UserCard extends React.Component{


render(){
    console.log(this.props)

    return (
        <div className = 'card'>
            <h1>Users</h1>
            <div className = 'card'>
                <h2 className = 'name'>{this.props.data.login}</h2> 
                <img src = {this.props.data.avatar_url}/>

            </div>
        </div>
    )
}
}

export default UserCard