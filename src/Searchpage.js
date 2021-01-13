import React from 'react';
import "./searchpage.css";
import TuneIcon from '@material-ui/icons/Tune';
import Channelrow from "./Channelrow";
import Videorow from "./Videorow";

function Searchpage() {
    return (
        <div className="searchpage">
        <div className="serachpage__filter">
        <TuneIcon /> 
        <h2>Filter</h2>
        </div>
        <hr />
        <Channelrow 
           image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/MarkZuckerberg-crop.jpg/220px-MarkZuckerberg-crop.jpg"
            channel="facebook ceo"
            verified
            subs="6.3B"
            noofvideos={382}
            description="you can find a good quality videos which appear in 4k and subscribe" 
        />
        <hr />
        <Videorow 
            views="1.3M"
            subs="3.2K"
            description="you can find a good quality videos"
            time="24 hours ago"
            channel="wellcome"
            title="how to build an app from scratch"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRrDhhItXc1X9mO0G1jU49oVb2msunJhkdw&usqp=CAU"
        />
        <Videorow 
            views="1.3M"
            subs="3.2K"
            description="you can find a good quality videos"
            time="24 hours ago"
            channel="wellcome"
            title="how to build an app from scratch"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRrDhhItXc1X9mO0G1jU49oVb2msunJhkdw&usqp=CAU"
        />
        <Videorow 
            views="1.3M"
            subs="3.2K"
            description="you can find a good quality videos"
            time="24 hours ago"
            channel="wellcome"
            title="how to build an app from scratch"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRrDhhItXc1X9mO0G1jU49oVb2msunJhkdw&usqp=CAU"
        />
        <Videorow 
            views="1.3M"
            subs="3.2K"
            description="you can find a good quality videos"
            time="24 hours ago"
            channel="wellcome"
            title="how to build an app from scratch"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRrDhhItXc1X9mO0G1jU49oVb2msunJhkdw&usqp=CAU"
        />
        <Videorow 
            views="1.3M"
            subs="3.2K"
            description="you can find a good quality videos"
            time="24 hours ago"
            channel="wellcome"
            title="how to build an app from scratch"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRrDhhItXc1X9mO0G1jU49oVb2msunJhkdw&usqp=CAU"
        />
        </div>
    )
}

export default Searchpage;
