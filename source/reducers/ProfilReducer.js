const initialState = { info:[] }


function toggleProfil(state=initialState,action){
   let nextState;

   switch(action.type){
 
     case 'Log_IN':{
       
        nextState={
           ...state
        }
        return nextState
     }
     case 'Log_OUT':{

        return nextState
     }

     default:
         return state;
   }


}