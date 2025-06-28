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
export const IpsHammerWarIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-hammer-war ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-hammer-war" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M192 0c17.7 0 32 14.3 32 32l0 18.8L347.3 32.4c9.2-1.4 18.6 1.3 25.6 7.4S384 54.7 384 64l0 192c0 9.3-4.1 18.2-11.1 24.2s-16.4 8.8-25.6 7.4L196.7 265.1c-3.1-.5-6.3-.5-9.5 0L36.7 287.6c-9.2 1.4-18.6-1.3-25.6-7.4S0 265.3 0 256L0 64c0-9.3 4.1-18.2 11.1-24.2s16.4-8.8 25.6-7.4L160 50.8 160 32c0-17.7 14.3-32 32-32zm0 296.7l32 4.8L224 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-178.5 32-4.8z" })] })));
};
export default IpsHammerWarIcon;
//# sourceMappingURL=ips-hammer-war.js.map