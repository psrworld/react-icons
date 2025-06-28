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
export const IpsGrateIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-grate ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-grate" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 32C28.7 32 0 60.7 0 96L0 256 0 416c0 35.3 28.7 64 64 64l64 0 96 0 96 0 64 0c35.3 0 64-28.7 64-64l0-160 0-160c0-35.3-28.7-64-64-64l-64 0-96 0-96 0L64 32zm0 64l32 0 0 128-32 0L64 96zm0 192l32 0 0 128-32 0 0-128zm96 128l0-128 32 0 0 128-32 0zm96 0l0-128 32 0 0 128-32 0zm96 0l0-128 32 0 0 128-32 0zm32-192l-32 0 0-128 32 0 0 128zM288 96l0 128-32 0 0-128 32 0zm-96 0l0 128-32 0 0-128 32 0z" })] })));
};
export default IpsGrateIcon;
//# sourceMappingURL=ips-grate.js.map