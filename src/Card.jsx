import profilePic from './assets/watch.jpg'

function Card(){
    return(
        <div className="card">
           <img className = "card-image"src={profilePic} alt="profile picture" width="200" ></img>
           <h2 className='card-title'>Joreson</h2>
           <p className='card-text'>I love playing online games.</p>
        </div>
        
    );
}
export default Card