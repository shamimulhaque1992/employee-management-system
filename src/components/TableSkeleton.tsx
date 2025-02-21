import React from 'react';
import './Skeleton.css';

const TableSkeleton: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="skeleton-text" style={{ width: '200px', height: '24px', marginBottom: '1.5rem' }}></div>
      <div className="mb-4 flex justify-between items-center">
        <div className="skeleton-text" style={{ width: '150px', height: '35px' }}></div>
        <div className="skeleton-text" style={{ width: '120px', height: '35px' }}></div>
      </div>
      <table className="skeleton-table">
        <thead>
          <tr>
            <th className="skeleton-header" style={{ width: '100px' }}></th>
            <th className="skeleton-header" style={{ width: '200px' }}></th>
            <th className="skeleton-header" style={{ width: '150px' }}></th>
            <th className="skeleton-header" style={{ width: '200px' }}></th>
            <th className="skeleton-header" style={{ width: '250px' }}></th>
            <th className="skeleton-header" style={{ width: '100px' }}></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index}>
              <td className="skeleton-cell" style={{ width: '100px' }}>
                <div className="skeleton-image" style={{ width: '40px', height: '40px', margin: '0 auto' }}></div>
              </td>
              <td className="skeleton-cell" style={{ width: '200px' }}></td>
              <td className="skeleton-cell" style={{ width: '150px' }}></td>
              <td className="skeleton-cell" style={{ width: '200px' }}></td>
              <td className="skeleton-cell" style={{ width: '250px' }}></td>
              <td className="skeleton-cell" style={{ width: '100px' }}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton; 