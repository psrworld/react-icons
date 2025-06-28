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
export const IpsSoftServeIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-soft-serve ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-soft-serve" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M208 0c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l6.1 6.1c3.4 3.4 5.3 7.9 5.3 12.7C208 56 200 64 190.1 64L128 64c-35.3 0-64 28.7-64 64c0 11.8 3.2 22.9 8.8 32.4C40.8 164 16 191.1 16 224c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-2.3 0c11.5-14.4 18.3-32.7 18.3-52.6C320 48.1 271.9 0 212.6 0L208 0zM48 320l0 32c0 17.7 14.3 32 32 32l1.8 0 11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5l134.7 0c16.3 0 30-12.3 31.8-28.5L302.2 384l1.8 0c17.7 0 32-14.3 32-32l0-32L48 320z" })] })));
};
export default IpsSoftServeIcon;
//# sourceMappingURL=ips-soft-serve.js.map