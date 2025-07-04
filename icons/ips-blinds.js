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
export const IpsBlindsIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-blinds ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-blinds" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M32 0C14.3 0 0 14.3 0 32C0 43.4 6 53.4 15 59.1L1.1 100.8c-.7 2.1-1.1 4.3-1.1 6.5C0 118.8 9.2 128 20.6 128L128 128l0-64 32 0 0 64 331.4 0c11.4 0 20.6-9.2 20.6-20.6c0-2.2-.4-4.4-1.1-6.5L497 59.1c9-5.7 15-15.7 15-27.1c0-17.7-14.3-32-32-32L32 0zM24 160L1.1 228.8c-.7 2.1-1.1 4.3-1.1 6.5C0 246.8 9.2 256 20.6 256l78.1 0c4.8-13.6 15.6-24.4 29.3-29.3l0-66.7L24 160zM144 320c-20.9 0-38.7-13.4-45.3-32L24 288 1.1 356.8c-.7 2.1-1.1 4.3-1.1 6.5C0 374.8 9.2 384 20.6 384l470.7 0c11.4 0 20.6-9.2 20.6-20.6c0-2.2-.4-4.4-1.1-6.5L488 288l-298.7 0c-6.6 18.6-24.4 32-45.3 32zm16-93.3c13.6 4.8 24.4 15.6 29.3 29.3l302.1 0c11.4 0 20.6-9.2 20.6-20.6c0-2.2-.4-4.4-1.1-6.5L488 160l-328 0 0 66.7zM20.6 512l470.7 0c11.4 0 20.6-9.2 20.6-20.6c0-2.2-.4-4.4-1.1-6.5L488 416 24 416 1.1 484.8c-.7 2.1-1.1 4.3-1.1 6.5C0 502.8 9.2 512 20.6 512z" })] })));
};
export default IpsBlindsIcon;
//# sourceMappingURL=ips-blinds.js.map