import React from 'react';
import "./channelrow.css";
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';


function Channelrow({image,channel,verified,subs,noofvideos,description}) {
    return (
        <div className="channelrow">
         <Avatar 
         className="channelrow__avatar"
         alt={channel}
         src={image} />
         <div className="channelrow__text">
         <h4>{channel}  {verified && <CheckCircleOutlinedIcon />}</h4>
         <p>{subs} Subscribers • {noofvideos} videos</p>
         <p>{description}</p>
         </div>
        </div>
    )
}

export default Channelrow;
