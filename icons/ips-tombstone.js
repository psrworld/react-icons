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
export const IpsTombstoneIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-tombstone ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-tombstone" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M32 192C32 86 118 0 224 0S416 86 416 192l0 224L32 416l0-224zM0 480c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32zM248 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0 0 120c0 13.3 10.7 24 24 24s24-10.7 24-24l0-120 48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-40z" })] })));
};
export default IpsTombstoneIcon;
//# sourceMappingURL=ips-tombstone.js.map