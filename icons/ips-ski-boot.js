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
export const IpsSkiBootIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-ski-boot ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-ski-boot" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M383.4 38c3.3-17.4-8-34.1-25.4-37.5s-34.1 8-37.5 25.4l-1.2 6-73.7 0c-22.1 130.8-76 201.3-127.2 238.9c-26.2 19.3-51.2 29.5-69.9 35c-6.3 1.8-11.8 3.1-16.5 4L.6 474c-1.8 9.4 .7 19.1 6.8 26.4S22.5 512 32 512l416 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-72c0-12.3-7-23.4-18-28.8L340 288l-68 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l69.5 0 12.3-64L288 192c-8.8 0-16-7.2-16-16s7.2-16 16-16l72 0 17.3-90 6.2-32zM38.8 275.4c.3-.1 .6-.2 .9-.3c15.6-4.6 37.1-13.3 59.9-30c43-31.6 92.3-92.9 113.7-213.1L112 32C96.7 32 83.5 42.9 80.6 58L38.8 275.4z" })] })));
};
export default IpsSkiBootIcon;
//# sourceMappingURL=ips-ski-boot.js.map