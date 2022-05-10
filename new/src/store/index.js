import { createStore } from "vuex";

//firebase import store
import { auth } from "../firebase/config";
import { getStorage, ref, uploadBytes } from "firebase/storage";
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
    recipeName: null,
    recipeInstruction: null,
    recipeIngredients: null,
    imgPreview: null,
    imgRoute: null,
    upload: 0,
    dataUploaded: null,
    userRecipe: [],
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
    /* recipeRef(state, payload) {
      const isFound = state.recipe.some((e) => {
        if (e.id === payload.id) {
          return true;
        }
      });

      if (isFound === false) {
        state.recipe.push(payload);
      }

      console.log(payload);
      console.log("recipe in store", state.recipe);
    }, */

    //recipe parts
    imgprv(state, payload) {
      state.preview = payload;
      console.log(state.preview);
    },
    instruction(state, payload) {
      state.recipeInstruction = payload;
      console.log(state.recipeInstruction);
    },
    Name(state, payload) {
      state.recipeName = payload;
      console.log(state.recipeName);
    },
    ingredients(state, payload) {
      state.recipeIngredients = payload;
      console.log(state.recipeIngredients);
    },
    ready(state) {
      state.upload++;
      console.log(state.upload);
    },
    data(state, payload) {
      state.dataUploaded = payload;
      console.log(state.dataUploaded);
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
        /* 
        const db = getDatabase();

        set(ref(db, "user/" + auth.currentUser.uid), {
          user: auth.currentUser.email,
          recipe: [],
          uuid: auth.currentUser.uid,
        }); */
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

    async upload(context, data) {
      context.commit("data", data);

      const storage = getStorage();
      const storageRef = ref(storage, "Images");

      uploadBytes(storageRef, data).then((snapshot) => {
        console.log(snapshot);
      });
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
