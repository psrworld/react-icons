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
export const IpsSnoozeIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-snooze ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-snooze" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0-57.6 76.8c-7.3 9.7-8.4 22.7-3 33.5s16.5 17.7 28.6 17.7l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 57.6-76.8c7.3-9.7 8.4-22.7 3-33.5S300.1 0 288 0L192 0zM320 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0-57.6 76.8c-7.3 9.7-8.4 22.7-3 33.5s16.5 17.7 28.6 17.7l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 57.6-76.8c7.3-9.7 8.4-22.7 3-33.5S428.1 224 416 224l-96 0zM32 256c-17.7 0-32 14.3-32 32s14.3 32 32 32l91.7 0L7.4 459.5c-7.9 9.5-9.7 22.8-4.4 34.1S19.6 512 32 512l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-91.7 0L216.6 308.5c7.9-9.5 9.7-22.8 4.4-34.1s-16.6-18.4-29-18.4L32 256z" })] })));
};
export default IpsSnoozeIcon;
//# sourceMappingURL=ips-snooze.js.map