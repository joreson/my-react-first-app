
import PropTypes from 'prop-types'

function Student ({name="Dan"}){
    console.log({props});
    return(
        <div className="student">
            <p>Name: {props.name || "Guest"}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" :"No"}</p>
        </div>

    );

    
}

Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,

}

Student.defaultProps={
    name: "Guest",
    age: 1,
    isStudent: false,
}

export default Student