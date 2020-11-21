export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQAIWkKc-4gk8qvh8Hca-fggm2dTBwMTDCLnWXdxY-74ySdSWn…xWcd6_37zRG4FJwOkP1_Xan9AN4KPGz7API5LXxGwvdFc0HAy",
};

const reducer = (state, action) => {
console.log(action);

switch(action.type) {
    case "SET_USER":
        return {
            ...state,
            user: action.user,
        };

    case "SET_TOKEN":
        return {
            ...state,
            token: action.token
        };

    case 'SET_PLAYLISTS':
        return {
            ...state,
            playlists: action.playlists,
        };
    
    case "SET_DISCOVER_WEEKLY":
        return {
            ...state,
            discover_weekly: action.discover_weekly,
        };   
        
    default:    
        return state;
    }
}

export default reducer;