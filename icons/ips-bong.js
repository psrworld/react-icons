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
export const IpsBongIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-bong ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bong" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M160 208.5c0 29.1-15.6 53.9-37.2 67.8c-17.2 11.1-31.5 26.1-41.7 43.7l221.8 0c-10.2-17.6-24.5-32.6-41.7-43.7c-21.6-13.9-37.2-38.7-37.2-67.8L224 64l-64 0 0 144.5zM288 64l0 144.5c0 5.7 3.1 10.9 7.9 14c11.2 7.2 21.5 15.5 30.9 24.8L366.1 208l-7-7c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l24 24 24 24c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-7-7-43.3 43.3C374 314.1 384 347.9 384 384c0 39.4-11.9 76.1-32.2 106.5c-9.6 14.4-26.5 21.5-43.8 21.5L76.1 512c-17.3 0-34.2-7.1-43.8-21.5C11.9 460.1 0 423.4 0 384c0-67.8 35.1-127.3 88.1-161.5c4.8-3.1 7.9-8.3 7.9-14L96 64C78.3 64 64 49.7 64 32S78.3 0 96 0l16 0L272 0l16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" })] })));
};
export default IpsBongIcon;
//# sourceMappingURL=ips-bong.js.map