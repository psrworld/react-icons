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
export const IpsToggleLargeOffIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-toggle-large-off ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-toggle-large-off" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M192 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256zm0 64l192 0c106 0 192-86 192-192s-86-192-192-192L192 64C86 64 0 150 0 256S86 448 192 448zm143.1-64c30.4-34 48.9-78.8 48.9-128s-18.5-94-48.9-128l48.9 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-48.9 0z" })] })));
};
export default IpsToggleLargeOffIcon;
//# sourceMappingURL=ips-toggle-large-off.js.map