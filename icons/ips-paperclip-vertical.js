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
export const IpsPaperclipVerticalIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-paperclip-vertical ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-paperclip-vertical" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M32 128C32 57.3 89.3 0 160 0s128 57.3 128 128l0 192c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-160c0-17.7 14.3-32 32-32s32 14.3 32 32l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 208c0 61.9 50.1 112 112 112s112-50.1 112-112l0-176c0-17.7 14.3-32 32-32s32 14.3 32 32l0 176c0 97.2-78.8 176-176 176s-176-78.8-176-176l0-208z" })] })));
};
export default IpsPaperclipVerticalIcon;
//# sourceMappingURL=ips-paperclip-vertical.js.map