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
export const IpsBracketCurlyIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 256 512", fill: color, className: `react-icon solid-icon ips-bracket-curly ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bracket-curly" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 128c0-53 43-96 96-96l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32l0 37.5c0 25.5-10.1 49.9-28.1 67.9L77.3 256l22.6 22.6c18 18 28.1 42.4 28.1 67.9l0 37.5c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-53 0-96-43-96-96l0-37.5c0-8.5-3.4-16.6-9.4-22.6L9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l45.3-45.3c6-6 9.4-14.1 9.4-22.6L64 128z" })] })));
};
export default IpsBracketCurlyIcon;
//# sourceMappingURL=ips-bracket-curly.js.map