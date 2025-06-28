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
export const IpsEllipsisStrokeIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-ellipsis-stroke ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-ellipsis-stroke" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M416 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm0-96a72 72 0 1 0 0 144 72 72 0 1 0 0-144zM256 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm0-96a72 72 0 1 0 0 144 72 72 0 1 0 0-144zM120 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-96 0a72 72 0 1 0 144 0A72 72 0 1 0 24 256z" })] })));
};
export default IpsEllipsisStrokeIcon;
//# sourceMappingURL=ips-ellipsis-stroke.js.map