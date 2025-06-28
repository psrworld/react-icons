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
export const IpsFileSpreadsheetIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-file-spreadsheet ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-file-spreadsheet" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM88 224l208 0c17.7 0 32 14.3 32 32l0 16 0 80 0 64c0 17.7-14.3 32-32 32l-64 0-80 0-64 0c-17.7 0-32-14.3-32-32l0-64 0-80 0-16c0-17.7 14.3-32 32-32zm0 112l48 0 0-48-48 0 0 48zm80 0l48 0 0-48-48 0 0 48zm80 0l48 0 0-48-48 0 0 48zm0 32l0 48 48 0 0-48-48 0zm-32 0l-48 0 0 48 48 0 0-48zm-80 0l-48 0 0 48 48 0 0-48z" })] })));
};
export default IpsFileSpreadsheetIcon;
//# sourceMappingURL=ips-file-spreadsheet.js.map