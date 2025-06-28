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
export const IpsObjectsAlignLeftIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-objects-align-left ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-objects-align-left" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 24L0 488c0 13.3 10.7 24 24 24s24-10.7 24-24L48 24C48 10.7 37.3 0 24 0S0 10.7 0 24zM176 64c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L176 64zm0 224c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-160 0z" })] })));
};
export default IpsObjectsAlignLeftIcon;
//# sourceMappingURL=ips-objects-align-left.js.map