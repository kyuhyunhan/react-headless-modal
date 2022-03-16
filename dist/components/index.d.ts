import * as React from 'react';
declare type Props = {
    defaultIsVisible?: boolean;
    onIsVisible: boolean;
    children: any;
};
export declare const HeadlessModal: ({ defaultIsVisible, onIsVisible, children }: Props) => React.ReactPortal | null;
export {};
