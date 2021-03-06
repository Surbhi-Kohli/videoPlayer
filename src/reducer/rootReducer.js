const initialState={
    data:[],
    mph:"0",
    rpm:"0"
}
function rootReducer(state=initialState,action)
{
    switch(action.type)
    {
            case 'add':
            return {...state,
               data:[...action.val]
            } ; 
            case 'changeMph':
            return {
                ...state,
                mph:action.val
            };
              case 'changeRpm':
              return {
                  ...state,
                 rpm:action.val
              }
        default:
        return state
    }
}
export default rootReducer;