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
export const IpsOutletIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-outlet ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-outlet" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm0 224c0-61.1 30.8-99.1 49.7-116.6c8.8-8.2 20.7-11.4 32.6-11.4l155.3 0c12 0 23.9 3.3 32.6 11.4C353.2 156.9 384 194.9 384 256s-30.8 99-49.7 116.6c-8.8 8.2-20.7 11.4-32.6 11.4l-155.3 0c-12 0-23.9-3.3-32.6-11.4C94.8 355 64 317.1 64 256zm96-64c-8.8 0-16 7.2-16 16l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48c0-8.8-7.2-16-16-16zm128 0c-8.8 0-16 7.2-16 16l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48c0-8.8-7.2-16-16-16zm-64 96c-13.3 0-24 10.7-24 24l0 16c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-16c0-13.3-10.7-24-24-24z" })] })));
};
export default IpsOutletIcon;
//# sourceMappingURL=ips-outlet.js.map