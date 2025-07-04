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
export const IpsMaskSnorkelIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-mask-snorkel ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-mask-snorkel" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M544 32c-17.7 0-32 14.3-32 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM512 367.4c0 44.5-36.1 80.6-80.6 80.6c-39.4 0-73-28.5-79.5-67.4l-.3-1.9c-2.9-17.4-19.4-29.2-36.8-26.3s-29.2 19.4-26.3 36.8l.3 1.9C300.4 460.9 360.7 512 431.4 512C511.3 512 576 447.3 576 367.4L576 192l-64 0 0 175.4zM64 64C28.7 64 0 92.7 0 128l0 96c0 35.3 28.7 64 64 64l79.7 0c28.6 0 53.7-18.9 61.5-46.4l3.4-11.7c4.4-15.5 26.3-15.5 30.8 0l3.4 11.7c7.8 27.5 33 46.4 61.5 46.4l79.7 0c35.3 0 64-28.7 64-64l0-96c0-35.3-28.7-64-64-64L64 64z" })] })));
};
export default IpsMaskSnorkelIcon;
//# sourceMappingURL=ips-mask-snorkel.js.map