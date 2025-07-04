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
export const IpsEngineIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-engine ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-engine" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M400 112c13.3 0 24-10.7 24-24s-10.7-24-24-24L208 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 0 32-72 0-48 0-32 0c-17.7 0-32 14.3-32 32l0 56-48 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24L0 352c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 48 0 0 72c0 17.7 14.3 32 32 32l44.8 0 32 40c12.1 15.2 30.5 24 50 24L448 448c35.3 0 64-28.7 64-64l0-145.2c0-19.4-8.8-37.8-24-50L449.5 158c-11.3-9.1-25.4-14-40-14L328 144l0-32 72 0zM544 224l0 192c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm-256 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM160 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" })] })));
};
export default IpsEngineIcon;
//# sourceMappingURL=ips-engine.js.map