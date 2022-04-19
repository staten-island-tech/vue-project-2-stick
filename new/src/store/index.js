import { createStore } from "vuex";
import { getDatabase, ref, onValue } from "firebase/database";

//firebase import store
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
const store = createStore({
  state: {
    /* points: 0 */
    user: null,
    authIsReady: false,
    blogs: [],
  },
  mutations: {
    /* updatePoints(state, payload){
            state.points =  state.points + payload
        } */
    setUser(state, payload) {
      state.user = payload;
      console.log("user state changed:", state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    blogs(state, payload) {
      const db = getDatabase();
      const blogREf = ref(db, "recipe/");
      state.blogs = onValue(blogREf, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
      });
    },
  },
  actions: {
    async signup(context, { email, password }) {
      console.log("signup action");

      //async code
      /*  setTimeout(() => {
                context.commit('setUser', { email, password })
            }, 2000) */
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete signup");
      }
    },
    async login(context, { email, password }) {
      console.log("login action");

      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete login");
      }
    },
    async logout(context) {
      console.log("logout action");

      await signOut(auth);
      context.commit("setUser", null);
    },
  },
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsub();
});
//export store
export default store;
