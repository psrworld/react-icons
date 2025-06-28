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
export const IpsGrateDropletIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-grate-droplet ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-grate-droplet" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 96C0 60.7 28.7 32 64 32l64 0 96 0 96 0 64 0c35.3 0 64 28.7 64 64l0 66.2c-15.1 4.3-28.2 14.6-35.8 28.8L336.9 332.2C325.8 353.1 320 376.4 320 400c0 29.6 8.9 57.1 24.2 80L320 480l-96 0-96 0-64 0c-35.3 0-64-28.7-64-64L0 256 0 96zm96 0L64 96l0 128 32 0L96 96zM64 416l32 0 0-128-32 0 0 128zm128 0l0-128-32 0 0 128 32 0zm96 0l0-128-32 0 0 128 32 0zM384 96l-32 0 0 128 32 0 0-128zM256 96l0 128 32 0 0-128-32 0zm-96 0l0 128 32 0 0-128-32 0zM440.5 206.1c4.6-8.7 13.7-14.1 23.5-14.1s18.9 5.4 23.5 14.1l75.3 141.2c8.7 16.2 13.2 34.3 13.2 52.7c0 61.9-50.1 112-112 112s-112-50.1-112-112c0-18.4 4.5-36.5 13.2-52.7l75.3-141.2z" })] })));
};
export default IpsGrateDropletIcon;
//# sourceMappingURL=ips-grate-droplet.js.map