import axios from "axios";

export class UserService{
    static serverUrl = `https://jsonplaceholder.typicode.com/users`;

    static getAllUsers(){
        return axios.get(this.serverUrl);
    }
}