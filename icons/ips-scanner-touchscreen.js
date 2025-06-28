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
export const IpsScannerTouchscreenIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-scanner-touchscreen ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-scanner-touchscreen" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M152 0l16 0c13.3 0 24 10.7 24 24l0 40-64 0 0-40c0-13.3 10.7-24 24-24zM0 160c0-35.3 28.7-64 64-64l224 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 160zm64 16l0 256c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L80 160c-8.8 0-16 7.2-16 16zM288 24c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24l0 40-64 0 0-40zM240 0c8.8 0 16 7.2 16 16l0 48-32 0 0-48c0-8.8 7.2-16 16-16zM384 16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 256c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-256zM472 0l16 0c13.3 0 24 10.7 24 24l0 240c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-240c0-13.3 10.7-24 24-24z" })] })));
};
export default IpsScannerTouchscreenIcon;
//# sourceMappingURL=ips-scanner-touchscreen.js.map