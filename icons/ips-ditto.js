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
export const IpsDittoIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 320 512", fill: color, className: `react-icon solid-icon ips-ditto ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-ditto" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 96l0 2.3c0 3.8 .3 7.6 1 11.4L26.5 256.5C29.7 274.7 45.5 288 64 288s34.3-13.3 37.5-31.5L127 109.6c.7-3.8 1-7.5 1-11.4l0-2.3c0-35.3-28.7-64-64-64S0 60.7 0 96zm192 0l0 2.3c0 3.8 .3 7.6 1 11.4l25.5 146.8c3.2 18.2 19 31.5 37.5 31.5s34.3-13.3 37.5-31.5L319 109.6c.7-3.8 1-7.5 1-11.4l0-2.3c0-35.3-28.7-64-64-64s-64 28.7-64 64z" })] })));
};
export default IpsDittoIcon;
//# sourceMappingURL=ips-ditto.js.map