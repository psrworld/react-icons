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
export const IpsCommandIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-command ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-command" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 96C0 43 43 0 96 0s96 43 96 96l0 32 128 0 0-32c0-53 43-96 96-96s96 43 96 96s-43 96-96 96l-32 0 0 128 32 0c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96l0-32-128 0 0 32c0 53-43 96-96 96s-96-43-96-96s43-96 96-96l32 0 0-128-32 0C43 192 0 149 0 96zm128 32l0-32c0-17.7-14.3-32-32-32S64 78.3 64 96s14.3 32 32 32l32 0zm64 192l128 0 0-128-128 0 0 128zm-64 64l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32l0-32zm256 0l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32l-32 0zm0-256l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32l0 32z" })] })));
};
export default IpsCommandIcon;
//# sourceMappingURL=ips-command.js.map