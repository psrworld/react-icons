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
export const IpsBowlChopsticksIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-bowl-chopsticks ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bowl-chopsticks" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M18.5 125.1l473.8-74c11.3-1.8 19.7-11.5 19.7-23c0-14.6-13.3-25.6-27.6-22.9L13.1 93.6C5.5 95 0 101.6 0 109.3c0 9.8 8.8 17.3 18.5 15.8zM0 159.7c0 9 7.3 16.2 16.2 16.2l472.1 0c13 0 23.6-10.6 23.6-23.6c0-13.3-11-24-24.4-23.6L15.7 143.5C7 143.8 0 151 0 159.7zM33.6 224C15.4 224 .9 239.3 2 257.5c5.4 91.7 59.7 169.7 136.4 209.7l1.2 9.7c2.5 20 19.5 35 39.7 35l153.4 0c20.2 0 37.2-15 39.7-35l1.2-9.7c76.8-40 131-118 136.4-209.7c1.1-18.2-13.4-33.5-31.6-33.5L33.6 224z" })] })));
};
export default IpsBowlChopsticksIcon;
//# sourceMappingURL=ips-bowl-chopsticks.js.map