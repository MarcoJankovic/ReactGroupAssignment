import React, {useState} from "react";

const DataTable = () => {
     
    const studentList = useState(
    [
      {id:'1', firstName:'Alexis', lastName:'Capot', age:'50', birthdate:'1973/06/05', country:'Chile', city:'Santiago'},
      {id:'1', firstName:'Alexis', lastName:'Capot', age:'50', birthdate:'1973/06/05', country:'Chile', city:'Santiago'},
      {id:'2', firstName:'Jaime', lastName:'Jhonsson', age:'50', birthdate:'1973/06/05', country:'Chile', city:'Santiago'},
      {id:'1', firstName:'Hellio', lastName:'Svenson', age:'50', birthdate:'1973/06/05', country:'Chile', city:'Santiago'}
    ]);
}

export default DataTable;