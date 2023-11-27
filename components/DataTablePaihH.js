import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from '@mui/material';

const DataTablePaihH = ({ data, columns }) => {
  const [rowsToShow, setRowsToShow] = useState(10);

  const loadMoreRows = () => {
    setRowsToShow((prevRows) => prevRows + 10);
  };

  const renderRows = () => {
    return data.slice(0, rowsToShow).map((row, index) => (
      <TableRow key={index}>
        {columns.map((column) => (
          <TableCell 
          key={column.field} 
          sx={{
            borderBottom: 'none',
            color:
              column.field === 'name'
                ? '#98A1AC'
                : column.field === 'fat'
                ? '#FF5125'
                : 'white',
          }}
          align={column.align || 'center'}>
            {row[column.field]}
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  return (
    <Box p={2}>
        <TableContainer component={Paper} sx={{ background:'#1C1E21' }}>
        <Table sx={{ minWidth: '100%',background:'#1C1E21' }} aria-label="simple table">
            <TableHead style={{color:'#97A0AB',fontSize:'20px'}}>
            <TableRow>
                {columns.map((column) => (
                <TableCell 
                    key={column.field} align={column.align || 'center'}
                    sx={{
                        borderBottom: 'none',
                        color:'#98A1AC',
                        fontSize:'16px'
                      }}
                    >
                    {column.header}
                </TableCell>
                ))}
            </TableRow>
            </TableHead>
            <TableBody style={{background:'#1C1E21',}}>{renderRows()}</TableBody>
        </Table>
        <Box 
          display="flex" 
          style={{
          paddingBottom:'2rem',
          alignItems:'center',
          }} justifyContent="center">
           <div 
            onClick={()=>{
              loadMoreRows()
            }}
            style={
            {color:'#fff',
            width:'12rem',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
            height:'3.5rem',
            border: '1px solid #557335',
            background:'#2A2B30',}}>
              <div></div>
              查看更多
              <img style={{
                height:8,
                marginLeft:10,
              }} src={`${'/assets/home/xiala.png'}?&fit=crop&auto=format`}></img>
            </div>

        </Box>
        </TableContainer>
    </Box>

  );
};

export default DataTablePaihH;
