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
export const IpsWatchIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-watch ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-watch" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M112 0L272 0c26.5 0 48 21.5 48 48l0 24.2C283.7 46.8 239.6 32 192 32s-91.7 14.8-128 40.2L64 48C64 21.5 85.5 0 112 0zM64 464l0-24.2c36.3 25.3 80.4 40.2 128 40.2s91.7-14.8 128-40.2l0 24.2c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48zM0 256a192 192 0 1 1 384 0A192 192 0 1 1 0 256zM192 152c-13.3 0-24 10.7-24 24l0 80c0 8 4 15.5 10.7 20l48 32c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L216 243.2l0-67.2c0-13.3-10.7-24-24-24z" })] })));
};
export default IpsWatchIcon;
//# sourceMappingURL=ips-watch.js.map