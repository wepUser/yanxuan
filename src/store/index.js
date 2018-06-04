import {createStore} from 'redux';

//初始store
const defaultStore = {
    currentGood: {}
};


//===================action
/*设置当前商品信息*/
const setCurrentGood = (good) => {
    return {
        type: 'SET_CURRENT_GOOD',
        good
    }
};

//reducer
const goodReducer = (currentGood={}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_GOOD':
            return action.good;
            break;
        default:
            return defaultStore.currentGood
    }
};

export  const store=createStore(goodReducer);




