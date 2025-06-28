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
export const IpsMandolinIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-mandolin ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-mandolin" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M435.3 3.6C444.8-2.3 457.1-.9 465 7l40 40c7.9 7.9 9.3 20.2 3.4 29.7l-40 64c-3.2 5.1-8.2 8.8-14 10.4L388 169.2l-65.9 65.9C323.7 322.4 311.5 512 176 512C78.8 512 0 433.2 0 336C0 200.5 189.6 188.3 276.9 189.8L342.8 124l18.1-66.3c1.6-5.8 5.3-10.8 10.4-14l64-40zM208 352a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" })] })));
};
export default IpsMandolinIcon;
//# sourceMappingURL=ips-mandolin.js.map