import { FrameEvent } from './frame';
import { Identity } from '../../identity';

export declare type RuntimeEvent<Topic = string, Type = string> = Topic extends 'window' ? WindowEvent<Topic, Type> : Topic extends 'frame' ? FrameEvent<Type> : Topic extends 'application' ? ApplicationEvent<Topic, Type> : BaseEvent<Topic, Type>;
export interface BaseEvent<Topic, Type> {
    topic: Topic;
    type: Type;
}
export interface ApplicationEvent<Topic, Type> extends BaseEvent<Topic, Type> {
    uuid: string;
}
export interface WindowEvent<Topic, Type> extends ApplicationEvent<Topic, Type> {
    name: string;
}
export declare function getTopic(e: RuntimeEvent<any>): string;
export interface BaseEventMap {
    [name: string]: any;
    'newListener': string;
    'listenerRemoved': string;
}

export interface ExternalWindowEvent<Topic, Type> extends BaseEvent<Topic, Type>, Identity {}
