import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur tempore minus veritatis, nobis sint animi, reprehenderit quidem deserunt et quam iste sunt molestias, in deleniti ipsam nisi doloribus obcaecati nemo?</p>
    </div>
  )
}

export default Rainbow(About);