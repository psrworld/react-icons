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
export const IpsCometIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-comet ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-comet" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M299.4 75.6L493.7 .9c1.5-.6 3.2-.9 4.8-.9C506 0 512 6 512 13.5c0 1.7-.3 3.3-.9 4.8L436.4 212.6l29.3-2.3c12.8-1 21.5 12.8 15.1 24L378.6 410.7C342.3 473.4 275.4 512 203 512C90.9 512 0 421.1 0 309c0-72.4 38.6-139.4 101.3-175.7L277.7 31.2c11.1-6.5 25 2.2 24 15.1l-2.3 29.3zM192 200c-6.1 0-11.7 3.5-14.3 8.9l-29.2 59.2-65.3 9.5c-6 .9-11 5.1-12.9 10.9s-.3 12.2 4 16.4l47.2 46-11.2 65c-1 6 1.4 12.1 6.4 15.7s11.5 4.1 16.8 1.2L192 402.1l58.4 30.7c5.4 2.8 11.9 2.4 16.8-1.2s7.4-9.6 6.4-15.7l-11.2-65 47.2-46c4.4-4.3 5.9-10.6 4-16.4s-6.9-10-12.9-10.9l-65.3-9.5-29.2-59.2c-2.7-5.5-8.3-8.9-14.3-8.9z" })] })));
};
export default IpsCometIcon;
//# sourceMappingURL=ips-comet.js.map