const STATE_INITIAL = {
  theme: "light",
  user: {
    name: "",
    email: "",
  },
};

const action = {
  type: "CHANGER_OPEN",
};

const reducer = (state = STATE_INITIAL, action) => {
  if (action.type === "CHANGER_OPEN") {
    return {
      ...state,
      theme: state.theme === "light" ? "dark" : "light",
    };
  }

  return state;
};

const myDevTolls =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = Redux.createStore(reducer, myDevTolls);
const button = document
  .getElementById("light-switch")
  .addEventListener("click", () => {
    console.log("click");
    store.dispatch({
      type: "CHANGER_OPEN",
    });
  });

store.subscribe(() => {
  const state = store.getState();
  const wraapp = document.getElementById("wrapper");
  wraapp.className = state.theme;
});
