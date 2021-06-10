import { createStore } from 'redux';

const defaultState = {
    mainMenu: {visible: true},
    rightMenu: {visible: true},
};

const mainReducer = (state = defaultState, payload) => {
    let newState = {...state};
    for (const property in payload.data) {
        if (!defaultState.hasOwnProperty(property)) {
            throw `Reducer ${property} is not defined in defaultState object.`;
        }

        for (const propertyReducer in payload.data[property]) {
            if (!defaultState[property].hasOwnProperty(propertyReducer)) {
                throw `${property} reducer property "${propertyReducer}" is not defined in defaultState object.`;
            }
        }

        newState[property] = {...newState[property], ...payload.data[property]};
    }

    console.group(payload.type);
    console.log('CURRENT STATE');
    console.log(state);
    console.log('NEW STATE');
    console.log(newState);
    console.groupEnd();

    return newState;
};

export const blogStore = createStore(mainReducer);

export const updateStore = (data, type = 'UPDATE_STORE') => {
    blogStore.dispatch({
        data: data,
        type: type,
    });
};