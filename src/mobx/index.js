import UserStore from './stores/userStore'
export default class RootStore {
    constructor() {
      this.userStore =new UserStore()
    }
}