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
export const IpsMailboxFlagUpIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-mailbox-flag-up ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-mailbox-flag-up" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M400 16c-29.8 0-54.9 20.4-62 48l-92.8 0C290.4 95.9 320 148.5 320 208l0 176c0 24.6-9.2 47-24.4 64L512 448c35.3 0 64-28.7 64-64l0-176c0-42.6-18.5-81-48-107.3L528 80c0-35.3-28.7-64-64-64l-64 0zm0 208c-8.8 0-16-7.2-16-16l0-96 0-32c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 80c0 8.8-7.2 16-16 16zM0 208L0 384c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-176c0-79.5-64.5-144-144-144S0 128.5 0 208zm64 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 224c-8.8 0-16-7.2-16-16z" })] })));
};
export default IpsMailboxFlagUpIcon;
//# sourceMappingURL=ips-mailbox-flag-up.js.map