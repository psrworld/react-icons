export interface IconProps {
    size?: number | string;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    title?: string;
    onClick?: (event: React.MouseEvent<SVGElement>) => void;
}
export type IconCategory = 'solid' | 'brands' | 'regular' | 'light';
export interface IconDefinition {
    prefix: string;
    iconName: string;
    icon: [number, number, string[], string, string];
}
//# sourceMappingURL=types.d.ts.map