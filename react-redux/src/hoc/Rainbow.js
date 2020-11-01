import React from 'react';

// Custom Higher Order Component
const Rainbow = (WrappedComponent) => {
  // Generating custom color class
  const colors = ['red', 'indigo', 'orange', 'green', 'pink', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * 5)];
  const className = randomColor + '-text';

  return (props) => {
    return (
      <div className={className}>
        {/* Re-passing props to wrapped component */}
        <WrappedComponent {...props} />    
      </div>
    )
  }
}

export default Rainbow;