import { createStore } from "vuex";

//firebase import store
import { auth } from "../firebase/config";
import { getDatabase, set, ref } from "firebase/database";
import {} from "firebase/auth";
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
    imgPreview: null,
    thisUserRecipe: [],
    recipe: [],
    viewRecipe: [],
    editRecipe: [],
    newData: {},
  },
  mutations: {
    /* updatePoints(state, payload){
            state.points =  state.points + payload
        } */
    setUser(state, payload) {
      state.user = payload;

      const db = getDatabase();

      set(ref(db, "user/" + state.user.uid), {
        email: state.user.email,
        uid: state.user.uid,
        posts: [],
      });
      console.log("user state changed:", state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    clear(state) {
      state.recipe = [];
      state.thisUserRecipe = [];
    },
    recipeRef(state, payload) {
      let isFound = state.recipe.some((e) => {
        if (
          e.id === payload.id /* &&
          e.instructionsRecipe === payload.instructionsRecipe &&
          e.img === payload.img &&
          e.ingredientsRecipe === payload.ingredientsRecipe &&
          e.descsRecipe === payload.descsRecipe */
        ) {
          return true;
        }
      });

      if (isFound === false) {
        state.recipe.push(payload);
        /* if (isFound.id === payload.id) {
          let index = state.recipe.indexOf(isFound);
          state.recipe.splice(index, 1, payload);
          console.log("yes");
        }
        if (isFound.id !== payload.id) {
          console.log("no");
          
        } */
      }

      console.log(payload);
      console.log("recipe in store", state.recipe);
    },

    //recipe parts
    imgprv(state, payload) {
      state.imgPreview = payload;
      console.log(state.imgPreview);
    },
    view(state, payload) {
      state.viewRecipe = payload;
      console.log(state.viewRecipe);
    },
    edit(state, payload) {
      state.editRecipe = payload;
      console.log(state.editRecipe);
    },
    myOwn(state, payload) {
      const MyRecipe = state.thisUserRecipe.some((e) => {
        if (e.id === payload.id) {
          return true;
        }
      });
      if (MyRecipe === false) {
        state.thisUserRecipe.push(payload);
      }

      console.log(state.thisUserRecipe);
      console.log("myrecipe");
    },
    titleCha(state, payload) {
      state.editRecipe.title = payload;
      console.log(state.editRecipe);
    },
    descCha(state, payload) {
      state.editRecipe.descsRecipe = payload;
    },
    instrucCha(state, payload) {
      state.editRecipe.instructionsRecipe = payload;
    },
    ingredCha(state, payload) {
      state.editRecipe.ingredientsRecipe = payload;
    },
    imgCha(state, payload) {
      state.editRecipe.img = payload;
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

    async getRecipe(context, data) {
      console.log("got recipe");

      context.commit("recipeRef", data);
    },
    async userRecipe(context, data) {
      console.log(data);
      if (data.author === this.state.user.email) {
        console.log(data);
        context.commit("myOwn", data);
      }

      console.log("got this users recipe");
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
