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
export const IpsKipSignIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-kip-sign ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-kip-sign" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M340.8 88.3c13.4-11.5 15-31.7 3.5-45.1s-31.7-15-45.1-3.5L128 186.4 128 64c0-17.7-14.3-32-32-32S64 46.3 64 64l0 160-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-122.4L299.2 472.3c13.4 11.5 33.6 9.9 45.1-3.5s9.9-33.6-3.5-45.1L182.5 288 352 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-169.5 0L340.8 88.3z" })] })));
};
export default IpsKipSignIcon;
//# sourceMappingURL=ips-kip-sign.js.map