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
export const IpsSquare5Icon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-square-5 ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-square-5" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm112 96l104 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-84 0-7.8 43 61.4 6.9c40.1 4.5 70.4 38.4 70.4 78.8c0 43.8-35.5 79.3-79.3 79.3l-36 0c-27.5 0-53.3-13.7-68.6-36.6l-4.1-6.1c-7.4-11-4.5-25.9 6.5-33.3s25.9-4.5 33.3 6.5l4.1 6.1c6.4 9.6 17.2 15.3 28.8 15.3l36 0c17.3 0 31.3-14 31.3-31.3c0-15.9-12-29.3-27.8-31.1l-86.9-9.8c-6.6-.7-12.6-4.2-16.6-9.5s-5.5-12.1-4.4-18.6l16-88c2.1-11.4 12-19.7 23.6-19.7z" })] })));
};
export default IpsSquare5Icon;
//# sourceMappingURL=ips-square-5.js.map