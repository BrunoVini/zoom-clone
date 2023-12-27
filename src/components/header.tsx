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

export const Header = (props: PropsType) => {
  return (
    <EuiHeader>
      <EuiHeaderSectionItem>
        <EuiHeaderLogo>Elastic</EuiHeaderLogo>
      </EuiHeaderSectionItem>
      <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="App navigation links example">
          <EuiHeaderLink isActive>Docs</EuiHeaderLink>
          <EuiHeaderLink href='/'>Code</EuiHeaderLink>
          <EuiHeaderLink iconType="help">Help</EuiHeaderLink>
          <EuiButton fill {...props} >Mode</EuiButton>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeader>
  );
};