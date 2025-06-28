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
export const IpsCrateEmptyIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-crate-empty ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-crate-empty" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M48 224c-26.5 0-48 21.5-48 48l0 80 512 0 0-80c0-26.5-21.5-48-48-48L48 224zM512 384L0 384l0 80c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-80zM64 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM48 448a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM448 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM432 448a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" })] })));
};
export default IpsCrateEmptyIcon;
//# sourceMappingURL=ips-crate-empty.js.map