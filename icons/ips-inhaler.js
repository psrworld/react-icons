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
export const IpsInhalerIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-inhaler ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-inhaler" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M429.8 32.7c-12.7-3.2-25.6 4.4-29 17l-14 51.8L533.2 248 575.2 94.3c1.7-6.2 .8-12.9-2.4-18.4s-8.6-9.6-14.9-11.2l-128-32zM534.1 305.5c1.5-5.5-.1-11.5-4.1-15.5L383.8 143.8c-8.7-8.7-23.6-4.7-26.8 7.2l-16.5 61.2c-1.9 7-8.2 11.8-15.4 11.8L232 224c-22.1 0-40 17.9-40 40l0 176c0 22.1 17.9 40 40 40l224 0c18 0 33.8-12.1 38.6-29.5l39.5-145zM64 256A32 32 0 1 0 0 256a32 32 0 1 0 64 0zm0 96A32 32 0 1 0 0 352a32 32 0 1 0 64 0zm64-16a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM64 448A32 32 0 1 0 0 448a32 32 0 1 0 64 0zm64-16a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" })] })));
};
export default IpsInhalerIcon;
//# sourceMappingURL=ips-inhaler.js.map