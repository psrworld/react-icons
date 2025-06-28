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
export const IpsFaceSmilePlusIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-face-smile-plus ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-face-smile-plus" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M544 0c-13.3 0-24 10.7-24 24l0 48-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0 0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48 48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-48c0-13.3-10.7-24-24-24zM224 512a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM144.4 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM140 346.1c20.5 23.3 50.6 37.9 84 37.9s63.5-14.6 84-37.9c5.8-6.6 16-7.3 22.6-1.4s7.3 16 1.4 22.6C305.6 397.1 267 416 224 416s-81.6-18.9-108-48.7c-5.8-6.6-5.2-16.7 1.4-22.6s16.7-5.2 22.6 1.4z" })] })));
};
export default IpsFaceSmilePlusIcon;
//# sourceMappingURL=ips-face-smile-plus.js.map