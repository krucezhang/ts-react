import * as React from 'react';
import { message, notification } from 'antd';

export class ComponentEx<P = {}, S = {}> extends React.Component<P, S>{
    $message = message;
    $notification = notification;
}