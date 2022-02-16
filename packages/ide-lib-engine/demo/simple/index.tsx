import React, { useCallback } from 'react';
import { Button } from 'antd';

import { StyledContainer } from './styles';
import {
  TComponentCurrying,
} from '../../src';

import { ILibEngineProps } from './constant'


export const LibEngineCurrying: TComponentCurrying<
  ILibEngineProps, {}
> = subComponents => props => {
  const { visible, text, styles, onClick } = props;

  const onClickButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick && onClick(e);
    },
    [onClick]
  );

  return (
    <StyledContainer
      style={styles.container}
      visible={visible}
      // ref={this.root}
      className="ide-lib-engine-container"
    >
      <Button onClick={onClickButton}>{text || '点我试试'}</Button>
    </StyledContainer>
  );
};

