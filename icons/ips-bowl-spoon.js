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
export const IpsBowlSpoonIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-bowl-spoon ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bowl-spoon" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M112 192C50.1 192 0 149 0 96S50.1 0 112 0c48.8 0 90.3 26.7 105.6 64L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-262.4 0c-15.4 37.3-56.9 64-105.6 64zM2 257.5C.9 239.3 15.4 224 33.6 224l444.8 0c18.2 0 32.7 15.3 31.6 33.5c-5.4 91.7-59.7 169.7-136.4 209.7l-1.2 9.7c-2.5 20-19.5 35-39.7 35l-153.4 0c-20.2 0-37.2-15-39.7-35l-1.2-9.7C61.6 427.2 7.4 349.3 2 257.5z" })] })));
};
export default IpsBowlSpoonIcon;
//# sourceMappingURL=ips-bowl-spoon.js.map