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
export const IpsBackpackIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-backpack ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-backpack" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M192 48l64 0c4.4 0 8 3.6 8 8l0 40-80 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-8 0C57.3 96 0 153.3 0 224L0 448c0 35.3 28.7 64 64 64l0-112 0-48c0-35.3 28.7-64 64-64l192 0c35.3 0 64 28.7 64 64l0 48 0 112c35.3 0 64-28.7 64-64l0-224c0-70.7-57.3-128-128-128l-8 0 0-40c0-30.9-25.1-56-56-56L192 0c-30.9 0-56 25.1-56 56zM352 512l0-96L96 416l0 96 256 0zM144 176l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM352 384l0-32c0-17.7-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32l0 32 256 0z" })] })));
};
export default IpsBackpackIcon;
//# sourceMappingURL=ips-backpack.js.map