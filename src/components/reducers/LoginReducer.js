const initialState = {
    LOGIN:'',
  }
  
  const login = (state = initialState, action) => {
    switch (action.type) {
     
        case 'Login':
          return{...state, LOGIN : action.payload , loading:false};
      default:
        return state;
    }
  };
  
  
  // const initialState = { isLoading: true, message: "" };
  
  // const userdetail = (state = initialState, action) => {
  //   return Object.assign({}, state, action.payload);
  // };
  
   export default login;
  
  