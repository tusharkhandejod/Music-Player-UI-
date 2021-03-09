import React from 'react'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import HeadsetIcon from '@material-ui/icons/Headset';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import './Nav.css';

const Nav = () => {
    return (
        <div className="navBar">
            <div className="logo">
                <br></br>
                <br></br>
                   <AccountCircleOutlinedIcon className="svg_icons"/>
            </div>
            <ul>
                <li><h4>Tushar Khandejod</h4></li>
                <br></br>
               <br></br>
                <li><HeadsetIcon className="svgnavbar_icons"/>Discover</li>
                <br></br>
                <li><SearchIcon className="svgnavbar_icons"/>Search</li>
                <br></br>
                <li><FavoriteBorderIcon className="svgnavbar_icons"/>Favourites</li>
                <br></br>
                <li><PlayCircleOutlineRoundedIcon className="svgnavbar_icons"/>Playlists</li>
                <br></br>
                <li><MenuRoundedIcon className="svgnavbar_icons"/>Charts</li>
            </ul>
        </div>
    )
}

export default Nav