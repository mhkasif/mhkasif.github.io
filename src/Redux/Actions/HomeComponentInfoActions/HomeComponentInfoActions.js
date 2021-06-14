import { INCREMENT_HOME_COMPONENT_COUNTER, DECREMENT_HOME_COMPONENT_COUNTER, DISABLE_SCROLL, ENABLE_SCROLL, IS_REDIRECTED, SET_HOME_COMPONENT_COUNTER } from './../../Constants/HomeComponentInfo';

export var incrementCounter = () => ({
    type: INCREMENT_HOME_COMPONENT_COUNTER
})

export var decrementCounter = () => ({
    type: DECREMENT_HOME_COMPONENT_COUNTER
})

export var disableScroll = () => ({
    type: DISABLE_SCROLL
})

export var enableScroll = () => ({
    type: ENABLE_SCROLL
})
export const redirected=(val)=>({
    type:IS_REDIRECTED,
    payload:val
})
export const setScrollCounter=(val)=>({
    type:SET_HOME_COMPONENT_COUNTER,
    payload:val
})