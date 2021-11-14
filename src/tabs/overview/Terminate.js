import React from 'react';

import Box from '@mui/material/Box';

import BuyItem from './BuyItem.js';

export default function Terminate () {
    return (
        <div>
          <div  style={{display:'flex', justifyContent: 'center', marginBottom: 22, fontSize: 22}}>
            <h1 style={{fontSize: 55, fontWeight: 500}}>道具を揃える : あと片付け</h1>
          </div>

          <div style={{display:'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
            <BuyItem title="ごみ箱" data={data.trash}/>

            <BuyItem title="ごみ袋" data={data.bag}/>

            <BuyItem title="石鹸" data={data.soap}/>

            <BuyItem title="タオル" data={data.towel}/>

            <BuyItem title="クーラーボックス" data={data.box}/>
          </div>

        </div>
    );
}

const data = {
    trash: {
        description: '',
        items: [
            {
                title: '',
                img: '',
                url: '',
            },
        ]
    },
    bag: {
        description: '',
        items: [
            {
                title: '',
                img: '',
                url: '',
            },
        ]
    },
    soap: {
        description: '',
        items: [
            {
                title: '',
                img: '',
                url: '',
            },
        ]
    },
    towel: {
        description: '',
        items: [
            {
                title: '',
                img: '',
                url: '',
            },
        ]
    },
    box: {
        description: '',
        items: [
            {
                title: '',
                img: '',
                url: '',
            },
        ]
    },
};
