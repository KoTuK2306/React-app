const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState ={
    isOpenNavbar: false,
    userId: null,
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
                ...action.data
            }
        default:
            return state;
    }
}

export const isOpenNavbarAC = (openStatus) =>({type: TOGGLE_NAVBAR, openStatus});
export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: [userId, email, login]})

export default socialReducer;