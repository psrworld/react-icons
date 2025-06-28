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
export const IpsDiceD4Icon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-dice-d4 ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-dice-d4" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M228.8 .7C235.5 2.8 240 9 240 16l0 480c0 6.3-3.7 12-9.4 14.6s-12.5 1.6-17.2-2.6L5.4 324c-6.1-5.4-7.2-14.5-2.5-21.2l208-296c4-5.7 11.3-8.2 17.9-6.1zm54.4 0c6.7-2.1 13.9 .3 17.9 6.1l208 296c4.7 6.7 3.6 15.8-2.5 21.2l-208 184c-4.7 4.2-11.4 5.2-17.2 2.6s-9.4-8.3-9.4-14.6l0-480c0-7 4.5-13.2 11.2-15.3z" })] })));
};
export default IpsDiceD4Icon;
//# sourceMappingURL=ips-dice-d4.js.map