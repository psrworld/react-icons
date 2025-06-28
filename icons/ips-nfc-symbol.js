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
export const IpsNfcSymbolIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-nfc-symbol ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-nfc-symbol" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M348.9 471.8c10.3 9.3 25.4 10.8 37.4 3.9C461.6 432.1 512 348.8 512 256s-50.3-176.1-125.7-219.7C371 27.5 351.4 32.7 342.6 48s-3.6 34.9 11.7 43.7C410.1 124 448 186.4 448 256c0 61.4-29.5 117.2-74.8 151.7L213.4 264.2c-13.2-11.8-33.4-10.7-45.2 2.4s-10.7 33.4 2.4 45.2l178.3 160zM163.1 40.2c-10.3-9.3-25.4-10.8-37.4-3.9C50.3 79.9 0 163.2 0 256s50.3 176.1 125.7 219.7c15.3 8.8 34.9 3.6 43.7-11.7s3.6-34.9-11.7-43.7C101.9 388 64 325.7 64 256c0-61.4 29.5-117.2 74.8-151.7L298.6 247.8c13.2 11.8 33.4 10.7 45.2-2.4s10.7-33.4-2.4-45.2L163.1 40.2z" })] })));
};
export default IpsNfcSymbolIcon;
//# sourceMappingURL=ips-nfc-symbol.js.map