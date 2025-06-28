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
export const IpsHighDefinitionIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-high-definition ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-high-definition" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm304 88l0 144c0 13.3 10.7 24 24 24l56 0c53 0 96-43 96-96s-43-96-96-96l-56 0c-13.3 0-24 10.7-24 24zm80 24c26.5 0 48 21.5 48 48s-21.5 48-48 48l-32 0 0-96 32 0zM160 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72 0 72c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48 64 0 0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 48-64 0 0-48z" })] })));
};
export default IpsHighDefinitionIcon;
//# sourceMappingURL=ips-high-definition.js.map