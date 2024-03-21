import { finishLoading, startLoading } from "../modules/loading";

export default function createRequestThunk (type, request) {
   const SUCCESS = `${type}_SUCCESS`;
   const FAILURE = `${type}_FAILURE`;

   return function(params) {
      return async function(dispatch) {
         dispatch({
            type
         });

         dispatch(startLoading(type));

         try {
            const response = await request(params);
            ///만약 request가 getPost함수라면 getPost(params)를 호춣함 이는
            ///axios요청하는 함수임
            dispatch({
               type: SUCCESS,
               payload: response.data
            });
            dispatch(finishLoading(type))
         } catch(e) {
            dispatch({
               type: FAILURE,
               payload: e,
               error: true
            })
            dispatch(startLoading(type));
            throw e;
         }
      }
   }
}

///ex createRequestThunk('GET_USERS', api.getUsers);