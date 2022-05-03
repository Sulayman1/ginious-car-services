import React from 'react';

import image1 from '../../../images/expert/laurissi-4RkSsYzxTps-unsplash1.png';
import image2 from '../../../images/expert/laurissi-4RkSsYzxTps-unsplash2.png';
import image3 from '../../../images/expert/laurissi-4RkSsYzxTps-unsplash3.png';
import image4 from '../../../images/expert/laurissi-4RkSsYzxTps-unsplash4.png';
import image5 from '../../../images/expert/laurissi-4RkSsYzxTps-unsplash5.png';
import image6 from '../../../images/expert/laurissi-4RkSsYzxTps-unsplash6.png';
import Expart from '../Expart/Expart';


const Exparts = () => {

    const experts = [
        { id: 1, name: 'abul', img: image1 },
        { id: 2, name: 'abul', img: image2 },
        { id: 3, name: 'abul', img: image3 },
        { id: 4, name: 'abul', img: image4 },
        { id: 5, name: 'abul', img: image5 },
        { id: 6, name: 'abul', img: image6 }
    ]

    return (
        <div className='container'>
            <h2 id='expart' className='text-primary text-center mt-5'>OUR EXPARTS</h2>
            <div className="row">
                {
                    experts.map(expart => <Expart
                        key={expart.id}
                        expart={expart}></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;