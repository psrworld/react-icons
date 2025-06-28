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
export const IpsTreeDeciduousIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-tree-deciduous ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-tree-deciduous" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M384 80c-11.5 0-22.5 2.4-32.4 6.8C347 38.1 305.9 0 256 0s-91 38.1-95.6 86.8C150.5 82.4 139.5 80 128 80c-44.2 0-80 35.8-80 80c0 14.4 3.8 27.9 10.5 39.6C24.1 214.2 0 248.3 0 288c0 53 43 96 96 96l128 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 128 0c53 0 96-43 96-96c0-39.7-24.1-73.8-58.5-88.4c6.7-11.7 10.5-25.2 10.5-39.6c0-44.2-35.8-80-80-80z" })] })));
};
export default IpsTreeDeciduousIcon;
//# sourceMappingURL=ips-tree-deciduous.js.map