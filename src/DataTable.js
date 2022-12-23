import React, {useState} from "react";
import TableRow from "./TableRow";

const DataTable = () => {
     
    const [studentList] = useState(
    [
      {id:'1', firstName:'Alexis', lastName:'Capot', age:'45', birthDate:'1953/06/05', country:'Chile', city:'Santiago'},
      {id:'2', firstName:'Marco', lastName:'Jankovic', age:'32', birthDate:'1972/06/05', country:'Argentina', city:'Bangladesh'},
      {id:'3', firstName:'Jaime', lastName:'Jhonsson', age:'66', birthDate:'1953/06/05', country:'Spain', city:'Tokyo'},
      {id:'4', firstName:'Hellio', lastName:'Svenson', age:'44', birthDate:'1943/06/05', country:'France', city:'Paris'}
    ]);

    return (
        <>
        <TableRow studentList={studentList}/>
        </>
    )
}

export default DataTable;
