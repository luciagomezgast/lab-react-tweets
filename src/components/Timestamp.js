import Tweet from "./Tweet";

function Timestamp(props){
    let {timestamp} = props
return(
  <>
   <span className="timestamp">{timestamp}</span>
  </>
   
  )
}


export default Timestamp;