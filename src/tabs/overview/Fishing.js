import React from 'react';

import Box from '@mui/material/Box';

import BuyItem from './BuyItem.js';

export default function Fishing () {
    return (
        <div>
          <div  style={{display:'flex', justifyContent: 'center', marginBottom: 22, fontSize: 22}}>
            <h1 style={{fontSize: 55, fontWeight: 500}}>道具を揃える : 釣る</h1>
          </div>

          <div style={{display:'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
            <BuyItem title="釣竿" data={data.rod}/>

            <BuyItem title="リール" data={data.reel}/>

            <BuyItem title="ルアー" data={data.lure}/>

            <BuyItem title="フィッシュグリップ" data={data.fish_grip}/>

            <BuyItem title="はさみ / ペンチ" data={data.cheliped}/>

          </div>

        </div>
    );
}

const data = {
    rod: {
        description: '',
        items: [
            {
                title: 'AbuGarcia ERD REALFINESSE Prototype ERFS-60Pro-FS (6ft, 39g)',
                img: 'https://www.purefishing.jp/product/assets/ERD-REALFINESSE-Prototype-ERFS-60Pro-FS.png',
                url: 'https://www.purefishing.jp/product/abugarcia/eradicator-realfinesse-prototype.html?utm_source=pocket_mylist',
            },
            {
                title: 'Huerco MG700R-5S (7ft, 110g)',
                img: 'https://huerco.jp/admin/wp-content/uploads/2021/05/MG700R-5S.jpg',
                url: 'https://huerco.jp/product/mg700r-5s?utm_source=pocket_mylist',
            },
        ]
    },
    reel: {
        description: '',
        items: [
            {
                title: 'ZENON 1000S',
                img: 'https://www.purefishing.jp/product/assets/2021_ZENON%202500SH_main_sq.jpg',
                url: 'https://www.purefishing.jp/product/abugarcia/sp/zenon/revo-mgx-theta-1.html',
            },
        ]
    },
    lure: {
        description: '「疑似餌」タブ参照。(数が多いので)',
        items: [
            {
                title: '',
                img: '',
                url: '',
            },
        ]
    },
    fish_grip: {
        description: '',
        items: [
            {
                title: 'オオサンショウウオやん！グリップ',
                img: 'https://m.media-amazon.com/images/I/61l7XXPqXNL._AC_SL1500_.jpg',
                url: 'https://www.amazon.co.jp/%E7%AC%AC%E4%B8%80%E7%B2%BE%E5%B7%A5-%E3%82%AA%E3%82%AA%E3%82%B5%E3%83%B3%E3%82%B7%E3%83%A7%E3%82%A6%E3%82%A6%E3%82%AA%E3%82%84%E3%82%93%EF%BC%81%E3%82%B0%E3%83%AA%E3%83%83%E3%83%97/dp/B08WLVW4ZJ/',
            },
            {
                title: '第一精工 フィッシュグリップ',
                img: 'https://m.media-amazon.com/images/I/71APiRK+9oL._AC_SL1500_.jpg',
                url: 'https://www.amazon.co.jp/%E7%AC%AC%E4%B8%80%E7%B2%BE%E5%B7%A5-%E3%83%AF%E3%83%8B%E3%82%B0%E3%83%AA%E3%83%83%E3%83%97%E3%83%9F%E3%83%8BMC-%E3%83%9B%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%BC-%E3%83%80%E3%83%BC%E3%82%AF%E3%82%A2%E3%83%BC%E3%82%B9/dp/B00U2TDCXG/ref=pd_sbs_1/355-0961192-1797146',
            },
        ]
    },
    cheliped: {
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
