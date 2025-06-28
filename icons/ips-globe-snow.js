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
export const IpsGlobeSnowIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-globe-snow ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-globe-snow" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M448 224c0 62.7-25.7 119.3-67.2 160L256 384l0-32 64 0c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4L262.6 256l25.4 0c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9l25.4 0-68.7 68.7c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9l64 0 0 32L67.2 384C25.7 343.3 0 286.7 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224zM256 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm80 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM96 208a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM20.3 474.2L61.1 416l325.8 0 40.8 58.2c5.1 7.3 5.8 16.9 1.6 24.8S416.9 512 408 512L40 512c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8z" })] })));
};
export default IpsGlobeSnowIcon;
//# sourceMappingURL=ips-globe-snow.js.map