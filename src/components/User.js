import './Tweet'

function User(props){
    const {user} = props
    return(
        <>
        
            <span className="name">{user.name}</span>
            <span className="handle">{"@"+user.handle}</span>
          
        </>
    )
}

export default User;