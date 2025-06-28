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
export const IpsBatteryExclamationIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-battery-exclamation ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-battery-exclamation" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M208 96l0 64L80 160c-8.8 0-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16l118.7 0c-4.3 9.8-6.7 20.6-6.7 32s2.4 22.2 6.7 32L80 416c-44.2 0-80-35.8-80-80L0 176c0-44.2 35.8-80 80-80l128 0zM464 416l-118.7 0c4.3-9.8 6.7-20.6 6.7-32s-2.4-22.2-6.7-32L464 352c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-128 0 0-64 128 0c44.2 0 80 35.8 80 80l0 16c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 16c0 44.2-35.8 80-80 80zM272 96c13.3 0 24 10.7 24 24l0 176c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-176c0-13.3 10.7-24 24-24zM240 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" })] })));
};
export default IpsBatteryExclamationIcon;
//# sourceMappingURL=ips-battery-exclamation.js.map