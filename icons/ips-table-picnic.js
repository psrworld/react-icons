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
export const IpsTablePicnicIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-table-picnic ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-table-picnic" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M319.3 64L192.7 64c-.5 0-1 0-1.5 0L96 64C78.3 64 64 78.3 64 96s14.3 32 32 32l48.7 0-38.4 96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l48.7 0 68.9 0 212.7 0 68.9 0 48.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-74.3 0-38.4-96 48.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-95.3 0c-.5 0-1 0-1.5 0zM444.1 320l-68.9 0 43.2 107.9c6.6 16.4 25.2 24.4 41.6 17.8s24.4-25.2 17.8-41.6L444.1 320zm-307.2 0l-68.9 0L34.3 404.1c-6.6 16.4 1.4 35 17.8 41.6s35-1.4 41.6-17.8L136.9 320zm38.4-96l38.4-96 84.7 0 38.4 96-161.5 0z" })] })));
};
export default IpsTablePicnicIcon;
//# sourceMappingURL=ips-table-picnic.js.map