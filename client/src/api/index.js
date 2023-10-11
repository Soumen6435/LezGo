import axios from 'axios';


const API =axios.create({baseURL:'http://localhost:5000'});


export const fetchTours = () =>  API.get("/tours");
export const fetchToursBySearch =(searchQuery) =>  API.get(`/tours/search?searchQuery=${searchQuery.search || "none"}`);


export const createTour=(newTour)=>API.post('/tours',newTour);