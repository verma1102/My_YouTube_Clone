import React from 'react';
import './SearchPage.css';
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/vJEsALWnQIwPZ2oaVbFWPu1n4L0CDkHpAdGJ-KBPFsxM9hsMsvExFK1mnCGUrMzfC67XPVThmQ=s88-c-k-c0x00ffffff-no-rj"
                channel="Sony Music India"
                verified
                subs="59M"
                noOfVideos={2900}
                description="Sony Music India - Home To India's Biggest Music Hits. Subscribe to our channel to listen to chartbusters in the making, see premieres of blockbuster videos and get your daily dose of some great music right here."
            />
            <hr />
            <VideoRow
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ85AZbKIR4H5Z0D7mrVqY_LabXPEOdAc1IlQ&usqp=CAU"
                views="18M"
                subs="50M"
                description="Inviting you to the addictive first phase of falling for someone – where everything is dreamy and adventurous, as you “Doobey” in each other’s eyes. "
                timestamp="7 dayss ago"
                channel="Sony Music India"
                title="Doobey - Official Video | Gehraiyaan"
            />
            <VideoRow
                image="https://i.ytimg.com/vi/dU6yZ8xzhho/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEWs4R6bW75HdbUXOw-N3qWfZSrQ"
                views="1.7M"
                subs="50M"
                description="Start your year by being carefree and falling in love with the latest track of the New Year, Lapadva."
                timestamp="3 weeks ago"
                channel="Sony Music India"
                title="Lapadva (Official Video): Anurag Halder"
            />
            <VideoRow
                image="https://i.ytimg.com/vi/tueDQjJEiEM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCghXDZ_EXtO4HOMKvtEl32Xtbccg"
                views="3M"
                subs="50M"
                description="Focusing on what we want to live for in between our daily lives, “Udaan” tells the story of how some of your favorite musicians also started off as someone else – but then followed through on their dreams."
                timestamp="1 month agp"
                channel="Sony Music India"
                title="Udaan - Official Music Video"
            />
            <VideoRow
                image="https://i.ytimg.com/vi/UHZGfULQ4dE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbkTA83986zYlg66vKEQVgPvULjg"
                views="3.5M"
                subs="50M"
                description="Naina Da Joda from the film Teeja Punjab is a poetic love ballad in the heartwarming voice of Ammy Virk."
                timestamp="1 month ago"
                channel="Sony Music India"
                title="Naina Da Joda (Official Video)"
            />
            <VideoRow
                image="https://i.ytimg.com/vi/PLp-r1hoA7E/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDb7sgsEnlfpRZmJWeS2ClBGQmvDQ"
                views="9.7M"
                subs="50M"
                description="'Gallan Chaandi Diyan', a melodic celebration of music & dance in the soothing voice of Nimrat Khaira"
                timestamp="2 months ago"
                channel="Sony Music India"
                title="Nimrat Khaira: Gallan Chaandi Diyan (Official Video)"
            />
            <VideoRow
                image="https://i.ytimg.com/vi/B2QZqNN9OVk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTaz9NIkfxFZKvrVXLssN4kSs7fw"
                views="19M"
                subs="50M"
                description="What happens when two experts on converting losses to cash, find their hearts lost in each other? Come join the beginning of a love story between Armaan and Neha."
                timestamp="2 months ago"
                channel="Sony Music India"
                title="Tera Hua - Cash"
            />
            <VideoRow
                image="https://i.ytimg.com/vi/uucoiREuIy4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBU0GWzu9Fp-rfFVK3DhXK2URmkg"
                views="49M"
                subs="50M"
                description="Welcome this festive season with the dil se desi dance number #Saawariya by Kumar Sanu & Aastha Gill starring Arjun Bijlani. Put your dancing shoes on and let the celebrations begin!"
                timestamp="3 months ago"
                channel="Sony Music India"
                title="Kumar Sanu & Aastha Gill: Saawariya"
            />
            <VideoRow
                image="https://i.ytimg.com/vi/u0Y3EHuMktE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArP_8ph3yMT-ap3r8cSBIzru2_bQ"
                views="60M"
                subs="50M"
                description="There’s a new definition for “cool” in town – presenting the highly awaited “Ghana Kasoota” by Raftaar, co-sung by the talented Rashmeet Kaur."
                timestamp="2 months ago"
                channel="Sony Music India"
                title="Ghana Kasoota |Raftaar"
            />
            <VideoRow
                image="https://i.ytimg.com/vi/bqGtrvcR5ls/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDauXbY7l-nW2cTvjBU4o9DVONKBA"
                views="530M"
                subs="50M"
                description="Harrdy Sandhu  - The heart- throb of millions is back with yet another single Backbone. This romantic song has been penned down by Jaani."
                timestamp="5 years ago"
                channel="Sony Music India"
                title="Harrdy Sandhu - Backbone"
            />
            <VideoRow
                image="https://i.ytimg.com/vi/w4ClQO0FFQg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5-UliETVXuPimqvuy_vSsn-nDww"
                views="312M"
                subs="50M"
                description="The hottest dance track for the year is here! Kriti Sanon sizzles the floor with an unforgettable performance as Param Sundari."
                timestamp="6 months ago"
                channel="Sony Music India"
                title="Param Sundari -Official Video | Mimi | Kriti Sanon"
            />
        </div>
    );
}
export default SearchPage;
