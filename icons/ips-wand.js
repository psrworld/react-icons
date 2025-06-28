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
export const IpsWandIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-wand ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-wand" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M497 7c-9-9-23.5-9.4-33-.9L189.3 251.9c-2.9 2.6-6.7 4.1-10.7 4.1L144 256c-8.8 0-16 7.2-16 16l0 27.6c0 4.6-1.9 8.9-5.3 11.9L11.1 411.3C4 417.7 0 426.7 0 436.2c0 8.8 3.5 17.3 9.7 23.5l42.6 42.6c6.2 6.2 14.7 9.8 23.5 9.8c9.5 0 18.5-4 24.8-11.1L372.3 197.3c3-3.4 7.4-5.3 11.9-5.3l15.8 0c8.8 0 16-7.2 16-16l0-21.4c0-3.9 1.5-7.7 4.1-10.7L505.9 48c8.5-9.5 8.1-24-.9-33l-8-8z" })] })));
};
export default IpsWandIcon;
//# sourceMappingURL=ips-wand.js.map