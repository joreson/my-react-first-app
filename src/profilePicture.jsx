function ProfilePicture(){
    const imageUrl='./src/assets/watch.jpg'
    const handleClick= (e) =>e.target.style.display="none"

    return(
        <img onClick={handleClick} src={imageUrl} width="100"></img> 
    )
}
export default  ProfilePicture;
