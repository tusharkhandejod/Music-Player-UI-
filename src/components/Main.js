import React from 'react'
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';

const Main = () => {

    return (
        <div className="main">
            <div className="upperNav">
                <h1><p>Listen your favourite tunes</p></h1>
            </div>
            <div className="mainContent">
                <h4>RELEASED THIS WEEK<hr /></h4>
                <div className="row1">
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615127603912-9b0bba4b11cf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                                          alt="pic 1" height="150px" width="80px"
                                />
                            </div>
                            <div className="cardContent">
                                <h3>Ashiq Banaya</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615201427548-58316e349d8a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" />
                            </div>
                            <div className="cardContent">
                                <h3>Ishq hua</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615048735738-fc51e7422ef5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Phir kabhi</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615113789398-bcb6d7bd3e3c?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Ae dil hai mushkil</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1613733895930-4a51e90d50fe?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px"  alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Chennai Express</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615148536759-8fae933d8ff1?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Aminem</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1614883025183-be15ccce5a66?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Dhoom Machale</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615044701820-c92f68c7fee7?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Yeh Jawani Hai Deewani</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615152528064-9032e95c1c74?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Teri Galli</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615153060929-90f7111d7f74?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Kaho Na Pyar Hai</h3>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h4>FEATURED PLAYLISTS<hr /></h4>
                <div className="row2">
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615034305966-6404553ef71d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Sathiya Singham</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1611095562057-2e70d5bf9dee?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNDh8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Dil Kyun Ye Mera</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615085339695-d5aaf7941e50?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODN8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Kites</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615013886166-efa008a98ff6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Aao Sunao Pyar Ki Ek Kahani</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNjd8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Bada Pachhtaoge</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615050461998-b2e2c93d98f3?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjh8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Jab We Met</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615085321855-236845183570?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzd8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Tere Liye</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615058712849-d33b9e7824c5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDZ8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Om Namah Shivay</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615058668817-14d2919e197f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDV8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Gale Lag Ja na</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNDN8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Apna Sapna Money Money</h3>
                            </div>
                        </div>
                    </div>
                </div>
            
                <h4>BROWSE<hr /></h4>
                <div className="row3">
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1614939853994-ea87122141e7?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDB8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Pal Do Pal</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1614332193314-7198489844ac?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzh8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Munna Bhai M.B.B.S.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615125945921-7b4fbdeaf0bc?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjF8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Love You Baby</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615140797951-0ce29cf56be6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Agneepath</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615137288062-71fba3d836b2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Sheela Ki Jawani</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615122466672-48db2ec937cc?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Chikani Chameli</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615182787503-08365d1e7fae?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Dhoom 3</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615065784323-b2dd88ea7e88?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Sun Ye Machalti Raghini</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1612831659958-904f75bfa43f?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Pehla Pyar</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <div className="card">
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1615136068144-2a4e92eefdb5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="150px" width="80px" alt="pic 1" />
                            </div>
                            <div className="cardContent">
                                <h3>Dil Dooba</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                
                <div className="musicControlls">
                    <StopRoundedIcon className="musicControllers_icons"/>
                    <h3>Nothing's playing</h3>
                    <SkipPreviousRoundedIcon className="musicControllers_icons"/>
                    <PlayCircleOutlineRoundedIcon className="musicControllers_icons"/>
                    <SkipNextRoundedIcon className="musicControllers_icons"/>
                    <div>
                    <input type="range" className="musicControllers_range" name="points" min="0" max="10" value="0">
                    </input>
                    </div>
                    <FavoriteBorderIcon className="musicControllers_icons"/>
                    <RepeatRoundedIcon className="musicControllers_icons"/>
                    <VolumeUpRoundedIcon className="musicControllers_icons"/>
                </div>
            </div>
        </div>
    )
}

export default Main