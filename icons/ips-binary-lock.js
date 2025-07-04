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
export const IpsBinaryLockIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-binary-lock ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-binary-lock" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M322.7 6c-8.3-6-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2 0 83.6-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l48 0 48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-128c0-10.3-4.9-19.9-13.3-26zM98.7 294c-8.3-6-19.1-7.7-28.8-4.4l-48 16C5.1 311.2-3.9 329.4 1.7 346.1s23.7 25.8 40.5 20.2l5.9-2L48 448l-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l48 0 48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-128c0-10.3-4.9-19.9-13.3-26zM64 0C28.7 0 0 28.7 0 64l0 96c0 35.3 28.7 64 64 64l64 0c35.3 0 64-28.7 64-64l0-96c0-35.3-28.7-64-64-64L64 0zm0 64l64 0 0 96-64 0 0-96zM192 352l0 96c0 35.3 28.7 64 64 64l64 0c35.3 0 64-28.7 64-64l0-96c0-35.3-28.7-64-64-64l-64 0c-35.3 0-64 28.7-64 64zm128 0l0 96-64 0 0-96 64 0zM528 240c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" })] })));
};
export default IpsBinaryLockIcon;
//# sourceMappingURL=ips-binary-lock.js.map