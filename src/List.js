import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData } from './api';

const Table = ({ headerRow, children }) => (
  <table style={{ borderCollapse: 'collapse', width: '100%' }}>
    <thead>{headerRow}</thead>
    <tbody>{children}</tbody>
  </table>
);

const TableHeaderRow = ({ children }) => (
  <tr style={{ backgroundColor: '#f5f5f5', textAlign: 'left' }}>{children}</tr>
);

const TableHeaderCell = ({ children, minWidth, maxWidth, width }) => (
  <th style={{ minWidth, maxWidth, width, border: '1px solid #ddd', padding: '8px' }}>{children}</th>
);

const TableRow = ({ children, onClick }) => (
  <tr
    style={{ borderBottom: '1px solid #ddd', cursor: 'pointer' }}
    onClick={onClick}
  >
    {children}
  </tr>
);

const TableCell = ({ children }) => (
  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{children}</td>
);

const List = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData('/Books');
        console.log(result.d.results);
        setData(result.d.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  const handleRowClick = (item) => {
    console.log('Row clicked:', item);
    navigate('/form', { state: { book: item } }); // Pass data to the Form component
  };

  return (
    <div>
      <h1>Book List</h1>
      <Table
        headerRow={
          <TableHeaderRow>
            <TableHeaderCell minWidth="200px">Title</TableHeaderCell>
            <TableHeaderCell minWidth="200px">Author</TableHeaderCell>
            <TableHeaderCell minWidth="200px">Genre</TableHeaderCell>
            <TableHeaderCell minWidth="200px">Price</TableHeaderCell>
          </TableHeaderRow>
        }
      >
        {data.map((item) => (
          <TableRow key={item.ID} onClick={() => handleRowClick(item)}>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.author}</TableCell>
            <TableCell>{item.genre}</TableCell>
            <TableCell>{item.price} EUR</TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};

export default List;
