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
export const IpsPenLineIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-pen-line ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pen-line" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-48.4 48.4L314.3 67.7l48.4-48.4c25-25 65.5-25 90.5 0zM58.6 323.5L291.7 90.3 421.7 220.3 188.5 453.4c-10.4 10.4-23.3 18-37.4 22.2L30.8 511c-8.4 2.5-17.5 .2-23.7-6.1S-1.5 489.7 1 481.2L36.4 360.9c4.2-14.1 11.8-27 22.2-37.4zM248 464l304 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-304 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" })] })));
};
export default IpsPenLineIcon;
//# sourceMappingURL=ips-pen-line.js.map