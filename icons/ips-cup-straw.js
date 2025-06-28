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
export const IpsCupStrawIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-cup-straw ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-cup-straw" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M249.3 0L280 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-30.7 0c-3.7 0-6.9 2.6-7.8 6.2L224.2 128 352 128c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l142.9 0 20-84.8C200.8 17.9 223.4 0 249.3 0zM60.3 468L40 224l304 0L323.7 468c-2.1 24.9-22.9 44-47.8 44l-167.7 0c-25 0-45.8-19.1-47.8-44z" })] })));
};
export default IpsCupStrawIcon;
//# sourceMappingURL=ips-cup-straw.js.map