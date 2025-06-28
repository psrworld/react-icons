export function definitionToIconData(definition) {
    const [width, height, , , svgPathData] = definition.icon;
    return {
        viewBox: `0 0 ${width} ${height}`,
        path: `<path d="${svgPathData}"/>`
    };
}
export function normalizeIconName(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}
export function createIconComponent(definition, componentName) {
    const { viewBox, path } = definitionToIconData(definition);
    return `import React from 'react';
import { IconProps } from '../types';

export interface ${componentName}Props extends IconProps {}

export const ${componentName}: React.FC<${componentName}Props> = ({
  size = 24,
  color = 'currentColor',
  className = '',
  style = {},
  title,
  onClick,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="${viewBox}"
      fill={color}
      className={\`react-icon \${className}\`}
      style={style}
      onClick={onClick}
      {...props}
    >
      {title && <title>{title}</title>}
      ${path}
    </svg>
  );
};

export default ${componentName};
`;
}
export function toPascalCase(str) {
    return str
        .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '')
        .replace(/^./, str => str.toUpperCase());
}
export function createIconExport(iconName, componentName) {
    return `export { ${componentName} } from './${iconName}/${iconName}';`;
}
//# sourceMappingURL=utils.js.map