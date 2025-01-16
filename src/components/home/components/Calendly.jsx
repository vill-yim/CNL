import React from 'react';
import { InlineWidget } from 'react-calendly';

export const Calendly = () => {
    return (
        <InlineWidget 
            url="https://calendly.com/creativenetwork/30min"
            styles={{
                width:"1450px",
                maxWidth:"100%",
                height:"700px",
                maxHeight:"100%",
                zIndex:'1000',
                margin:"0 auto"
            }}
            
        />
    );
};
