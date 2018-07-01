import { observable,action ,decorate} from "mobx";

export default class UserStore{
    name='sas';
    setName(name){
        console.log(this)
        console.log(name)
        this.name=name
    }
}

decorate(UserStore, {
    name: observable,
    setName: action
})

