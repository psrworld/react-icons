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
export const IpsRectangleProIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-rectangle-pro ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-rectangle-pro" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm40 128l56 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-32 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64 0-80c0-13.3 10.7-24 24-24zm56 80c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 32 32 0zm80-56c0-13.3 10.7-24 24-24l56 0c35.3 0 64 28.7 64 64c0 21.9-11 41.2-27.7 52.7l24.1 38.5c7 11.2 3.6 26-7.6 33.1s-26 3.6-33.1-7.6l-33-52.7L288 288l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64 0-80zm48 56l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 32zm200-80c48.6 0 88 39.4 88 88l0 16c0 48.6-39.4 88-88 88s-88-39.4-88-88l0-16c0-48.6 39.4-88 88-88zm-40 88l0 16c0 22.1 17.9 40 40 40s40-17.9 40-40l0-16c0-22.1-17.9-40-40-40s-40 17.9-40 40z" })] })));
};
export default IpsRectangleProIcon;
//# sourceMappingURL=ips-rectangle-pro.js.map