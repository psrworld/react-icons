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
export const IpsTurnLeftUpIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-turn-left-up ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-turn-left-up" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M34 177.5c-3.8-8.8-2-19 4.6-26l136-144C179.1 2.7 185.4 0 192 0s12.9 2.7 17.4 7.5l136 144c6.6 7 8.4 17.2 4.6 26s-12.5 14.5-22 14.5l-88 0 0 192c0 17.7 14.3 32 32 32l80 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-80 0c-70.7 0-128-57.3-128-128l0-192-88 0c-9.6 0-18.2-5.7-22-14.5z" })] })));
};
export default IpsTurnLeftUpIcon;
//# sourceMappingURL=ips-turn-left-up.js.map