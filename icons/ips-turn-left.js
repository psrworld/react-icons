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
export const IpsTurnLeftIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-turn-left ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-turn-left" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M177.5 66c-8.8-3.8-19-2-26 4.6l-144 136C2.7 211.1 0 217.4 0 224s2.7 12.9 7.5 17.4l144 136c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22l0-88 192 0c17.7 0 32 14.3 32 32l0 144c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-144c0-70.7-57.3-128-128-128l-192 0 0-88c0-9.6-5.7-18.2-14.5-22z" })] })));
};
export default IpsTurnLeftIcon;
//# sourceMappingURL=ips-turn-left.js.map