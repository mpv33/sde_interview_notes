import React from 'react';

interface TopicDetailsProps {
    activeTopic: {
        topic: string;
        questions: any[];
      };
}

function TopicDetails({activeTopic}: TopicDetailsProps) {
    return (
        <div className="w-full flex justify-center items-center mx-4 px-4 pt-5" style={{ marginTop: '0px' }}>
            <div className="w-full md:w-[80%] mt-1 md:my-4 card active max-h-[70vh] overflow-y-scroll pb-4">
                <p className="text-start md:text-center text-1xl md:text-2xl font-bold mt-2 uppercase text-gray-800">{activeTopic.topic}</p>
                <div className="my-2 text-gray-500">
                    {activeTopic.questions?.map((q, index) => (
                        <div key={index} className='flex'>
                            <p>{index+1}.</p>
                            <p className="pl-2">{q} </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TopicDetails;
