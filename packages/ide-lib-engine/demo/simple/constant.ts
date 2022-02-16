import { IBaseTheme, IBaseComponentProps } from 'ide-lib-base-component';


export interface ILibEngineEvent {
  /**
   * 点击回调函数
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ILibEngineTheme extends IBaseTheme {
  main: string;
}

export interface ILibEngineProps extends ILibEngineEvent, IBaseComponentProps {
  /**
   * 是否展现
   */
  visible?: boolean;

  /**
   * 文案
   */
  text?: string;
}

export const DEFAULT_PROPS: ILibEngineProps = {
  visible: true,
  theme: {
    main: '#25ab68'
  },
  styles: {
    container: {}
  }
};
