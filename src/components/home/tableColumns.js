import Moment from "react-moment";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";


const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'song', headerName: 'song', width: 200},
    {field: 'singer', headerName: 'singer', width: 200},
    {
        field: 'last_modify_date',
        headerName: 'last_modify_date',
        width: 220,
        renderCell: params =>
            <Moment date={params.value} format={'MMM Do YYYY  HH:mm'}/>
    },
    {
        field: 'created',
        headerName: 'created',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 220,
        renderCell: params =>
            <Moment date={params.value} format={'MMM Do YYYY  HH:mm'}/>
    }, {
        field: 'delete',
        headerName: '',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell: (params) =>
            <DeleteIcon style={{color: 'darkred'}}/>,
    }, {
        field: 'edit',
        headerName: '',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
        renderCell: (params) =>
            <EditIcon style={{color: 'darkgoldenrod'}}/>,
    },

];

export default columns;
