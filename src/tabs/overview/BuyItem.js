import React from 'react';

import Box from '@mui/material/Box';

export default function BuyItem (props) {
    const title = props.title;
    const data = props.data;

    return (
        <Box sx={{width: 200}}>
          <h2 style={{fontSize: 22, fontWeight: 'bold'}}>
            {title}
          </h2>

          <div>
            <p>{data.description}</p>

            {data.items.map((d,i)=>(
                <div key={i} style={{marginBottom:22}}>
                  <p><a href={d.url}>{d.title}</a></p>
                  <img src={d.img}/>
                </div>
            ))}
          </div>
        </Box>
    );
}
