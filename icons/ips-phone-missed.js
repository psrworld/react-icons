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
export const IpsPhoneMissedIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-phone-missed ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-phone-missed" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M232 0c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-39 39 58.7 58.7C282.3 152.4 300.8 160 320 160s37.7-7.6 51.3-21.3L503 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L405.3 172.7C382.6 195.3 352 208 320 208s-62.6-12.7-85.3-35.3L176 113.9l-39 39c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2L96 24c0-13.3 10.7-24 24-24L232 0zM51.4 489.9l-35.4-62c-9.7-16.9-8.3-38.1 5.5-51.7C72.6 325.9 178.1 256 320 256s247.4 69.9 298.5 120.2c13.9 13.6 15.2 34.8 5.5 51.7l-35.4 62c-7.4 12.9-22.7 19.1-37 14.8L438.8 470.8c-13.5-4.1-22.8-16.5-22.8-30.6l0-56.2c-62.3-20.8-129.7-20.8-192 0l0 56.2c0 14.1-9.3 26.6-22.8 30.6L88.4 504.7c-14.3 4.3-29.6-1.8-37-14.8z" })] })));
};
export default IpsPhoneMissedIcon;
//# sourceMappingURL=ips-phone-missed.js.map