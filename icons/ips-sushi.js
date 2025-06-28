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
export const IpsSushiIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-sushi ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-sushi" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M479.7 320l-73.8-24.5L506.3 125.6c24.8 26.7 42.1 60.7 48.5 98.8l12.5 75.2c4 23.8-18.8 43.2-41.7 35.6l-7-2.3L479.7 320s0 0 0 0zM393.5 66.1c32.9 4.8 63.2 18 88.7 37.5L374.8 285.2 323.1 268c-14.6-4.9-29.9-7-45.2-6.4L393.5 66.1zm-36-2.1L235.6 270.4 96.1 318.7 246.6 64l110.9 0zM21.3 224.4C36.6 132.2 116.1 64.6 209.5 64L49.4 334.8C27 341.5 5 322.3 8.9 298.9l12.4-74.4zM32 384l0-15c8.5 .7 17.5-.3 26.4-3.4l193-66.9c20-6.9 41.6-7.1 61.7-.4l205.5 68.2c8.6 2.9 17.2 3.8 25.5 3.1l0 14.3c0 35.3-28.7 64-64 64c-19.1 0-36.3-8.4-48-21.7c-11.7 13.3-28.9 21.7-48 21.7s-36.3-8.4-48-21.7c-11.7 13.3-28.9 21.7-48 21.7s-36.3-8.4-48-21.7c-11.7 13.3-28.9 21.7-48 21.7s-36.3-8.4-48-21.7C132.3 439.6 115.1 448 96 448c-35.3 0-64-28.7-64-64z" })] })));
};
export default IpsSushiIcon;
//# sourceMappingURL=ips-sushi.js.map