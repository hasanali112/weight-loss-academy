import {  useLoaderData} from 'react-router-dom';
import BannarCover from './BannerCover/BannarCover';
import bannerCover from '../../src/assets/image/banner3.jpg';
import ClassCard from '../comoponent/ClassCard';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    const loadAllClasses= useLoaderData()
    console.log(loadAllClasses)
   
    return (
        <div>
             <Helmet>
                <title>Classes- Weight Loss Academy</title>
            </Helmet>
           <BannarCover
           image={bannerCover}
           title='Explore Our Best Classes'
           subTitle='We provide best weight loss classes that help to fit and heathy life'
           ></BannarCover>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:ml-10 mb-10'>
           {
                loadAllClasses.map(loadClass=> <ClassCard
                key={loadClass._id}
                item={loadClass}
                ></ClassCard>)
            }
           </div>
        </div>
    );
};

export default Classes;