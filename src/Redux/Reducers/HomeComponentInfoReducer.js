import { INCREMENT_HOME_COMPONENT_COUNTER, DECREMENT_HOME_COMPONENT_COUNTER, DISABLE_SCROLL, ENABLE_SCROLL } from "./../Constants/HomeComponentInfo";

var initialState = {
  scrollCounter: 4,
  isScrollable: false
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
    default: 
        return state;
  }
};

export default HomeComponentInfoReducer;
