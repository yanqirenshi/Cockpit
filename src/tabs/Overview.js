import React from 'react';

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';


import Vision from './overview/Vision.js';
import CutFish from './overview/CutFish.js';
import Fishing from './overview/Fishing.js';
import Terminate from './overview/Terminate.js';

export default function Overview () {
    return (
        <div style={{paddingLeft: 100, paddingRigh: 100}}>

          <div style={{marginTop:55}}>
            <Vision />
          </div>

          <div style={{marginTop:88}}>
            <Fishing />
          </div>

          <div style={{marginTop:88}}>
            <CutFish />
          </div>

          <div style={{marginTop:88}}>
            <Terminate />
          </div>

        </div>
    );
}
