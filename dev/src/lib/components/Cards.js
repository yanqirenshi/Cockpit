import React, { useState } from 'react';
import Measure from 'react-measure';
import Masonry from './MasonryLayout.js';

export default function Cards (props) {
    const [dimensions, setDimensions] = useState({ width: -1, height: -1 });

    const core = props.core;

    const style = {
        width: core.calPoolWidth(dimensions),
        marginLeft: 'auto',
        marginRight: 'auto',
    };

    return (
        <Measure bounds onResize={rect => setDimensions(rect.bounds)}>
          {({ measureRef }) => (
              <div ref={measureRef}>
                <div style={style}>
                  <Masonry options={core.makeMasonryOptions()}>
                    {props.children}
                  </Masonry>
                </div>
              </div>
          )}
        </Measure>
    );
}
