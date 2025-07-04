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
export const IpsCrosshairsSimpleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-crosshairs-simple ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-crosshairs-simple" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M445.3 224L384 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l61.3 0C431.9 368.4 368.4 431.9 288 445.3l0-61.3c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 61.3C143.6 431.9 80.1 368.4 66.7 288l61.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-61.3 0C80.1 143.6 143.6 80.1 224 66.7l0 61.3c0 17.7 14.3 32 32 32s32-14.3 32-32l0-61.3C368.4 80.1 431.9 143.6 445.3 224zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256z" })] })));
};
export default IpsCrosshairsSimpleIcon;
//# sourceMappingURL=ips-crosshairs-simple.js.map