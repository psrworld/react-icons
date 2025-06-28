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
export const IpsBookTanakhIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-book-tanakh ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-book-tanakh" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M352 0c53 0 96 43 96 96l0 320c0 53-43 96-96 96L64 512l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0L64 0 352 0zm0 384L96 384l0 64 256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32zM138.7 208l13.9 24-27.7 0 13.9-24zm-13.9-24L97.1 232c-6.2 10.7 1.5 24 13.9 24l55.4 0 27.7 48c6.2 10.7 21.6 10.7 27.7 0l27.7-48 55.4 0c12.3 0 20-13.3 13.9-24l-27.7-48 27.7-48c6.2-10.7-1.5-24-13.9-24l-55.4 0L221.9 64c-6.2-10.7-21.6-10.7-27.7 0l-27.7 48L111 112c-12.3 0-20 13.3-13.9 24l27.7 48zm27.7 0l27.7-48 55.4 0 27.7 48-27.7 48-55.4 0-27.7-48zm0-48l-13.9 24-13.9-24 27.7 0zm41.6-24L208 88l13.9 24-27.7 0zm69.3 24l27.7 0-13.9 24-13.9-24zm13.9 72l13.9 24-27.7 0 13.9-24zm-55.4 48L208 280l-13.9-24 27.7 0z" })] })));
};
export default IpsBookTanakhIcon;
//# sourceMappingURL=ips-book-tanakh.js.map