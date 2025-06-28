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
export const IpsOrnamentIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-ornament ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-ornament" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M192 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm55.4 64c5.4-9.4 8.6-20.3 8.6-32c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 11.7 3.1 22.6 8.6 32L128 96c-17.7 0-32 14.3-32 32l0 25.7C66.9 170.5 42.5 194.9 25.7 224l332.6 0c-16.9-29.1-41.2-53.5-70.3-70.3l0-25.7c0-17.7-14.3-32-32-32l-8.6 0zM0 320c0 22.4 3.8 44 10.9 64l362.2 0c7.1-20 10.9-41.6 10.9-64s-3.8-44-10.9-64L10.9 256C3.8 276 0 297.6 0 320zm25.7 96c33.2 57.4 95.2 96 166.3 96s133.1-38.6 166.3-96L25.7 416z" })] })));
};
export default IpsOrnamentIcon;
//# sourceMappingURL=ips-ornament.js.map