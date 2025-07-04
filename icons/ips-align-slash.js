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
export const IpsAlignSlashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-align-slash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-align-slash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L481.4 352l30.6 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112.3 0-81.7-64L512 224c17.7 0 32-14.3 32-32s-14.3-32-32-32l-275.6 0L154.8 96 512 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L128 32c-13.4 0-24.8 8.2-29.6 19.8L38.8 5.1zM324.9 352l-81.2-64L128 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l196.9 0zM162.5 224l-61.8-48.7c-3 4.9-4.7 10.6-4.7 16.7c0 17.7 14.3 32 32 32l34.5 0zM487.4 480l-81.2-64L128 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l359.4 0z" })] })));
};
export default IpsAlignSlashIcon;
//# sourceMappingURL=ips-align-slash.js.map