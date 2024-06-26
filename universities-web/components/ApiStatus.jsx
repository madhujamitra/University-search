
import React from 'react';

const ApiStatus = ({ status, time }) => (
  <div className="mt-4 text-sm text-primary">
    <p>API Status: {status}</p>
    <p>Response Time: {time} ms</p>
  </div>
);

export default ApiStatus;
