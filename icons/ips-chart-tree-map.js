var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const IpsChartTreeMapIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-chart-tree-map ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chart-tree-map" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 80C0 53.5 21.5 32 48 32l128 0c26.5 0 48 21.5 48 48l0 112c0 26.5-21.5 48-48 48L48 240c-26.5 0-48-21.5-48-48L0 80zM0 320c0-26.5 21.5-48 48-48l128 0c26.5 0 48 21.5 48 48l0 112c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48L0 320zM304 32l160 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48zM256 240c0-26.5 21.5-48 48-48l160 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-32zm48 112l160 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48z" })] })));
};
export default IpsChartTreeMapIcon;
//# sourceMappingURL=ips-chart-tree-map.js.map