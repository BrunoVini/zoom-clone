import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiButton,
} from '@elastic/eui';

import React from 'react';

type PropsType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Header = () => {
  return (
    <EuiHeader>
      <EuiHeaderSectionItem>
        <EuiHeaderLogo>Zoom</EuiHeaderLogo>
      </EuiHeaderSectionItem>
      <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="App navigation links example">
          <EuiHeaderLink isActive>Docs</EuiHeaderLink>
          <EuiHeaderLink href='/'>Code</EuiHeaderLink>
          <EuiHeaderLink iconType="help">Help</EuiHeaderLink>
          <EuiButton fill >Mode</EuiButton>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeader>
  );
};