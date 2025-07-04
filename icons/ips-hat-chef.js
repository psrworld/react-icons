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
export const IpsHatChefIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-hat-chef ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-hat-chef" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M153.6 51.2C177 20.1 214.1 0 256 0s79 20.1 102.4 51.2c16-12.1 36-19.2 57.6-19.2c7.1 0 14.4 .8 21.6 2.5C482 44.7 512 84.3 512 128c0 7.1-.8 14.4-2.5 21.6C496 224 448 320 448 320l-74.4 0 26.2-157.4c1.5-8.7-4.4-17-13.2-18.4s-17 4.4-18.4 13.2L341.1 320 272 320l0-160c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160-69.1 0L143.8 157.4c-1.5-8.7-9.7-14.6-18.4-13.2s-14.6 9.7-13.2 18.4L138.4 320 64 320s-48-96-61.5-170.4C.8 142.4 0 135.1 0 128c0-43.7 30-83.3 74.4-93.5C81.6 32.8 88.9 32 96 32c21.6 0 41.6 7.1 57.6 19.2zM448 352l0 96c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-96 384 0z" })] })));
};
export default IpsHatChefIcon;
//# sourceMappingURL=ips-hat-chef.js.map