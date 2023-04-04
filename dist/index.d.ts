/// <reference types="react" />
interface ItemValues {
    id: number;
    image: string;
    title: string;
    desc: string;
}
interface Props {
    values: ItemValues[];
    delay?: number;
    isAutoScroll?: boolean;
    backIconCustom?: JSX.Element;
    nextIconCustom?: JSX.Element;
}
export declare const ExampleComponent: (props: Props) => JSX.Element;
export {};
