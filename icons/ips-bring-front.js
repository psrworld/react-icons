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
export const IpsBringFrontIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-bring-front ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bring-front" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 64l64 0 32 0 32 0 64 0c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 192c0 35.3 28.7 64 64 64l64 0 0-64-64 0L64 64zM480 448l-32 0-64 0c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-64 0 0 64 64 0 0 128-64 0-32 0zM224 96c-35.3 0-64 28.7-64 64l0 192c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L224 96z" })] })));
};
export default IpsBringFrontIcon;
//# sourceMappingURL=ips-bring-front.js.map