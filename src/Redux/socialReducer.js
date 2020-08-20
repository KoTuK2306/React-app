const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';

let initialState ={
    isOpenNavbar: false
}

const socialReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_NAVBAR:
            return {...state,
                    isOpenNavbar: action.openStatus
                }
        default:
            return state;
    }
}

export const isOpenNavbarAC = (openStatus) =>({type: TOGGLE_NAVBAR, openStatus})

export default socialReducer;