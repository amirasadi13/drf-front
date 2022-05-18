import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Button} from "@mui/material";
import Slide from '@mui/material/Slide';
import {addMusic, musicsList} from "../../services/musicService";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const AddMusicModal = ({handleClose, open, getMusics}) => {


    const [song, setSong] = useState();
    const [singer, setSinger] = useState();


    const handleSubmit = async () => {

        if (song && singer) {

            const music = {
                "song": song,
                "singer": singer
            }

            try {
                const {status, data} = await addMusic(music);
                if (status === 200) {
                    console.warn(data)
                    getMusics();
                    alert('Music Added Successfully')
                    handleClose()
                } else {
                }
            } catch (ex) {
                // toast.error('مشکلی پیش آمده', {position: 'top-right'});
            }
        } else {
            alert('Enter song title and singer name')
        }

    }


    return (
        <div>

            <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}
                    keepMounted>
                <DialogTitle>Add New Music</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, error in ipsao totam ut.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Song Title"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setSong(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Singer Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setSinger(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit} variant="contained">Add</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
};

export default AddMusicModal;
