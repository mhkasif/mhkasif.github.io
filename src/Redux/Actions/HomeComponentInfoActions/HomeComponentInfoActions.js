import { INCREMENT_HOME_COMPONENT_COUNTER, DECREMENT_HOME_COMPONENT_COUNTER, DISABLE_SCROLL, ENABLE_SCROLL } from './../../Constants/HomeComponentInfo';

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