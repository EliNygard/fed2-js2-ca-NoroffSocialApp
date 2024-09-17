import "./css/style.css";

import router from "./js/router/index.js";
import SocialAPI from "./js/api/index.js"

await router(window.location.pathname);

const api = new SocialAPI()


const user = {
    name: "fakeuser",
    email: "fake@stud.noroff.no",
    password: "fake1234"
}

await api.auth.register(user)

// test log in

// after creating social/post in class - test create, update, read, delete 

