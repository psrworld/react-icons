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
export const IpsUserHeadsetIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-user-headset ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-user-headset" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M224 32C135.6 32 64 103.6 64 192l0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16C32 86 118 0 224 0S416 86 416 192l0 16c0 61.9-50.1 112-112 112l-64 0-16 0-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l32 0c44.2 0 80-35.8 80-80l0-16c0-88.4-71.6-160-160-160zM96 192c0-70.7 57.3-128 128-128s128 57.3 128 128c0 13.9-2.2 27.3-6.3 39.8C337.4 246.3 321.8 256 304 256l-8.6 0c-11.1-19.1-31.7-32-55.4-32l-32 0c-35.3 0-64 28.7-64 64c0 1.4 0 2.7 .1 4C114.8 268.6 96 232.5 96 192zM224 352l16 0 64 0 9.6 0C387.8 352 448 412.2 448 486.4c0 14.1-11.5 25.6-25.6 25.6L25.6 512C11.5 512 0 500.5 0 486.4C0 412.2 60.2 352 134.4 352l73.6 0 16 0z" })] })));
};
export default IpsUserHeadsetIcon;
//# sourceMappingURL=ips-user-headset.js.map