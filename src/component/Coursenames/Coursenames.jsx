import PropTypes from 'prop-types';
import Coursename from '../Coursename/Coursename';

const Coursenames = ({coursename, remaining, totalCost}) => {
    return (
        <div className='w-96 h-4/5  ml-10 bg-[#cad0d8] rounded-md'>
          
            <h5 className='text-[#2F80ED] text-center'>Credit Hour Remaining {remaining} hr</h5>
            <hr />
            <h2 className='text-xl text-center'>Course Name</h2>
            {
                coursename.map(coursenames => <Coursename key={coursenames.ID} coursenames ={coursenames}></Coursename>)
            }
            <hr />
            <h5 className='text-center'>totalCost:{totalCost}</h5>
        
        </div>
    );
};

Coursenames.propTypes = {
    coursename: PropTypes.object.isRequired,
    
}


export default Coursenames;