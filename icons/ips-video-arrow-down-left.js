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
export const IpsVideoArrowDownLeftIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-video-arrow-down-left ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-video-arrow-down-left" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm512 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64L416 174.9l0 17.1 0 128 0 17.1 14.2 9.5 96 64c9.8 6.5 22.4 7.2 32.9 1.6s16.9-16.4 16.9-28.2l0-256zM232 352l-112 0c-13.3 0-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24s24 10.7 24 24l0 54.1L247 167c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-103 103 54.1 0c13.3 0 24 10.7 24 24s-10.7 24-24 24z" })] })));
};
export default IpsVideoArrowDownLeftIcon;
//# sourceMappingURL=ips-video-arrow-down-left.js.map