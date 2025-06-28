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
export const IpsAlarmExclamationIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-alarm-exclamation ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-alarm-exclamation" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M14.9 146.4C5.5 131.6 0 114 0 95.2C0 42.6 42.6 0 95.2 0c25 0 47.8 9.6 64.8 25.4L14.9 146.4zM390.2 467.4C352.8 495.4 306.3 512 256 512s-96.8-16.6-134.1-44.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l35.2-35.2C48.6 384.8 32 338.3 32 288C32 164.3 132.3 64 256 64s224 100.3 224 224c0 50.3-16.6 96.8-44.6 134.2l35.2 35.2c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-35.2-35.2zM352 25.4C369 9.6 391.8 0 416.8 0C469.4 0 512 42.6 512 95.2c0 18.8-5.5 36.3-14.9 51.1L352 25.4zM288 384a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-8-200c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112z" })] })));
};
export default IpsAlarmExclamationIcon;
//# sourceMappingURL=ips-alarm-exclamation.js.map