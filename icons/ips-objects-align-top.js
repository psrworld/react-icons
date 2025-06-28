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
export const IpsObjectsAlignTopIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-objects-align-top ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-objects-align-top" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M24 0L488 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 48C10.7 48 0 37.3 0 24S10.7 0 24 0zM64 176c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-288zm224 0c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-160z" })] })));
};
export default IpsObjectsAlignTopIcon;
//# sourceMappingURL=ips-objects-align-top.js.map