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
export const IpsSignalSlashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-signal-slash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-signal-slash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L608 451.2 608 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 369.1-64-50.2L480 128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 172.8-64-50.2 0-26.6c0-17.7-14.3-32-32-32c-10.7 0-20.1 5.2-25.9 13.2L38.8 5.1zM576 512l-.3 0 .6 0-.3 0zm-96-32l0-5.8-64-50.4 0 56.2c0 17.7 14.3 32 32 32s32-14.3 32-32zM352 373.3l-64-50.4L288 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-106.7zM192 288c-17.7 0-32 14.3-32 32l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32zM96 416c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64z" })] })));
};
export default IpsSignalSlashIcon;
//# sourceMappingURL=ips-signal-slash.js.map