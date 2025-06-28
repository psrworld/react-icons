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
export const IpsChopsticksIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-chopsticks ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chopsticks" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M368 0c-15.3 0-29 7.2-37.7 18.3L3.4 486.1c-5.5 6.9-4.3 17 2.7 22.5s17 4.2 22.5-2.7L405.7 77.7C412.2 69.5 416 59.2 416 48c0-26.5-21.5-48-48-48zM131.9 506.4c5.8 6.7 15.9 7.5 22.6 1.7L623.2 148.4c10.3-8.8 16.8-21.9 16.8-36.4c0-26.5-21.5-48-48-48c-11.9 0-22.8 4.4-31.2 11.6L133.6 483.9c-6.7 5.8-7.5 15.8-1.7 22.6z" })] })));
};
export default IpsChopsticksIcon;
//# sourceMappingURL=ips-chopsticks.js.map