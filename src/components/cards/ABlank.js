import React from 'react';

const style = {
    notfound: {
        background:'#eeeeee',
        borderRadius:2,
        paddingRight: 3,
        paddingLeft: 3
    },
    normal: {
        color: 'inherit',
        textDecoration: 'underline',
        textUnderlineOffset: 2,
        textDecorationColor: '#ddd',
        textDecorationStyle: 'dotted',
    },
};

export default function ABlank (props) {
    const style_root = {...style.normal, ...(props.style || {})};

    return (
        <a style={style_root}
           href={props.href}
           target="_blank"
           rel="noopener noreferrer">
          {props.label || props.children || props.href}
        </a>
    );
}
