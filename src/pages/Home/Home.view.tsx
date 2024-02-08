import { StreamCardsInfo } from "../../Utils/types"
import HlsPlayer from "../../components/HlsPlayer/HlsPlayer"
import StreamCards from "../../components/StreamCards/StreamCards"

//prop type for homepage
interface HomeViewProps{
    streamCardDetails:StreamCardsInfo[]
    showStream:boolean
    streamUrl:null|string
    handleClick:(url:string)=>void
    stopStream:()=>void
}

// ############## View file which will only take props from the container file and render things ######### //
const HomeView = ({streamCardDetails, showStream, streamUrl, handleClick, stopStream}:HomeViewProps) => {
  return (
    <>
    <h3>Sample POC for Live Stream App</h3>
        {
            !showStream ?
            <div style={{display:"flex", justifyContent:"space-around"}}>
        {
            streamCardDetails.map((item, index) => {
                return(
                    <div key={index}>
                        <StreamCards handleClick={handleClick} name={item.name} thumbnail={item.thumbnail} streamUrl={item.streamUrl} />
                    </div>
                )
            })
        }
    </div>
    :
    <>
        <HlsPlayer url={streamUrl} />
        <br/>
        <button
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "10px 20px",
        }}
        onClick={stopStream}
      >
        Stop Stream
      </button>
    </>
        }
    </>
  )
}

export default HomeView