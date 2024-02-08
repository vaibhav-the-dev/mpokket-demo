import ReactPlayer from "react-player";


//hls player component which handle hls stream url
const HlsPlayer = ({ url }: { url: string | null }) => {
  return(
    url && <ReactPlayer playing={true} muted={true} controls url={url} />
  );
};

export default HlsPlayer;
