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
export const IpsPhoneHangupIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-phone-hangup ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-phone-hangup" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M11.7 266.3l41.9 94.3c6.1 13.7 20.8 21.3 35.5 18.4l109.2-21.8c15-3 25.7-16.1 25.7-31.4V240c62.3-20.8 129.7-20.8 192 0v85.8c0 15.3 10.8 28.4 25.7 31.4L550.9 379c14.7 2.9 29.4-4.7 35.5-18.4l41.9-94.3c7.2-16.2 5.1-35.1-7.4-47.7C570.8 168.1 464.2 96 320 96S69.2 168.1 19.1 218.6c-12.5 12.6-14.6 31.5-7.4 47.7z" })] })));
};
export default IpsPhoneHangupIcon;
//# sourceMappingURL=ips-phone-hangup.js.map