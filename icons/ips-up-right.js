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
export const IpsUpRightIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-up-right ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-up-right" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M336 80L96 80c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l72 72L11.3 340.7C4.1 347.9 0 357.8 0 368s4.1 20.1 11.3 27.3l41.4 41.4C59.9 443.9 69.8 448 80 448s20.1-4.1 27.3-11.3L241.4 302.6l72 72c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-240c0-17.7-14.3-32-32-32z" })] })));
};
export default IpsUpRightIcon;
//# sourceMappingURL=ips-up-right.js.map