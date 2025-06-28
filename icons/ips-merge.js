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
export const IpsMergeIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-merge ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-merge" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l97.2 0c9.7 0 18.9 4.4 25 12L247 256 154.2 372c-6.1 7.6-15.3 12-25 12L32 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l97.2 0c29.2 0 56.7-13.3 75-36l99.2-124 80.6 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c6-6 9.4-14.1 9.4-22.6s-3.4-16.6-9.4-22.6l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 32-80.6 0L204.2 100c-18.2-22.8-45.8-36-75-36L32 64z" })] })));
};
export default IpsMergeIcon;
//# sourceMappingURL=ips-merge.js.map