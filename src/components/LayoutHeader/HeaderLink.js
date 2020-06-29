/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import {Link} from 'gatsby';
import React from 'react';
import {colors, media} from 'theme';

type Props = {
  isActive: boolean,
  title: string,
  to: string,
};

const HeaderLink = ({isActive, title, to}: Props) => (
  <Link css={[style, isActive && activeStyle]} to={to}>
    {title}
    {isActive && <span css={activeAfterStyle} />}
  </Link>
);

const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: colors.white, /* customkey: header text (before search) to change color of docs and tutorial header nav items */
  transition: 'color 0.2s ease-out',
  paddingLeft: 15,
  paddingRight: 15,
  fontWeight: 600, /* customkey: header text (before search) to change text size of docs and tutorial header nav items */

  ':focus': {
    outline: 0,
    backgroundColor: colors.uni_header_black, /* customkey: header text highlight (before search) to change highlight color of docs and tutorial header nav items */
    color: colors.white,
  },

  [media.size('xsmall')]: {
    paddingLeft: 8,
    paddingRight: 8,
  },

  [media.between('small', 'medium')]: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  [media.greaterThan('xlarge')]: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,

    ':hover:not(:focus)': {
      /* color: colors.brand, */
      color: colors.uni_header_blue, /* customkey: header heading hover color */
    },
  },
};

const activeStyle = {
  color: colors.uni_header_blue,  /* customkey: header heading selection or active color */

  [media.greaterThan('small')]: {
    position: 'relative',
  },
};

const activeAfterStyle = {
  [media.greaterThan('small')]: {
    position: 'absolute',
    bottom: -1,
    height: 4,
    background: colors.uni_header_blue, /* customkey: header heading selection or active underline color */
    left: 0,
    right: 0,
    zIndex: 1,
  },
};

export default HeaderLink;
