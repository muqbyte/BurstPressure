import React from 'react';

const Table = () => {
  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={headerStyle}>Header 1</th>
            <th style={headerStyle}>Header 2</th>
            <th style={headerStyle}>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cellStyle}>Data 1</td>
            <td style={cellStyle}>Data 2</td>
            <td style={cellStyle}>Data 3</td>
          </tr>
          <tr>
            <td style={cellStyle}>Data 4</td>
            <td style={cellStyle}>Data 5</td>
            <td style={cellStyle}>Data 6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const headerStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: '#f2f2f2',
};

const cellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

export default Table;
