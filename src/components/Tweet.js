import ProfileImage from './ProfileImage';
import Timestamp from './Timestamp';
import User from './User'
import Actions from './Actions';
import Message from './Message'

function Tweet(props) {
  let {tweet} = props

  return (
    <div className="tweet">
       <ProfileImage image={tweet.user.image}/>

      <div className="body">
          <div className="top">
          <span className="user">
            <User user={tweet.user}/>
          </span>
          <Timestamp timestamp={tweet.timestamp}/>
        </div>
        <Message message={tweet.message}/>
  
      <div className="actions">
        <Actions/>
      </div>
      </div>

        <i className="fas fa-ellipsis-h"></i>
      </div>
  );
}

export default Tweet;
