const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState ={
    isOpenNavbar: false,
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const socialReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_NAVBAR:
            return {...state,
                    isOpenNavbar: action.openStatus
                }
        case SET_USER_DATA:
            return{
                ...state, 
                id: action.id,
                login: action.login,
                email: action.email,
                isAuth: true
            }
        default:
            return state;
    }
}

export const isOpenNavbarAC = (openStatus) =>({type: TOGGLE_NAVBAR, openStatus});
export const setUserData = (email, id, login) => ({type: SET_USER_DATA, email, id, login})

export default socialReducer;