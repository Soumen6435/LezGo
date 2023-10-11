import React, { useState, useEffect } from 'react';
import '../../styles.css';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

      // Simulate loading data (you can replace this with your actual data fetching logic)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 700);
    }, []);

    return (
        <div>
          {isLoading ? (
            <div id="loader"></div>
          ) : (
            // Your component content when data is loaded
            <div>
              {/* Your data display */}
            </div>
          )}
        </div>
      );
}
    
    
    
    
    
    

export default Preloader;