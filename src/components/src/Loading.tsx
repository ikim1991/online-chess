import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return(
    <div className="loader">
      <Loader
          type="Grid"
          color="#f8f9fa"
          height={75}
          width={75}
      />
      <div className="loader-text">Loading... May Take a Few Seconds...</div>
    </div>
  )
}

export default Loading;