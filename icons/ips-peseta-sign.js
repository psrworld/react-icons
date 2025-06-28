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
export const IpsPesetaSignIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-peseta-sign ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-peseta-sign" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 32C46.3 32 32 46.3 32 64l0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 96 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 96 0c77.4 0 142-55 156.8-128l3.2 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-3.2 0C334 87 269.4 32 192 32L64 32zM282.5 160L96 160l0-64 96 0c41.8 0 77.4 26.7 90.5 64zM96 224l186.5 0c-13.2 37.3-48.7 64-90.5 64l-96 0 0-64z" })] })));
};
export default IpsPesetaSignIcon;
//# sourceMappingURL=ips-peseta-sign.js.map