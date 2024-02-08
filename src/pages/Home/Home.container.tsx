import HomeView from './Home.view'
import DummyImg from "../../assets/indian-cricket-team-in-rooftop-y203qnw2wdbubsxj.jpg"
import { StreamCardsInfo } from '../../Utils/types'
import { useState } from 'react'

// ########### Contianer file which will handle all the logical and functional things ############ //
const HomePage = () => {
    //Demo Data
    const StreamDetails:StreamCardsInfo[] = [
        {
            name:"Watch Live T20 Cricket: IND vs AUS",
            thumbnail:DummyImg,
            streamUrl:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8"
        },
        {
            name:"Watch Live T20 Cricket: IND vs AUS",
            thumbnail:DummyImg,
            streamUrl:"https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"
        },
        {
            name:"Watch Live T20 Cricket: IND vs AUS",
            thumbnail:DummyImg,
            streamUrl:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8"
        }
    ]

    //Boolean state for handling screens
    const [showStream, setShowStream] = useState<boolean>(false)

    // state for handling the url.
    const [streamUrl, setStreamUrl] = useState<null|string>(null)

    //handle function for the watch live button click
    const handleClick = (url:string) => {
        setShowStream(true)
        setStreamUrl(url)
    }

    //stop stream function
    const stopStream = () => {
        setShowStream(false)
        setStreamUrl(null)
    }
  return (
    <HomeView stopStream={stopStream} handleClick={handleClick} streamUrl={streamUrl} showStream={showStream} streamCardDetails={StreamDetails} />
  )
}

export default HomePage