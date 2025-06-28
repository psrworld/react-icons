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
export const IpsSlidersSimpleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-sliders-simple ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-sliders-simple" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M96 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm90.5 0L480 320c17.7 0 32 14.3 32 32s-14.3 32-32 32l-293.5 0c-13.2 37.3-48.7 64-90.5 64c-53 0-96-43-96-96s43-96 96-96c41.8 0 77.4 26.7 90.5 64zM384 160a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-58.5-32c13.2-37.3 48.7-64 90.5-64c53 0 96 43 96 96s-43 96-96 96c-41.8 0-77.4-26.7-90.5-64L32 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l293.5 0z" })] })));
};
export default IpsSlidersSimpleIcon;
//# sourceMappingURL=ips-sliders-simple.js.map