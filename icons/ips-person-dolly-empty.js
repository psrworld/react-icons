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
export const IpsPersonDollyEmptyIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-person-dolly-empty ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-person-dolly-empty" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M80 96A48 48 0 1 0 80 0a48 48 0 1 0 0 96zM96 306.7l0-65.1 16.6 24.9c8.9 13.4 23.9 21.4 39.9 21.4l70.7 0 27.1 108.3c-16 11.6-26.3 30.5-26.3 51.7c0 35.3 28.7 64 64 64c32.3 0 59.1-24 63.4-55.1l134.4-33.6c12.9-3.2 20.7-16.2 17.5-29.1s-16.2-20.7-29.1-17.5L339.7 410.3c-10-13.7-25.3-23.3-42.8-25.7L247.3 186.2c-3.2-12.9-16.2-20.7-29.1-17.5s-20.7 16.2-17.5 29.1l6.5 26.2-46.1 0-42.6-64c-13.3-20-35.8-32-59.9-32C26.2 128 0 154.2 0 186.6l0 88.1c0 17 6.7 33.3 18.7 45.3l79.4 79.4 14.3 85.9c2.9 17.4 19.4 29.2 36.8 26.3s29.2-19.4 26.3-36.8l-15.2-90.9c-1.6-9.9-6.3-19-13.4-26.1l-51-51zM0 346.5L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32c0 0 0 0 0 0l0-69.5-64-64zM272 448a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" })] })));
};
export default IpsPersonDollyEmptyIcon;
//# sourceMappingURL=ips-person-dolly-empty.js.map