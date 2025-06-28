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
export const IpsScarfIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-scarf ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-scarf" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 137.4L374.6 256l9.4 9.4 11.3 11.3 112 112c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L384 310.6 358.6 336 459.3 436.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L336 358.6 310.6 384 411.3 484.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-112-112L128.4 247C107.7 226.3 96 198.1 96 168.8c0-19 4.9-37.7 14.2-54.2l41.5-73.8C165.9 15.6 192.5 0 221.4 0l69.1 0c28.9 0 55.6 15.6 69.7 40.8l41.5 73.8c9.3 16.6 14.2 35.2 14.2 54.2c0 22.8-7 44.9-19.9 63.4L278.6 114.7l15.1-15.1C283.1 97.5 270.3 96 256 96s-27.1 1.5-37.8 3.6L256 137.4zM4.7 388.7l112-112 22.6 22.6-112 112c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zm48 48l112-112 22.6 22.6-112 112c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zm48 48l112-112 22.6 22.6-112 112c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z" })] })));
};
export default IpsScarfIcon;
//# sourceMappingURL=ips-scarf.js.map