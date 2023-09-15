/* eslint-disable react/no-unknown-property */
import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddCoursename }) => {
    const { Cover_Photo, Course_name, Title, Price, Reading_Time } =blog;

return (
   <div>
     <div className=' w-80 bg-slate-100 shadow-md mt-10 rounded-md'>
        <img className='w-72 ml-4 ' src={Cover_Photo} alt="" />
        <h2 className='text-2xl text-center font-semibold mt-2'>{Course_name}</h2>
        <h1 className="mt-3 text-center">{Title}</h1>
        <div className='flex justify-between mt-2'>
            <p>$Price:{Price}</p>
            <img src="https://i.ibb.co/gFftcDb/Frame.jpg" alt="" />
            <p><small>Credit:{Reading_Time}hours</small></p>
        </div>
        <button onClick={()=>handleAddCoursename(blog)}className="btn btn-primary mt-3  pl-32 pr-32">Select</button>
    </div>
   </div>
);
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddCoursename:PropTypes.func
}

export default Blog;