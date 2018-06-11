import {createStore, combineReducers} from 'redux';
import { composeWithDevTools  } from 'redux-devtools-extension';

//初始store
const defaultStore = {
    currentGood: {},
    shopCarGood: []
};


//===================action
/*设置当前商品信息*/
export const setCurrentGood = (good) => {
    return {
        type: 'SET_CURRENT_GOOD',
        good
    }
};
/*添加购物车商品*/
export const addShopCarGood = (good) => {
    return {
        type: 'ADD_GOOD',
        good
    }
};
/*删除购物车商品*/
export const deleteShopCarGood = (good) => {
    return {
        type: 'DELETE_GOOD',
        good
    }
};

//reducer
const goodReducer = (currentGood, action) => {
    switch (action.type) {
        case 'SET_CURRENT_GOOD':
            return action.good;
        default:
            return defaultStore.currentGood
    }
};

const shopCarReducer = (shopCarGood=[], action) => {
    const copyCarGood = shopCarGood.slice(0);
    const actionCarGood = action.good;
    const existCarGood = copyCarGood.find(function (item) {
        return item.name === actionCarGood.name
    });

    switch (action.type) {
        case 'ADD_GOOD':
            if (existCarGood) {
                existCarGood.num++;
            } else {
                actionCarGood.num = 1;
                copyCarGood.push(actionCarGood)
            }
            return copyCarGood;
        case 'DELETE_GOOD':
            existCarGood.num--;
            return copyCarGood;
        default:
            return shopCarGood;
    }
};

const rootReducer = combineReducers({
    goodReducer,
    shopCarReducer
});

export const store = createStore(rootReducer,composeWithDevTools());

/*商品数量*/
export const goodSum=()=>{
    return store.getState().shopCarReducer.reduce((total,good)=>{
        return total+=good.num
    },0)
};


