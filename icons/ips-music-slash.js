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
export const IpsMusicSlashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-music-slash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-music-slash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-71.5-56C569.8 400.2 576 384.7 576 368l0-264 0-72c0-10.1-4.8-19.6-12.9-25.7s-18.6-7.9-28.3-5l-320 96c-12.7 3.8-21.6 14.9-22.7 27.9L38.8 5.1zM300.7 210.4L512 147l0 145.5c-10-2.9-20.8-4.6-32-4.6c-22.2 0-42.6 6.3-58.8 16.8L300.7 210.4zM192 247.3l0 109.3c-10-3-20.8-4.6-32-4.6c-53 0-96 35.8-96 80s43 80 96 80s96-35.8 96-80l0-134.3-64-50.4z" })] })));
};
export default IpsMusicSlashIcon;
//# sourceMappingURL=ips-music-slash.js.map