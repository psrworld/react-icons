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
export const IpsBridgeCircleCheckIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-bridge-circle-check ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bridge-circle-check" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 32C46.3 32 32 46.3 32 64s14.3 32 32 32l40 0 0 64-72 0 0 128c53 0 96 43 96 96l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-53 43-96 96-96c6.3 0 12.4 .6 18.3 1.7C367.1 231.8 426.9 192 496 192c42.5 0 81.6 15.1 112 40.2l0-72.2-72 0 0-64 40 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM488 96l0 64-80 0 0-64 80 0zM360 96l0 64-80 0 0-64 80 0zM232 96l0 64-80 0 0-64 80 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" })] })));
};
export default IpsBridgeCircleCheckIcon;
//# sourceMappingURL=ips-bridge-circle-check.js.map