import styled from 'styled-components';
import { IBaseStyledProps } from 'ide-lib-base-component';

import { IHeaderBarProps } from './index';

interface IStyledProps extends IHeaderBarProps, IBaseStyledProps {
  [prop: string]: any;
}

export const StyledContainer = styled.div.attrs((props: IStyledProps) => ({
  style: props.style || {} // 优先级会高一些，行内样式
}))<IStyledProps>`
  width: 100%;
  background: white;
  height: ${(props: IStyledProps) => props.height || '65px'};
  border-bottom: 2px solid ${(props: IStyledProps) => props.theme.main};
`;

export const StyledLogo = styled.img.attrs((props: IStyledProps) =>({
  style:  props.style || {}
}))<IStyledProps>`
  max-width: 210px;
  max-height: 64px;
`;
