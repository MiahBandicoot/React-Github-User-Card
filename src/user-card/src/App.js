import React from 'react';
import UserCard from './user-card';
import Followers from './followers';
import axios from 'axios'

// import userCard from 'user-card';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            // error: null,
            // isLoaded: false,
            user:[],
            followers:[]
        };
    }

    componentDidMount(){
         axios.get('https://api.github.com/users/MiahBandicoot/followers')
         .then(res => {
           this.setState({
             followers:res.data
           })
      console.log(res)
      
    })
        fetch('https://api.github.com/users/MiahBandicoot')
       
        .then(res => res.json())
        .then(
            (response) => {
              console.log(response)
                this.setState({
                  user:response
                    // img: response.avatar_url,
                    // name: response.login,
                    // followers: response.followers_url,
                })
                console.log(this.state.user)
            },
            (error) => {
                this.setState({
                    // isLoaded: true,
                    error
                })
            } 
        )
    }

    

    render() {
        // const { error, isLoaded } = this.state;
        // if (error) {
        //   return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //   return <div>Loading...</div>;
        // } else {
          return (
            <div>
              <UserCard data = {this.state.user}/>
              <Followers fData = {this.state.followers}/>
            </div>
          );
        }
      }
    
    // render(){
    //      return (
    //     <div>
    //         <UserCard/>
    //     </div>
    // ) 
    // }
  

  // }
export default App
