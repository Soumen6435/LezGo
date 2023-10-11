import * as api from '../api/index';

 export const getTours= () => async (dispatch) => {
   try {
     const { data } =  await api.fetchTours();
     
     dispatch({ type : 'FETCH_ALL' , payload : data });

   } catch (error) {
    console.log(error);
   }
}

export const createTour= (tour) => async (dispatch) => {
  try {
    const { data } =  await api.createTour(tour);
    
    dispatch({ type : 'CREATE' , payload : data });

  } catch (error) {
   console.log(error);
  }
}

export const getToursBySearch = (searchQuery) => async (dispatch) => {
  try {

    const { data:{data} } = await api.fetchToursBySearch(searchQuery);
    
    // dispatch({ type: 'FETCH_BY_SEARCH', payload: { data } });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};