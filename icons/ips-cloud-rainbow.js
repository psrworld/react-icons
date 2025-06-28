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
export const IpsCloudRainbowIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-cloud-rainbow ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-cloud-rainbow" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M560 64.4C466.8 69.5 385.4 119 336.5 192l-.5 0c-19.7 0-38.3 5.1-54.4 14.1c-5.5-6-11.5-11.4-18-16.4C319.9 81.4 430.9 6.1 560 .4c8.8-.4 16 6.8 16 15.6l0 32c0 8.8-7.2 16-16 16.4zM424 234.7c-13.3-16.9-31.5-29.9-52.3-36.9C415.4 139.9 483.1 101.2 560 96.5c8.8-.5 16 6.7 16 15.5l0 32c0 8.8-7.2 15.9-16 16.7c-55.3 4.6-104 32.6-136 74zm23.4 57.2c-1-9.1-3-17.9-6.1-26.2c25.7-40.1 68.9-67.9 118.8-72.9c8.8-.9 16 6.4 16 15.2l0 32c0 8.8-7.2 15.9-15.9 17.3c-31.4 5.2-57.7 25.8-70.9 53.7c-12.5-8.7-26.6-15.3-41.8-19.1zM96 512c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 318.1 64 311.1 64 304c0-61.9 50.1-112 112-112c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96L96 512z" })] })));
};
export default IpsCloudRainbowIcon;
//# sourceMappingURL=ips-cloud-rainbow.js.map