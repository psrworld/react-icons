export type IconPrefix = 'ips' | 'ipr' | 'ipl' | 'ipt' | 'ipb';
export type IconName = string;
export interface IconDefinition {
    prefix: IconPrefix;
    iconName: IconName;
    icon: [
        number,
        number,
        (string | number)[],
        string,
        string
    ];
}
export interface IconProps {
    size?: number | string;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    title?: string;
    onClick?: (event: React.MouseEvent<SVGElement>) => void;
}
export interface IconComponentProps extends IconProps {
    definition: IconDefinition;
}
export interface IconData {
    viewBox: string;
    path: string;
}
//# sourceMappingURL=types.d.ts.map