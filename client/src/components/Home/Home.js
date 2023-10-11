import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getTours } from '../../actions/tours';
import Features from '../Features/Features';
import Header from '../Header/Header';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);

  return (
    <>

        <Header/>
        <Features/>

    </>
  );
};

export default Home;