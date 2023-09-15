import PropTypes from 'prop-types';

const Coursename = ({coursenames}) => {
    const {Course_name} = coursenames;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-md'>
            <h3 className="text-3xl">{Course_name}</h3>
        </div>
    );
};
Coursename.propTypes = {
    coursenames: PropTypes.object.isRequired,
   
}


export default Coursename;