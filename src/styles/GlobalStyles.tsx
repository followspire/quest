import React from 'react';
import { Global, css } from '@emotion/react';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = [
  css`
     @import url('https://fonts.googleapis.com/css?family=Kelly+Slab');
  `,
  {
    body: {
      WebkitTapHighlightColor: theme`colors.purple.500`,
      fontFamily: 'Kelly Slab',
      ...tw`antialiased`,
    },
  },
];

function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
    </>
  );
}

export default React.memo(GlobalStyles);
