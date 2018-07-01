import React from 'react'
import {observer,inject} from 'mobx-react'
 class Account extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div>这是主页 {this.props.userStore.name}</div>
        )
    }
}
export default inject(stores=>{
    const userStore= stores.rootStore.userStore
    return {
        userStore
    }
})(observer(Account))