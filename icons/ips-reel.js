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
export const IpsReelIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-reel ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-reel" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 32C0 14.3 14.3 0 32 0L416 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 24c0 13.3-10.7 24-24 24L88 112c-13.3 0-24-10.7-24-24l0-24L32 64C14.3 64 0 49.7 0 32zM0 480c0-17.7 14.3-32 32-32l32 0 0-24c0-13.3 10.7-24 24-24l272 0c13.3 0 24 10.7 24 24l0 24 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32zM80 144l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l352 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 240c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 304c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" })] })));
};
export default IpsReelIcon;
//# sourceMappingURL=ips-reel.js.map