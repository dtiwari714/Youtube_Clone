const  likedVideoReducer =(state={data:null},action)=>{
    switch (action.type){
        case 'POST_LIKEDVIDEO':
            return { ...state, data: action?.data };
        default:
            return state;
    }
}
export default likedVideoReducer;