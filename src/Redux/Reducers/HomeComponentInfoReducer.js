import { INCREMENT_HOME_COMPONENT_COUNTER, DECREMENT_HOME_COMPONENT_COUNTER, DISABLE_SCROLL, ENABLE_SCROLL, IS_REDIRECTED } from "./../Constants/HomeComponentInfo";

var initialState = {
  scrollCounter: 3,
  isScrollable: false,
  isRedirected:false
};

var HomeComponentInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_HOME_COMPONENT_COUNTER:
      return { ...state, scrollCounter: ++state.scrollCounter };
    case DECREMENT_HOME_COMPONENT_COUNTER:
      return { ...state, scrollCounter: --state.scrollCounter };
    case DISABLE_SCROLL:
      return { ...state, isScrollable: false }
    case ENABLE_SCROLL:
      return { ...state, isScrollable: true }
    case IS_REDIRECTED:
      return { ...state, isRedirected:action.payload }
    default:
        return state;
  }
};

export default HomeComponentInfoReducer;
