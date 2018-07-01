import {Input,Button} from 'antd'
import React from 'react'
import {observer,inject} from 'mobx-react'
 class Login extends React.Component{
    constructor(){
        super();
       
    }
    change=(e)=>{
        this.props.userStore.setName(e.target.value)
    }
    login=()=>{
        this.props.history.push('account')
    }
    render(){
        return (
            <div style={{width:'300px',margin:'0px auto'}}>
                <Input value={this.props.userStore.name} onChange={this.change} />
                <Button onClick={this.login}>登录</Button>
            </div>
        )
    }
}

export default inject(stores=>{
    const userStore= stores.rootStore.userStore
    return {
        userStore
    }
})(observer(Login))