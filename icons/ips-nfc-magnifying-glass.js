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
export const IpsNfcMagnifyingGlassIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-nfc-magnifying-glass ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-nfc-magnifying-glass" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 64c-22.8 0-44.4 4.8-64 13.3l0-29.3c0-26.5-21.5-48-48-48l-80 0c-26.5 0-48 21.5-48 48l0 66.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-66.7c0-8.8 7.2-16 16-16l80 0c8.8 0 16 7.2 16 16l0 48c-38.9 29.2-64 75.7-64 128c0 22.8 4.8 44.4 13.3 64L112 384c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-26.5 0-48 21.5-48 48l0 224c0 26.5 21.5 48 48 48l208 0c21.6 28.8 52.7 50 88.6 59.1c-7.6 3.2-15.9 4.9-24.6 4.9L64 480c-35.3 0-64-28.7-64-64L0 96zM448 400.2a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0 48c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9L633 471.2c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L519.9 426c-20.5 14-45.3 22.1-71.9 22.1z" })] })));
};
export default IpsNfcMagnifyingGlassIcon;
//# sourceMappingURL=ips-nfc-magnifying-glass.js.map