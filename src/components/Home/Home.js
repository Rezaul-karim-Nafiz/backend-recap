import React from 'react';
import Event from '../Event/Event';
import './Home.css';

const Home = () => {
    const events = [
        {
            name:'child support',
            pic:'http://www.morchemist.com/images/child-care-inner.jpg'
        },
        {
            name:'child support',
            pic:'http://www.morchemist.com/images/child-care-inner.jpg'
        },
        {
            name:'child support',
            pic:'http://www.morchemist.com/images/child-care-inner.jpg'
        },
        {
            name:'child support',
            pic:'http://www.morchemist.com/images/child-care-inner.jpg'
        },
        {
            name:'child support',
            pic:'http://www.morchemist.com/images/child-care-inner.jpg'
        }
    ]
    
    return (
        <div >
            <div className="row">
                {
                    events.map(data => <Event data={data}/>)
                }
            </div>
        </div>
    );
};

export default Home;