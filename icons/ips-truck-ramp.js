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
export const IpsTruckRampIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-truck-ramp ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-truck-ramp" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M640 400L640 0 416 0c-35.3 0-64 28.7-64 64l0 289.8L31.6 441.1c-17.1 4.6-27.1 22.2-22.5 39.3s22.2 27.1 39.3 22.5L416 402.7C417.5 463.3 467 512 528 512c61.9 0 112-50.1 112-112zM528 352a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" })] })));
};
export default IpsTruckRampIcon;
//# sourceMappingURL=ips-truck-ramp.js.map