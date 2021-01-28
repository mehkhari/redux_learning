const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAME = 'BUY_ICECREAME'

const CakeCount = {
    numOfCakes: 10
}
const IceCreameCount = {
    numOfIceCreame: 20
}
function BuyCakes() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}
function BuyIceCreame() {
    return {
        type: BUY_ICECREAME
    }
}
const cakeReducer = (state = CakeCount, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
const iceCreameReducer = (state = IceCreameCount, action) => {
    switch (action.type) {
        case BUY_ICECREAME: return {
            ...state,
            numOfIceCreame: state.numOfIceCreame - 1
        }
        default: return state
    }
}
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreame: iceCreameReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => { })
store.dispatch(BuyCakes())
store.dispatch(BuyCakes())
store.dispatch(BuyCakes())
store.dispatch(BuyIceCreame())
store.dispatch(BuyIceCreame())
unsubscribe();
