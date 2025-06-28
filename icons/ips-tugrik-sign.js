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
export const IpsTugrikSignIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-tugrik-sign ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-tugrik-sign" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l128 0 0 103L56.2 225c-17.1 4.3-27.6 21.7-23.3 38.8s21.7 27.6 38.8 23.3L160 265l0 30L56.2 321c-17.1 4.3-27.6 21.7-23.3 38.8s21.7 27.6 38.8 23.3L160 361l0 87c0 17.7 14.3 32 32 32s32-14.3 32-32l0-103L327.8 319c17.1-4.3 27.6-21.7 23.3-38.8s-21.7-27.6-38.8-23.3L224 279l0-30L327.8 223c17.1-4.3 27.6-21.7 23.3-38.8s-21.7-27.6-38.8-23.3L224 183l0-87 128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 32 32 32z" })] })));
};
export default IpsTugrikSignIcon;
//# sourceMappingURL=ips-tugrik-sign.js.map