import React, {useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import {musicsList} from "../../services/musicService";
import columns from "../../components/home/tableColumns";
import SearchBar from "../../components/home/searchBar";
import {Button, Stack} from "@mui/material";
import AddMusicModal from "../../components/home/addMusicModal";
import {useHistory} from "react-router-dom";


const HomePage = () => {

    const history = useHistory();
    const [addMusic, setAddMusic] = React.useState(false);
    const [musics, setMusics] = useState([]);
    const [filteredMusics, setFilteredMusics] = useState([]);
    const [pageSize, setPageSize] = React.useState(10);
    const [searchText, setSearchText] = React.useState('');

    useEffect(() => {
        if (musics.length === 0) {
            getMusics();
        }
    }, []);


    const handleClickOpen = () => {
        if (localStorage.getItem("token")) {
            setAddMusic(true);
        }else {
            history.push('/auth/login')
        }
    };

    const handleClose = () => {
        setAddMusic(false);
    };


    const getMusics = async () => {
        try {
            const {status, data} = await musicsList();
            if (status === 200) {
                setFilteredMusics(data);
                setMusics(data);
                console.warn(data)
            } else {
            }
        } catch (ex) {
            // toast.error('مشکلی پیش آمده', {position: 'top-right'});
        }
    }


    const escapeRegExp = (value) => {
        return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }

    const requestSearch = (searchValue) => {
        setSearchText(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = musics.filter((row) => {
            return Object.keys(row).some((field) => {
                return searchRegex.test(row[field].toString());
            });
        });
        if (!searchValue) {
            setFilteredMusics(musics);
        } else {
            setFilteredMusics(filteredRows);
        }
    };


    const logout = () => {

        localStorage.clear();
        history.replace('/app/home')

    }

    return (

        <Grid container spacing={2}>
            <Grid item md={8} style={{height: 800, margin: 'auto'}}>

                <Stack spacing={2} direction="row">
                    <Button variant="contained" style={{marginTop: 30}} onClick={handleClickOpen}>Add New Song</Button>
                    {
                        localStorage.getItem("token") ? <Button style={{marginTop: 30}} onClick={logout}>Logout</Button> : null
                    }
                </Stack>

                <DataGrid
                    components={{Toolbar: SearchBar}}
                    style={{marginTop: 30}}
                    rows={filteredMusics}
                    columns={columns}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20, 50]}
                    pagination
                    onRowClick={(item) => alert(item.id)}
                    componentsProps={{
                        toolbar: {
                            value: searchText,
                            onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                                requestSearch(event.target.value),
                            clearSearch: () => requestSearch(''),
                        },
                    }}
                    // rowsPerPageOptions={[5]}
                />
            </Grid>


            <AddMusicModal open={addMusic} handleClose={handleClose} getMusics={getMusics}/>

        </Grid>

    )
        ;
};

export default HomePage;
