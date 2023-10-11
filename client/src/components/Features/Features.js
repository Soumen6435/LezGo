import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Featured from './Featured/Featured';
import '../../styles.css';

const Features = () => {
  const tours = useSelector((state) => state.tours);

  return (


    <section id="featured" className="py-4">
        <div className="container">
        <div className="title-wrap">
            <span className="sm-title">know about some places in India before your tour</span>
            <h2 className="lg-title">Best Places</h2>
        </div>

        <div className="featured-row">
            {tours.map((tour) => (
                <Featured tour={tour} />

            ))}
        </div>
        </div>
    </section>
    )
};

export default Features;