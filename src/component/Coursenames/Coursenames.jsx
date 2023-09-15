import PropTypes from 'prop-types';
import Coursename from '../Coursename/Coursename';

const Coursenames = ({coursename, remaining, totalCost}) => {
    return (
        <div className='md:w-1/3'>
            <h2>CourseName:{coursename.length}</h2>
          
            <h5>remaining:{remaining}</h5>
            <hr />
            {
                coursename.map(coursenames => <Coursename key={coursenames.ID} coursenames ={coursenames}></Coursename>)
            }
            <hr />
            <h5>totalCost:{totalCost}</h5>
        
        </div>
    );
};

Coursenames.propTypes = {
    coursename: PropTypes.object.isRequired,
    
}


export default Coursenames;