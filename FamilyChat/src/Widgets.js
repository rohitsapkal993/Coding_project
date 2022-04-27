import React from 'react';
import './Widgets.css';
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className='widgets'>
           <div className='widgets__input'>
            <SearchIcon className='widgets__searchIcon' />
            <input placeholder='Search Twitter' type='text'/>
           </div>
           <div className='widgets__widgetContainer'>
               <h2>What's Happenning</ h2> 
               
               <TwitterTweetEmbed tweetId={'159203775'} />

               <TwitterTimelineEmbed
                sourceType='profile'
                screenName='Demo'
                options={{ height: 400}}
               />

               <TwitterShareButton 
                url={'https://twitter.com/home'} 
                options={{text: "#reactjs is awesome", via:'Demo'}}
               />

           </div>
        </div>
    )
}

export default Widgets
