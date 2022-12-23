import React from 'react';
import TableAction from './TableAction';
import TableHeader from "./TableHeader";

const TableRow = (props) => {
    return (
        <table className="table">
            <TableHeader />
            <tbody >            
            {props.studentList.map(sObj=> ( 
            <tr 
            id={sObj.id} 
            key={sObj.id}>
                <td>{sObj.id}</td>
                <td>{sObj.firstName}</td>
                <td>{sObj.lastName}</td>
                <td>{sObj.age}</td>
                <td>{sObj.birthDate}</td>
                <td>{sObj.country}</td>
                <td>{sObj.city}</td>
                <TableAction />             
            </tr>) )}              
        </tbody>
    </table>
    );
};

export default TableRow;