// Stream card component props
interface StreamCardsProps {
  name: string;
  thumbnail: string;
  streamUrl: string;
  handleClick: (url: string) => void;
}
// Stream card component
const StreamCards = ({
  name,
  thumbnail,
  streamUrl,
  handleClick,
}: StreamCardsProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "25vw",
        margin: "0 1vh",
        padding: "2vh",
        background: "white",
        borderRadius: "10px",
      }}
    >
      <img style={{ height: "90%", width: "100%" }} src={thumbnail}></img>
      <br />
      <h3 style={{ color: "black" }}>{name}</h3>
      <button
        style={{
          background: "blue",
          color: "white",
          border: "none",
          padding: "10px 20px",
        }}
        onClick={() => handleClick(streamUrl)}
      >
        Watch Live
      </button>
    </div>
  );
};

export default StreamCards;
