import "./Footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';


function Footer() {

    return (
        <div className="footer">
            <div className="footer__left">
                <img 
                className="footer__albumLogo"
                src="https://i1.sndcdn.com/artworks-CBSCSRbuBE3AcVJl-zvFhfA-t500x500.jpg" 
                alt="" />
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}> 
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}


export default Footer;