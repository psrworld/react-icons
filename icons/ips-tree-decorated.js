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
export const IpsTreeDecoratedIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-tree-decorated ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-tree-decorated" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208l24.9 0L28.5 313.7c-2.9 4.1-4.5 9-4.5 14.1C24 341.1 34.8 352 48.2 352L80 352 3.8 474c-2.5 4-3.8 8.5-3.8 13.2C0 500.9 11.1 512 24.9 512l398.3 0c13.7 0 24.9-11.1 24.9-24.9c0-4.7-1.3-9.2-3.8-13.2L368 352l31.8 0c13.4 0 24.2-10.9 24.2-24.2c0-5-1.6-10-4.5-14.1L344 208l24.9 0c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9zM160 264a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72-104a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm56 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" })] })));
};
export default IpsTreeDecoratedIcon;
//# sourceMappingURL=ips-tree-decorated.js.map