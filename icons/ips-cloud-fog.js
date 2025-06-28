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
export const IpsCloudFogIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-cloud-fog ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-cloud-fog" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M160 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2c-1.3-6.7-1.9-13.7-1.9-20.8C128 50.1 178.1 0 240 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96l-320 0zM0 392c0-13.3 10.7-24 24-24l528 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 416c-13.3 0-24-10.7-24-24zm64 96c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L88 512c-13.3 0-24-10.7-24-24zm208 0c0-13.3 10.7-24 24-24l320 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-320 0c-13.3 0-24-10.7-24-24z" })] })));
};
export default IpsCloudFogIcon;
//# sourceMappingURL=ips-cloud-fog.js.map