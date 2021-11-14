import React from 'react';

import Box from '@mui/material/Box';

import BuyItem from './BuyItem.js';

export default function CutFish () {
    return (
        <div>
          <div  style={{display:'flex', justifyContent: 'center', marginBottom: 22, fontSize: 22}}>
            <h1 style={{fontSize: 55, fontWeight: 500}}>道具を揃える : 魚を捌く</h1>
          </div>

          <div style={{display:'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>

            <BuyItem title="包丁" data={data.knife}/>

            <BuyItem title="椅子" data={data.char}/>

            <BuyItem title="まな板" data={data.chopping_board}/>

            <BuyItem title="テーブル" data={data.table}/>

            <BuyItem title="水汲み" data={data.water}/>

            <BuyItem title="真空パック機" data={data.preserve}/>

          </div>

        </div>
    );
}

const data = {
    chopping_board: {
        description: '',
        items: [
            {
                title: 'JosephJoseph 食洗器対応水切り一体型まな板',
                img: 'https://m.media-amazon.com/images/I/41sza5yTiCL._AC_SL1000_.jpg',
                url: 'https://www.amazon.co.jp/Joseph-%E6%8A%98%E3%82%8A%E3%81%9F%E3%81%9F%E3%82%81%E3%82%8B%E3%81%BE%E3%81%AA%E6%9D%BF-%E3%83%81%E3%83%A7%E3%83%83%E3%83%97-%E3%82%B9%E3%83%A2%E3%83%BC%E3%83%AB-600728/dp/B009X07ILW/ref=sr_1_12',
            },
        ]
    },
    char: {
        description: '',
        items: [
            {
                title: 'ロゴス アウトドアチェア',
                img: 'https://m.media-amazon.com/images/I/61a4V2+OUxL._AC_SL1200_.jpg',
                url: 'https://www.amazon.co.jp/%E3%83%AD%E3%82%B4%E3%82%B9-LOGOS-73175033-%E3%82%A2%E3%82%A6%E3%83%88%E3%83%89%E3%82%A2%E3%83%81%E3%82%A7%E3%82%A2-7075%E3%82%BF%E3%83%95%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%93%E3%83%83%E3%82%AF%E3%83%81%E3%82%A7%E3%82%A2%E3%83%BB%E3%83%AF%E3%82%A4%E3%83%89/dp/B01N6RZB05/ref=sr_1_21',
            },
        ]
    },
    table: {
        description: '',
        items: [
            {
                title: 'キャプテンスタッグ(CAPTAIN STAG) アルミ ロールテーブル',
                img: 'https://m.media-amazon.com/images/I/71Lmh1M03lL._AC_SL1500_.jpg',
                url: 'https://www.amazon.co.jp/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%86%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%83%E3%82%B0-CAPTAIN-STAG-%E3%83%AD%E3%83%BC%E3%83%AB%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB-M-3713/dp/B000AR4TJQ/ref=pd_bxgy_img_1/355-0961192-1797146',
            },
        ]
    },
    knife: {
        description: '',
        items: [
            {
                title: 'IST-05 小出刃 12cm',
                img: 'https://www.yoshikin.co.jp/wp-content/uploads/2019/10/globalist_IST_05-1.png',
                url: 'https://www.yoshikin.co.jp/products/%e5%b0%8f%e5%87%ba%e5%88%8312cm',
            },
        ]
    },
    water: {
        description: '',
        items: [
            {
                title: 'ポータブル活かし水くみ',
                img: 'https://m.media-amazon.com/images/I/31Y831j8bNL._AC_.jpg',
                url: 'https://www.amazon.co.jp/%E3%83%80%E3%82%A4%E3%83%AF-DAIWA-%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%96%E3%83%AB%E6%B4%BB%E3%81%8B%E3%81%97%E6%B0%B4%E3%81%8F%E3%81%BF-15-A/dp/B098VZ2X5L/ref=pd_sbs_7/355-0961192-1797146',
            },
        ]
    },
    preserve: {
        description: '',
        items: [
            {
                title: 'ATITI 真空パック機',
                img: 'https://m.media-amazon.com/images/I/416V8OL4WES._AC_SL1500_.jpg',
                url: 'https://www.amazon.co.jp/ATITI-%E7%9C%9F%E7%A9%BA%E3%83%91%E3%83%83%E3%82%AF%E6%A9%9F-%E7%9C%9F%E7%A9%BA%E8%A2%8B5%E6%9E%9A%E4%BB%98%E3%81%8D-%E5%AE%B6%E5%BA%AD%EF%BC%8F%E6%97%85%E8%A1%8C%EF%BC%8F%E3%83%8F%E3%82%A4%E3%82%AD%E3%83%B3%E3%82%B0%E6%9C%80%E9%81%A9%E7%94%A8-%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8/dp/B094CPTLKK/ref=sr_1_38',
            },
            {
                title: '真空パック袋20枚',
                img: 'https://m.media-amazon.com/images/I/61b-mD7cXvS._AC_SL1500_.jpg',
                url: 'https://www.amazon.co.jp/%E7%9C%9F%E7%A9%BA%E3%83%91%E3%83%83%E3%82%AF%E8%A2%8B20%E6%9E%9A-%E5%AF%86%E5%B0%81%E7%94%A8%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%80%E3%83%BC4%E6%9E%9A%E4%BB%98-%E6%8A%97%E8%8F%8C%E8%A2%8B-%E5%9C%A7%E7%B8%AE%E8%A2%8B-%E3%83%9A%E3%83%83%E3%83%88/dp/B0963S2JHL/ref=pd_day0fbt_img_2/355-0961192-1797146',
            },
        ]
    }
};
