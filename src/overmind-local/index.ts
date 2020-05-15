/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  IAction,
  IConfig,
  IDerive,
  IOnInitialize,
  IOperator,
  IState,
} from 'overmind';

import {state} from './state';

export const config = {
  state,
};

export interface Config extends IConfig<typeof config> {}

export interface OnInitialize extends IOnInitialize<Config> {}

export interface Action<Input = void, Output = void>
  extends IAction<Config, Input, Output> {}

export interface AsyncAction<Input = void, Output = void>
  extends IAction<Config, Input, Output> {}

export interface Operator<Input = void, Output = void>
  extends IOperator<Config, Input, Output> {}

export interface Derive<Parent extends IState, Output>
  extends IDerive<Config, Parent, Output> {}
