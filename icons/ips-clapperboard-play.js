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
export const IpsClapperboardPlayIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-clapperboard-play ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-clapperboard-play" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M453.8 32.3L327 159l-1 1-92.1 0L361 33l1-1L448 32c2 0 3.9 .1 5.8 .3zM393.9 160L498 56c8.8 11 14 24.9 14 40l0 64-118.1 0zM201.9 32l92.1 0L167 159l-1 1-92.1 0L201 33l1-1zm-67.9 0L7 159l-1 1L0 160 0 96C0 60.7 28.7 32 64 32l70.1 0zM0 192l512 0 0 224c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192zm216.5 65.9c-5.2 2.8-8.5 8.2-8.5 14.1l0 128c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8l96-64c4.4-3 7.1-8 7.1-13.3s-2.7-10.3-7.1-13.3l-96-64c-4.9-3.3-11.2-3.6-16.4-.8z" })] })));
};
export default IpsClapperboardPlayIcon;
//# sourceMappingURL=ips-clapperboard-play.js.map